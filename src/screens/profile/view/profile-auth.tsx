import {StyleSheet, Text, View} from 'react-native';
import React, {Fragment, useEffect} from 'react';
import {CartIcon} from '../../../components/icons/cart-icon';
import {UIStyles} from '../../../assets/styles';
import {ProfileIcon} from '../../../components/icons/profile-icon';
import {RubleWithCircleArrowIcon} from '../../../components/icons/ruble-with-circle-arrow-icon';
import {ExitSvg} from '../../../components/icons/exit-icon';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {ListItemIcons} from '../../../components/list-item-icons/list-item-icons';
import {ArrowRightWithoutLineIcon} from '../../../components/icons/arrow-right-without-line-icon';
import FastImage from 'react-native-fast-image';
import {ImageRepository} from '../../../assets/image-repository';
import {FocusAwareStatusBar} from '../../../system/helpers/focus-aware-status-bar';
import {Config} from '../../../config';
import {MapMarkerIcon} from '../../../components/icons/map-marker-icon';
import {AsyncActionProfile} from '../store/async-action-profile';
import {StackScreenProps} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../navigation/types/types';
import {ActionsLogin} from '../../login/store/actions-login';

const createScreenRowItem = (
  title: string,
  Icon: React.FC,
  route: keyof typeof Routes,
) => {
  return {
    title,
    Icon,
    route,
  };
};

const ScreenItems = [
  createScreenRowItem(
    'Бонусы',
    RubleWithCircleArrowIcon,
    Routes.ProfileSettings,
  ),
  createScreenRowItem('Мои заказы', CartIcon, Routes.ProfileSettings),
  createScreenRowItem('Настройки профиля', ProfileIcon, Routes.ProfileSettings),
  createScreenRowItem('Изменить город', MapMarkerIcon, Routes.ProfileSettings),
  createScreenRowItem('Выйти', ExitSvg, Routes.AuthPhone),
];

type TProps = StackScreenProps<TRootStackParamList, Routes.ProfileAuth>;

export const ProfileAuth: React.FC<TProps> = ({navigation}) => {
  const {navigate} = useNavigation();
  const userData = useTypedSelector(state => state.profile.userData);
  const dispatch = useDispatch();

  const onPressHandler = (route: keyof typeof Routes) => {
    if (route === Routes.AuthPhone) {
      navigation.replace(route as Routes.AuthPhone);
      dispatch(ActionsLogin.logoutAccount());
    } else {
      navigate(route);
    }
  };

  useEffect(() => {
    dispatch(AsyncActionProfile.getUserData());
  }, []);

  return (
    <View>
      <FocusAwareStatusBar barStyle={'light-content'} />
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleWrapper}>
          <Text style={styles.headerTitle}>Добрый день</Text>
          <Text style={styles.headerTitle}>{userData?.data?.name}</Text>
        </View>
        <FastImage
          source={ImageRepository.ProfileHeader}
          style={styles.image}
        />
      </View>
      <View style={styles.contentWrapper}>
        {ScreenItems.map((el, index) => {
          return (
            <Fragment key={index}>
              <ListItemIcons
                containerStyle={{marginTop: index === 4 ? 24 : 0}}
                onPress={() => onPressHandler(el.route)}
                leftComponent={el.Icon}
                rightComponent={ArrowRightWithoutLineIcon}
                title={el.title}
              />
            </Fragment>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleWrapper: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 1,
  },
  headerTitle: {
    ...Config.UIStyles.font24b,
    color: Config.Color.WHITE,
  },
  image: {
    width: '100%',
    height: 220,
  },
  contentWrapper: {
    marginTop: 16,
    ...UIStyles.paddingH16,
  },
});
