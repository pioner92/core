import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {ProfileAuth} from './profile-auth';
import {ProfileNotAuth} from './profile-not-auth';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from '../../../navigation/routes';
import {Config} from '../../../config';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  const token = useTypedSelector(state => state.login.token);

  return (
    <Stack.Navigator
      screenOptions={{cardStyle: {backgroundColor: Config.Color.WHITE}}}
      headerMode={'none'}>
      {token ? (
        <Stack.Screen name={Routes.ProfileAuth} component={ProfileAuth} />
      ) : (
        <Stack.Screen name={Routes.ProfileNotAuth} component={ProfileNotAuth} />
      )}
    </Stack.Navigator>
  );
};
