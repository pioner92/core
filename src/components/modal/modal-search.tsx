import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {CloseCrossIcon} from '../icons/close-cross-icon';
import {Config} from '../../config';
import {useInput} from '../../system/hooks/use-input';
import ModalView from 'react-native-modal';
import {windowHeight, windowWidth} from '../../system/helpers/window-size';
import {useTypedSelector} from '../../system/hooks/use-typed-selector';
import {ProductList} from '../../screens/catalog/view/components/product-list/product-list';

const {Color, UIStyles} = Config;

interface IModalSearch {
  isVisible: boolean;
  hide: () => void;
}

export const ModalSearch: React.FC<IModalSearch> = React.memo(
  ({hide, isVisible}) => {
    const input = useInput('');
    const products = useTypedSelector(state => state.catalog.products);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const onSearch = (text: string) => {
      input.onChangeText(text);
      const items = products?.filter(el =>
        el.title.toLowerCase().includes(text.toLowerCase().trim()),
      );
      setFilteredProducts(items);
    };

    const onPressClear = () => {
      input.onChangeText('');
      setFilteredProducts(products);
    };

    useEffect(() => {
      if (products) {
        setFilteredProducts(products);
      }
    }, [products]);

    return (
      <ModalView
        style={styles.modalContainerStyle}
        deviceHeight={windowHeight}
        deviceWidth={windowWidth}
        hasBackdrop={true}
        backdropColor={Config.Color.BLACK}
        backdropOpacity={0.6}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        onBackdropPress={hide}
        isVisible={isVisible}>
        <View style={styles.modalView}>
          <TextInput
            placeholderTextColor={Color.GREY_400}
            placeholder={'Поиск'}
            value={input.value}
            onChangeText={onSearch}
            style={styles.input}
          />
          <TouchableOpacity onPress={onPressClear} style={styles.clearButton}>
            <CloseCrossIcon />
          </TouchableOpacity>
        </View>
        <ProductList
          componentWrapperStyle={{
            backgroundColor: Color.WHITE,
            borderRadius: 12,
          }}
          products={filteredProducts}
        />
      </ModalView>
    );
  },
);

const styles = StyleSheet.create({
  modalContainerStyle: {
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 0,
  },
  modalView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Config.Color.WHITE,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  modal: {
    flexDirection: 'row',
    // borderRadius: 8,
    justifyContent: 'space-between',
    // paddingVertical: 8,
  },
  input: {
    flex: 10,
    ...UIStyles.font15,
    color: Color.DARK,
  },
  clearButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
