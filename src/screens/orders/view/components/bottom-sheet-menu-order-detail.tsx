import {BottomSheetModalComponent} from '../../../../components/bottom-sheet-menu/bottom-sheet-modal/bottom-sheet-modal-component';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {AsyncActionOrders} from '../../store/async-action-orders';
import {IGetOrderDataResponse} from '../../api/types';
import {BASE_URL, Config} from '../../../../config';
import {TitleWithValueRow} from '../../../../components/title-with-value-row';
import {Divider} from '../../../../components/divider';
import FastImage from 'react-native-fast-image';
import {useIsFocused} from '@react-navigation/native';
import {useBottomSheetMenu} from '../../../../components/bottom-sheet-menu/bottom-sheet-menu-context';

const {Color, UIStyles} = Config;

interface IBottomSheetMenuOrderDetail {
  orderId: number;
  onPressAddComment: ()=>void;
}

export const BottomSheetMenuOrderDetail: React.FC<IBottomSheetMenuOrderDetail> = ({
  orderId,
                                                                                    onPressAddComment
}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [orderData, setOrderData] = useState<IGetOrderDataResponse>(
    {} as IGetOrderDataResponse,
  );

  const getOrderData = async () => {
    const res = await dispatch(
      AsyncActionOrders.getOrderData({order_id: orderId}),
    );
    //@ts-ignore
    setOrderData(res);
  };

  useEffect(() => {
    if (orderId !== -1) {
      getOrderData();
    }
  }, [orderId]);

  if (!isFocused) {
    return null;
  }

  return (
    <BottomSheetModalComponent snapPointsProps={['90%']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 50}}>
        <Text style={styles.title}>
          Благодарим вас за заказ № {orderData.order_id}
        </Text>
        <View style={styles.statusWrapper}>
          <Text style={styles.statusTitle}>{orderData.status_name}</Text>
        </View>
        <Text onPress={onPressAddComment}>Оставить отзыв</Text>
        <TitleWithValueRow
          title={'Продукты в заказе'}
          value={orderData?.products?.length?.toString()}
        />
        <Divider />
        <View style={{paddingVertical: 16}}>
          {orderData?.products?.map(el => {
            return (
              <View
                key={el.product_id}
                style={{flexDirection: 'row', marginTop: 12, width: '100%'}}>
                <FastImage
                  style={{width: 74, height: 74, borderRadius: 4}}
                  source={{uri: BASE_URL + el.img_url}}
                />
                <View style={{flex: 1}}>
                  <Text>{el.title}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>{el.price} г</Text>
                    <Text style={[UIStyles.font15, {fontWeight: 'bold'}]}>
                      {el.price} ₽
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <Divider />
        <TitleWithValueRow title={'Дата заказа'} value={orderData.createdon} />
        <TitleWithValueRow title={'Ресторан'} value={orderData.street} />
        <TitleWithValueRow
          title={'Адрес доставки'}
          value={`${orderData.city}, ${orderData.street}, ${orderData.house_num}, ${orderData.flat_num}`}
        />
        <TitleWithValueRow
          title={'Сумма заказа'}
          value={orderData?.cost?.toString()}
        />
        <TitleWithValueRow
          title={'Оплачено бонусами'}
          value={orderData.bonus_accrual}
        />
        <TitleWithValueRow
          title={'К оплате'}
          value={orderData?.cost?.toString()}
        />
        <TitleWithValueRow
          title={'Способ оплаты'}
          value={orderData.payment_name}
        />
      </ScrollView>
    </BottomSheetModalComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    ...UIStyles.paddingH16,
  },
  title: {
    ...UIStyles.font24b,
    textAlign: 'center',
    paddingHorizontal: 70,
  },
  statusTitle: {
    ...UIStyles.font15,
    color: Color.WHITE,
  },
  statusWrapper: {
    backgroundColor: Color.SUCCESS,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
});
