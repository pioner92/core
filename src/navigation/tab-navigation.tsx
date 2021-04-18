import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './routes';
import {More} from '../screens/more/view/more';
import {Config} from '../config';
import {Cart} from '../screens/cart/view/cart';
import {ProfileStack} from '../screens/profile/view/profile-stack';
import {useTypedSelector} from '../system/hooks/use-typed-selector';
import {Catalog} from '../screens/catalog/view/catalog';

const Tab = createBottomTabNavigator();
const {Color, UIStyles} = Config;

const createTabScreen = (route: keyof typeof Routes, component: React.FC) => {
  return {
    route,
    component,
  };
};

const tabScreens = [
  createTabScreen(Routes.Catalog, Catalog),
  createTabScreen(Routes.Cart, Cart),
  createTabScreen(Routes.Profile, ProfileStack),
  createTabScreen(Routes.More, More),
];

export const TabNavigation: React.FC = () => {
  const selectedProduct = useTypedSelector(
    state => state.cart.selectedProducts,
  );

  const entries = Object.entries(selectedProduct);
  const total = entries.reduce(
    (acc, [key, values]) => acc + values.product.price * values.count,
    0,
  );

  const badgeStyle = {
    ...UIStyles.font9b,
    backgroundColor: Color.PRIMARY,
    color: Color.WHITE,
    transform: [{translateY: 30},
      // {translateX: -30}
    ],
    width: 60,
  };

  return (
    <Tab.Navigator
      backBehavior={'firstRoute'}
      tabBarOptions={{
        activeTintColor: Color.DARK,
        inactiveTintColor: Color.GREY_400,
        labelStyle: {
          ...UIStyles.font13,
          fontWeight: '500',
        },
      }}
      sceneContainerStyle={{backgroundColor: Color.WHITE}}>
      {tabScreens.map((el, index) => {
        return (
          <Tab.Screen
            listeners={({navigation}) => ({
              tabPress: e => {
                navigation.navigate(el.route);
              },
            })}
            key={index}
            options={{
              tabBarBadgeStyle: index === 1 && total ? badgeStyle : null,
              //@ts-ignore
              tabBarBadge: index === 1 && total ? `${total} ₽ >` : null,
              tabBarIcon: ({focused}) =>
                Config.tabNavigationLabels[index].Icon.call(null, {
                  fill: focused ? Color.DARK : Color.GREY_400,
                }),
              tabBarLabel:
                !total || index !== 1
                  ? Config.tabNavigationLabels[index].label
                  : '',
            }}
            name={el.route}
            component={el.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};
