import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';

import {Config} from '../../../../config';
const {Color, UIStyles} = Config;

interface IPaymentValueRow {
  title: string;
  titleStyle?: TextStyle;
  value: string;
  valueStyle?: TextStyle;
}

export const PaymentValueRow: React.FC<IPaymentValueRow> = ({
  title,
  titleStyle,
  valueStyle,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIStyles.flexRow,
    paddingVertical: 15.5,
  },
  title: {
    ...UIStyles.font15,
    color: Color.GREY_600,
  },
  value: {
    ...UIStyles.font15,
  },
});
