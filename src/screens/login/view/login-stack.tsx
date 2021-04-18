import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from '../../../navigation/routes';
import {LoginPhone} from './login-phone';
import {LoginCode} from './login-code';
import {Config} from '../../../config';
const {Color} = Config;

const LoginStackScreen = createStackNavigator();

export const LoginStack = () => {
  return (
    <LoginStackScreen.Navigator
      screenOptions={{cardStyle: {backgroundColor: Color.WHITE}}}
      headerMode={'none'}
      initialRouteName={Routes.LoginPhone}>
      <LoginStackScreen.Screen
        name={Routes.LoginPhone}
        component={LoginPhone}
      />
      <LoginStackScreen.Screen name={Routes.LoginCode} component={LoginCode} />
    </LoginStackScreen.Navigator>
  );
};
