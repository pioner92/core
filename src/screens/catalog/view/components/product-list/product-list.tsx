import {FlatList, View, ViewStyle} from 'react-native';
import {IProductItem} from '../../../types/types';
import React from 'react';
import {ProductListItem} from './product-list-item';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../../../../system/hooks/use-typed-selector';
import {ActionCart} from '../../../../cart/store/action-cart';

interface IProductList {
  products: IProductItem[];
  componentWrapperStyle?: ViewStyle;
}

export const ProductList: React.FC<IProductList> = ({
  products,
  componentWrapperStyle,
}) => {
  const dispatch = useDispatch();
  const selectedItems = useTypedSelector(state => state.cart.selectedProducts);

  const onChangeCount = (item: IProductItem, newCount: number) => {
    dispatch(
      ActionCart.selectProduct({
        ...selectedItems,
        [item.id]: {product: item, count: newCount},
      }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        ItemSeparatorComponent={Separator}
        data={products}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 8}}
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
