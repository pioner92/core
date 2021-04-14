import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ImageRepository} from '../../../../assets/image-repository';
import {Config} from '../../../../config';
const {Color, UIStyles} = Config;

interface IPaymentFinishOrderListItem {
  title: string;
  ingredients: string;
  count: number;
  price: number;
  image: string;
}

export const PaymentFinishOrderListItem: React.FC<IPaymentFinishOrderListItem> = React.memo(
  ({title, ingredients, price, count, image}) => {
    return (
      <View style={styles.container}>
        <FastImage
          source={{uri: image}}
          style={{width: 74, height: 74}}
          resizeMode={'contain'}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.ingredients}>{ingredients}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.countValue}>{count} шт.</Text>
            <Text style={styles.priceValue}>{price} ₽.</Text>
          </View>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3.5,
  },
  title: {
    ...UIStyles.font16b,
  },
  ingredients: {
    marginTop: 8,
  },
  titleContainer: {
    marginLeft: 16,
  },
  priceWrapper: {
    marginTop: 8,
    flexDirection: 'row',
  },
  countValue: {
    ...UIStyles.font15,
    color: Color.SUCCESS,
  },
  priceValue: {
    ...UIStyles.font15,
    color: Color.BLACK,
  },
});
