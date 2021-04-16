import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {ProfileAuth} from './profile-auth';
import {ProfileNotAuth} from './profile-not-auth';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {Routes} from '../../../navigation/routes';
import {Config} from '../../../config';
import {Orders} from '../../orders/view/orders';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  RouteProp,
  TabNavigationState,
  useNavigation,
} from '@react-navigation/native';
import {TRootStackParamList} from '../../../navigation/types/types';

const Stack = createStackNavigator();

type HomeScreenNavigationProp = BottomTabNavigationProp<
  TRootStackParamList,
  Routes.Profile
>;

type HomeScreenRouteProp = RouteProp<TRootStackParamList, Routes.Profile>;
type HomeProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export const ProfileStack: React.FC = () => {
  const token = useTypedSelector(state => state.login.token);

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', e => {
  //     navigation.navigate(Routes.ProfileAuth);
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{cardStyle: {backgroundColor: Config.Color.WHITE}}}
      headerMode={'none'}>
      {token ? (
        <>
          <Stack.Screen name={Routes.ProfileAuth} component={ProfileAuth} />
          <Stack.Screen name={Routes.Orders} component={Orders} />
        </>
      ) : (
        <Stack.Screen name={Routes.ProfileNotAuth} component={ProfileNotAuth} />
      )}
    </Stack.Navigator>
  );
};
