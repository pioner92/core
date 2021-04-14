import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Config} from '../../../../config';

const {Color, UIStyles} = Config;

interface IPaymentRowWithInput {
  value: string;
  onChangeText: (text: string) => void;
}

export const PaymentRowWithInput: React.FC<IPaymentRowWithInput> = React.memo(
  ({value, onChangeText}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Сдеча с купюры</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder={'5000'}
            placeholderTextColor={Color.GREY_100}
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
          />
          <Text style={styles.unit}>₽</Text>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...UIStyles.font15,
    color: Color.GREY_600,
  },
  input: {
    flex: 10,
    ...UIStyles.font15,
    color: Color.DARK,
  },
  inputWrapper: {
    borderColor: Color.GREY_100,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: 120,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  unit: {
    flex: 3,
    textAlign: 'right',
    ...UIStyles.font15b,
    color: Color.GREY_400,
  },
});
