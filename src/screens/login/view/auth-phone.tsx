import React, {useCallback, useState} from 'react';
import {TextInputMask} from 'react-native-masked-text';
import {useInput} from '../../../system/hooks/use-input';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Routes} from '../../../navigation/routes';
import {ThemedButton} from '../../../components/buttons/themed-button';
import {windowWidth} from '../../../system/helpers/window-size';
import {fonts} from '../../../system/helpers/fonts';
import {style} from '../../../system/helpers/styles';
import {PolicyAccept} from './components/policy-accept/policy-accept';
import {CloseCrossIcon} from '../../../components/icons/close-cross-icon';
import {useDispatch} from 'react-redux';
import {AsyncActionsLogin} from '../store/async-actions-login';
import {StackScreenProps} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../navigation/types/types';
import {Config} from '../../../config';
const {Color, UIStyles} = Config;

type TProps = StackScreenProps<TRootStackParamList, Routes.AuthPhone>;

export const AuthPhone: React.FC<TProps> = ({navigation}) => {
  const phoneInput = useInput('');
  const [isPolicyAccepted, setIsPolyAccepted] = useState(false);

  const dispatch = useDispatch();

  const onTogglePolicy = useCallback(() => {
    setIsPolyAccepted(state => !state);
  }, []);

  const onPressClose = () => {
    navigation.replace(Routes.TabRootScreen);
  };

  const openPolicy = useCallback(() => {
    console.log('OPEN');
  }, []);

  const onPressNext = async () => {
    if (isPolicyAccepted) {
      const result = await dispatch(
        AsyncActionsLogin.getSms({phone: phoneInput.value}),
      );
      navigation.push(Routes.AuthCode, {
        phoneNumber: phoneInput.value,
        //@ts-ignore
        request_id: result.request_id,
      });
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.content}>
        <TouchableOpacity onPress={onPressClose} style={styles.closeButton}>
          <CloseCrossIcon />
        </TouchableOpacity>
        <Text style={styles.enterPhoneTitle}>Введите номер{'\n'}телефона</Text>
        <View style={styles.phoneInputContainer}>
          <TextInputMask
            type="custom"
            options={{
              mask: '+7 (999) 999-99-99',
            }}
            placeholderTextColor={Color.GREY_400}
            placeholder="+7 (925)123-45-67  "
            style={styles.numberInputStyle}
            {...phoneInput}
            keyboardType="numeric"
          />
        </View>
        <PolicyAccept
          isChecked={isPolicyAccepted}
          onToggle={onTogglePolicy}
          onPressPolicy={openPolicy}
        />
        <ThemedButton
          wrapperStyle={{marginBottom:10}}
          onPress={onPressNext}
          label="ДАЛЕЕ"
          rounded={true}
          disabled={!isPolicyAccepted || !(phoneInput.value.length === 18)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  content: style.view({
    ...UIStyles.paddingH16,
    alignItems: 'center',
    height: '100%',
    backgroundColor: Color.WHITE,
  }),
  phoneInputContainer: style.view({
    width: '100%',
    paddingHorizontal: 30,
  }),
  enterPhoneTitle: style.text({
    textAlign: 'center',
    paddingTop: 64,
    fontSize: 24,
    fontFamily: fonts.robotoBold,
  }),
  numberInputStyle: style.text({
    fontFamily: fonts.robotoBold,
    fontSize: 20,
    color: Color.DARK,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: Color.GREY_100,
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 40,
  }),
  continueButton: style.view({
    position: 'absolute',
    width: windowWidth * 0.914,
  }),
  closeButton: style.view({
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 17,
    marginLeft: 5,
  }),
};
