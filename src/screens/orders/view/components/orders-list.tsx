import React from 'react';
import {FlatList, View} from 'react-native';
import {OrdersListItem} from './orders-list-item';
import {ScreenHeaderTitleWithBackButton} from '../../../../components/screen-header/screen-header-title-with-back-button';
import {IOrderItem} from '../../api/types';

interface IOrdersHistoryList {
  orders: IOrderItem[];
  onPress: (orderId: number) => void;
}

export const OrdersList: React.FC<IOrdersHistoryList> = ({orders, onPress}) => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <ScreenHeaderTitleWithBackButton
            style={{marginBottom: 12}}
            title={'Мои заказы'}
          />
        }
        keyExtractor={item => item.order_id.toString()}
        data={orders}
        renderItem={({item}) => (
          <OrdersListItem
            onPress={() => onPress(item.order_id)}
            rating={item?.rating}
            address={item.street}
            statusColorLabel={item.status_title_color}
            statusColorWrapper={item.status_wrapper_color}
            containerColor={item.container_color}
            title={`Ваш заказ ${item.order_id}`}
            price={item.cost}
            status={item.status_name}
            date={item.createdon}
          />
        )}
      />
    </View>
  );
};
