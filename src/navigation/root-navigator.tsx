import {createStackNavigator} from '@react-navigation/stack';
import {AuthPhone} from '../screens/login/view/auth-phone';
import {Routes} from './routes';
import React, {useEffect} from 'react';
import {AuthCode} from '../screens/login/view/auth-code';
import {OrganisationListWithMap} from '../screens/delivery/view/organisation-list-with-map';
import {Config} from '../config';
import {TabNavigation} from './tab-navigation';
import {useTypedSelector} from '../system/hooks/use-typed-selector';
import {AddressList} from '../screens/delivery/view/address-list';
import {SelectCity} from '../screens/delivery/view/select-city';
import {ProfileSettings} from '../screens/profile/view/profile-settings';
import {DeliveryAndPayment} from '../screens/delivery/view/delivery-and-payment';
import {Policy} from '../screens/login/view/policy';
import {AddressCreate} from '../screens/delivery/view/address-create';
import {Payment} from '../screens/payment/view/payment';
import {PaymentFinish} from '../screens/payment/view/payment-finish';
import {ApiService} from '../system/api/api-service';
import {AcceptAddress} from '../screens/cart/view/accept-address';

const {Color} = Config;

const Stack = createStackNavigator();

export const RootNavigator: React.FC = ({children}) => {
  const token = useTypedSelector(state => state.login.token);

  useEffect(() => {
    if (token) {
      console.log('TOKEN SET');
      console.log(token);
      ApiService.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, [token]);

  return (
    <Stack.Navigator
      screenOptions={{cardStyle: {backgroundColor: Color.WHITE}}}
      initialRouteName={token ? Routes.TabRootScreen : Routes.AuthPhone}
      headerMode={'none'}>
      <Stack.Screen name={Routes.AuthPhone} component={AuthPhone} />
      <Stack.Screen name={Routes.AuthCode} component={AuthCode} />
      <Stack.Screen name={Routes.Payment} component={Payment} />
      <Stack.Screen name={Routes.PaymentFinish} component={PaymentFinish} />
      <Stack.Screen name={Routes.TabRootScreen} component={TabNavigation} />
      <Stack.Screen name={Routes.AddressCreate} component={AddressCreate} />

      <Stack.Screen
        name={Routes.DeliveryAndPayment}
        component={DeliveryAndPayment}
      />
      <Stack.Screen
        name={Routes.AcceptAddress}
        component={AcceptAddress}
      />
      <Stack.Screen name={Routes.Policy} component={Policy} />
      <Stack.Screen name={Routes.ProfileSettings} component={ProfileSettings} />
      <Stack.Screen name={Routes.AddressList} component={AddressList} />
      <Stack.Screen name={Routes.SelectCity} component={SelectCity} />
      <Stack.Screen
        name={Routes.SelectOrganisationInMap}
        component={OrganisationListWithMap}
      />
      {children}
    </Stack.Navigator>
  );
};
