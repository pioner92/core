import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {OrdersList} from './components/orders-list';
import {useDispatch} from 'react-redux';
import {AsyncActionOrders} from '../store/async-action-orders';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {BottomSheetMenuOrderDetail} from './components/bottom-sheet-menu-order-detail';
import {useBottomSheetMenu} from '../../../components/bottom-sheet-menu/bottom-sheet-menu-context';
import {useIsFocused} from '@react-navigation/native';

export const Orders = () => {
  const dispatch = useDispatch();
  const orders = useTypedSelector(state => state.ordersHistory.orders);
  const [selectedOrder, setSelectedOrder] = useState(-1);

  const modal = useBottomSheetMenu();
  const isFocused = useIsFocused();

  const onPress = (orderId: number) => {
    setSelectedOrder(orderId);
    if (orderId) {
      modal.show();
    }
  };

  useEffect(() => {
    if (!isFocused) {
      setSelectedOrder(-1);
    }
  }, [isFocused]);

  useEffect(() => {
    dispatch(AsyncActionOrders.getOrders());
  }, []);

  return (
    <SafeAreaView>
      <OrdersList onPress={onPress} orders={orders} />
        <BottomSheetMenuOrderDetail onPressAddComment={modal.show} orderId={selectedOrder} />
    </SafeAreaView>
  );
};
