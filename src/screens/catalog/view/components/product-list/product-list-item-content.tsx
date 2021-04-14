import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Config} from '../../../../../config';
import {ThemedButton} from '../../../../../components/buttons/themed-button';
import {Counter} from '../../../../../components/counter/counter';

const {Color, UIStyles} = Config;

export interface IProductListItemContent {
  title: string;
  description: string;
  price: number;
  weight: number;
  onChangeCount: (value: number) => void;
  count: number;
}

export const ProductListItemContent: React.FC<IProductListItemContent> = ({
  title,
  description,
  price,
  weight,
  onChangeCount,
  count,
}) => {
  // const [count, setCount] = useState(0);

  const onChange = (value: number) => {
    onChangeCount(value);
  };

  const onPressAdd = () => {
    onChangeCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.priceAndWeightRow}>
        <Text style={styles.priceValue}>{price} ₽</Text>
        <Text style={styles.weightValue}>{weight} г</Text>
      </View>
      {count >= 1 ? (
        <Counter
          containerStyle={{marginTop: 18}}
          onChange={onChange}
          value={count}
        />
      ) : (
        <ThemedButton
          rounded={true}
          wrapperStyle={{marginTop: 18}}
          style={{height: 50}}
          modifier={'bordered'}
          label={'Добавить'}
          onPress={onPressAdd}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    marginTop: 27,
  },
  title: {
    ...UIStyles.font20b,
  },
  description: {
    marginTop: 18,
    ...UIStyles.font15,
    color: Color.GREY_500,
  },
  priceAndWeightRow: {
    marginTop: 18,
    ...UIStyles.flexRow,
  },
  priceValue: {
    ...UIStyles.font24b,
    color: Color.DARK,
  },
  weightValue: {
    ...UIStyles.font15,
    color: Color.GREY_600,
  },
});
