import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {OrdersList} from './components/orders-list';
import {useDispatch} from 'react-redux';
import {AsyncActionOrders} from '../store/async-action-orders';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {BottomSheetMenuOrderDetail} from './components/bottom-sheet-menu-order-detail';
import {useBottomSheetMenu} from '../../../components/bottom-sheet-menu/bottom-sheet-modal-provider';
import {AddCommentBottomSheetContent} from '../../../components/add-comment-bottom-sheet-content/add-comment-bottom-sheet-content';

export const Orders = () => {
  const dispatch = useDispatch();
  const orders = useTypedSelector(state => state.ordersHistory.orders);

  const {show, expand, collapse} = useBottomSheetMenu();

  const onPress = (orderId: number) => {
    if (orderId) {
      show({
        Component: () => (
          <BottomSheetMenuOrderDetail
            orderId={orderId}
            onPressAddComment={onPressAddComment}
          />
        ),
        snapPoints: ['90%'],
      });
    }
  };

  const onPressAddComment = () => {
    show({
      Component: () => <AddCommentBottomSheetContent />,
      snapPoints: ['35%', '65%'],
    });
  };

  useEffect(() => {
    dispatch(AsyncActionOrders.getOrders());
  }, []);

  return (
    <SafeAreaView>
      <OrdersList onPress={onPress} orders={orders} />
    </SafeAreaView>
  );
};
