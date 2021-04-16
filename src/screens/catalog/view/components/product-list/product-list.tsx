import {Animated, FlatList, View, ViewStyle} from 'react-native';
import {IProductItem} from '../../../types/types';
import React, {RefObject, useImperativeHandle, useRef} from 'react';
import {ProductListItem} from './product-list-item';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../../../../system/hooks/use-typed-selector';
import {ActionCart} from '../../../../cart/store/action-cart';
import {AsyncActionCart} from '../../../../cart/store/async-action-cart';

interface IProductList {
  products: IProductItem[];
  componentWrapperStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  reference?: Animated.Value;
}

export const ProductList: React.FC<IProductList> = ({
  products,
  componentWrapperStyle,
  contentContainerStyle,
  reference,
}) => {
  const dispatch = useDispatch();
  const selectedItems = useTypedSelector(state => state.cart.selectedProducts);

  const orderType = useTypedSelector(
    state => state.delivery.selectedOrderTypeId,
  );
  const organisationId = useTypedSelector(
    state => state.delivery.selectedOrganisationId,
  );

  const onChangeCount = (item: IProductItem, newCount: number) => {
    dispatch(
      AsyncActionCart.addOrderToCart({
        id: +item.id,
        count: newCount,
        order_type: +orderType,
        id_org: +organisationId,
        additives: [],
        size: [],
        type: [],
        ingredients: [],
      }),
    );
    dispatch(
      ActionCart.selectProduct({
        ...selectedItems,
        [item.id]: {product: item, count: newCount},
      }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <Animated.FlatList
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: reference || new Animated.Value(0)},
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
        ItemSeparatorComponent={Separator}
        data={products}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={componentWrapperStyle}>
            <ProductListItem
              count={selectedItems[item.id]?.count ?? 0}
              onChangeCount={value => onChangeCount(item, value)}
              energyData={item.energy}
              rating={item.allRating}
              image={item.img_big}
              title={item.title}
              description={item.desc}
              price={item.price}
              weight={item.pieces_per_package}
            />
          </View>
        )}
      />
    </View>
  );
};

const Separator = () => {
  return <View style={{height: 19}} />;
};
