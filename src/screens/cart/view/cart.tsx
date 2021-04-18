import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScreeHeaderTitleLeft} from '../../../components/screen-header/scree-header-title-left';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {AsyncActionCart} from '../store/async-action-cart';
import {FocusAwareStatusBar} from '../../../system/helpers/focus-aware-status-bar';
import {TitleWithValueRow} from '../../../components/title-with-value-row';
import {BASE_URL, Config} from '../../../config';
import {ThemedButton} from '../../../components/buttons/themed-button';
import {Input} from '../../../components/input/input';
import {PromoInput} from './components/promo-input';
import {EmptyCart} from './components/empty-cart';
import {CartProductListItem} from './components/cart-product-list-item';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';

const {Color, UIStyles} = Config;

const rows = [
  {title: 'Итого', paramName: 'total_cost'},
  {title: 'Доставка', paramName: 'delivery_cost'},
  {title: 'Итого к оплате', paramName: 'total_cost'},
];

export const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useTypedSelector(state => state.cart.cartData);

  const {navigate} = useNavigation();

  const onPressNext = () => {
    navigate(Routes.AcceptAddress);
  };

  useEffect(() => {
    dispatch(AsyncActionCart.getCartData({id_org: 3691, order_type: 1}));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <FocusAwareStatusBar
          barStyle={'dark-content'}
          backgroundColor={'#fff'}
        />
        <ScreeHeaderTitleLeft title={'Ваш заказ'} />
        <View style={styles.contentContainer}>
          {cartData.products && cartData?.products?.length !== 0 ? (
            <>
              <Text style={styles.titleTotal}>
                {cartData?.total_count} товаров на {cartData?.total_cost} ₽
              </Text>
              <Text style={styles.minCountDeliveryText}>
                Минимальная сумма на доставку {cartData.min_count_cost ?? 0} ₽
              </Text>
              {cartData.products.map(el => {
                return (
                  <CartProductListItem
                    count={el.count}
                    key={el.id}
                    title={el.title}
                    price={el.price}
                    image={BASE_URL + el.img_url}
                  />
                );
              })}
              <PromoInput onPress={value => console.log(value)} />
              {rows.map((el, index) => {
                return (
                  <TitleWithValueRow
                    key={index}
                    title={el?.title}
                    //@ts-ignore
                    value={`${cartData[el?.paramName] ?? 0} ₽`}
                  />
                );
              })}
              <Input
                value={''}
                placeholderText={'Комментарий к заказу'}
                onChangeText={() => {}}
              />
              <ThemedButton
                rounded={true}
                wrapperStyle={{marginTop: 'auto', marginBottom: 8}}
                label={'Оформить'}
                onPress={onPressNext}
              />
            </>
          ) : (
            <EmptyCart />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    ...UIStyles.paddingH16,
  },
  titleTotal: {
    ...UIStyles.font18b,
    color: Color.BLACK,
  },
  minCountDeliveryText: {
    marginTop: 6,
    ...UIStyles.font15,
    color: Color.GREY_600,
  },
});
