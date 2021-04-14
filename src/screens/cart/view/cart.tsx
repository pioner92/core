import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ScreeHeaderTitleLeft} from '../../../components/screen-header/scree-header-title-left';
import {EmptyCart} from './components/empty-cart';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {AsyncActionCart} from '../store/async-action-cart';
import {FocusAwareStatusBar} from '../../../system/helpers/focus-aware-status-bar';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useTypedSelector(state => state.cart.cartData);

  useEffect(() => {
    dispatch(AsyncActionCart.getCartData({id_org: 3691, order_type: 1}));
  }, []);


  useEffect(() => {
    console.log(cartData);
  }, [cartData]);

  return (
    <SafeAreaView>
      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <ScreeHeaderTitleLeft title={'Ваш заказ'} />
      {cartData?.products?.length === 0 ? <EmptyCart /> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
