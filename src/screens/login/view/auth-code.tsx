import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {windowWidth} from '../../../system/helpers/window-size';
import {style} from '../../../system/helpers/styles';
import {Color, UIStyles} from '../../../assets/styles';
import {fonts} from '../../../system/helpers/fonts';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import {StackScreenProps} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../navigation/types/types';
import {Routes} from '../../../navigation/routes';
import {useDispatch} from 'react-redux';
import {AsyncActionsLogin} from '../store/async-actions-login';
import {ArrowLeftIcon} from '../../../components/icons/arrow-left-icon';

const CODE_COUNT = 4;
const TIMER_VALUE = 10;

type TProps = StackScreenProps<TRootStackParamList, Routes.AuthCode>;

export const AuthCode: React.FC<TProps> = ({route, navigation}) => {
  const {request_id, phoneNumber} = route.params;
  const [timerValue, setTimerValue] = useState(TIMER_VALUE);
  const [isError, setIsError] = useState(false);
  const [isVisibleTimer, setIsVisibleTimer] = useState(false);
  const timerID = useRef<NodeJS.Timer | null>(null);

  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const sendCode = async () => {
    try {
      await dispatch(
        AsyncActionsLogin.sendVerificationCode({
          request_id,
          code: value,
        }),
      );
      setIsError(false);
      navigation.navigate(Routes.TabRootScreen);
    } catch (e) {
      setIsError(true);
      console.log('DISPATCH ERROR ', e);
    }
  };

  const clearTimer = () => {
    if (timerID.current) {
      clearInterval(timerID.current);
    }
  };

  const startTimer = () => {
    setIsVisibleTimer(true);
    timerID.current = setInterval(() => {
      if (timerValue >= 0) {
        setTimerValue(state => {
          if (state > 0) {
            return state - 1;
          } else {
            clearTimer();
            setIsVisibleTimer(false);
            return TIMER_VALUE;
          }
        });
      }
    }, 1000);
  };

  useEffect(() => {
    if (value.length === CODE_COUNT) {
      sendCode();
    }
  }, [value]);

  const goBackHandler = (): void => {
    navigation.goBack();
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.root}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={goBackHandler}
          style={{width: '100%', marginTop: 12}}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <View style={{paddingHorizontal: 30}}>
          <Text style={styles.title}>Введите код из СМС</Text>
          <Text style={styles.description}>
            Мы отправили СМС с кодом на номер {phoneNumber || ''}
          </Text>
          <CodeField
            value={value}
            onChangeText={setValue}
            cellCount={CODE_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                // onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <View style={{marginTop: 24}}>
            {isError && (
              <Text style={styles.failedCodeTitle}>
                Код указан не верно.{'\n'}Попробуйте еще раз
              </Text>
            )}
          </View>
        </View>

        <View style={{marginTop: 'auto', alignItems: 'center'}}>
          {isVisibleTimer ? (
            <Text style={styles.sendNewCodeTitle}>
              Отправка нового кода через {timerValue} сек
            </Text>
          ) : (
            <Text onPress={startTimer} style={styles.sendNewCodeTitle}>
              Отправить новый код
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: style.view({
    backgroundColor: Color.WHITE,
    ...UIStyles.paddingH16,
    // paddingHorizontal: windowWidth * 0.12,
    alignItems: 'center',
    height: '100%',
  }),
  codeFieldRoot: {
    color: Color.DARK,
  },
  title: style.text({
    textAlign: 'center',
    fontSize: windowWidth * 0.064,
    fontFamily: fonts.robotoBold,
    paddingTop: windowWidth * 0.17,
  }),
  description: style.text({
    fontSize: windowWidth * 0.048,
    fontFamily: fonts.robotoRegular,
    paddingTop: windowWidth * 0.04,
  }),
  cellRoot: style.view({
    marginTop: windowWidth * 0.09,
    width: windowWidth * 0.1,
    height: windowWidth * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Color.GREY_100,
    borderBottomWidth: windowWidth * 0.005,
    borderRadius: windowWidth * 0.002,
    marginHorizontal: windowWidth * 0.021,
  }),
  cellText: style.text({
    color: Color.BLACK,
    fontSize: windowWidth * 0.064,
    textAlign: 'center',
  }),
  focusCell: style.view({
    borderBottomColor: Color.BLACK,
    borderBottomWidth: windowWidth * 0.005,
  }),
  forgetPasswordButton: style.view({
    position: 'absolute',
    bottom: windowWidth * 0.06,
  }),
  forgetPasswordTitle: style.text({
    fontFamily: fonts.robotoRegular,
    fontSize: windowWidth * 0.04,
    color: Color.BACKGROUND_COLOR,
  }),
  forgetPasswordTitleSendCode: style.text({
    fontFamily: fonts.robotoRegular,
    fontSize: windowWidth * 0.04,
    color: Color.GREY_900,
  }),
  forgetPasswordTitleSendCodeTime: style.text({
    fontFamily: fonts.robotoBold,
    fontSize: windowWidth * 0.04,
    color: Color.BLACK,
  }),
  backArrowButton: style.view({
    paddingTop: windowWidth * 0.04,
    alignSelf: 'flex-start',
    marginLeft: windowWidth * -0.05,
  }),
  backArrow: style.image({
    width: windowWidth * 0.04,
    height: windowWidth * 0.04,
  }),
  failedCodeTitle: {
    ...UIStyles.font15,
    color: Color.PRIMARY,
    textAlign: 'center',
  },
  sendNewCodeTitle: {
    ...UIStyles.font15,
    color: Color.PRIMARY,
  },
});
