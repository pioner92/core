import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Config} from '../../../../config';
import {Counter} from '../../../../components/counter/counter';
const {Color, UIStyles} = Config;

export interface ICartProductListItem {
  image: string;
  title: string;
  price: number;
}

export const CartProductListItem: React.FC<ICartProductListItem> = ({
  image,
  title,
  price,
}) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: image}}
        resizeMode={'contain'}
        style={{width: 120, height: 120}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={UIStyles.flexRow}>
          <Text>{price} ₽</Text>
          <Counter
            containerStyle={styles.counterContainerStyle}
            buttonStyle={styles.counterButtonStyle}
            buttonIconStyle={{fill: Color.PRIMARY}}
            valueStyle={{color: Color.BLACK}}
            value={2}
            onChange={() => {}}
          />
        </View>
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    marginTop: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    ...UIStyles.font15b,
    color: Color.DARK,
  },
  counterContainerStyle: {
    width: 106,
    height: 32,
    paddingVertical: 0,
    paddingHorizontal: 9,
    borderRadius: 8,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Color.PRIMARY_40,
  },
  counterButtonStyle: {
    backgroundColor: 'transparent',
    padding: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
