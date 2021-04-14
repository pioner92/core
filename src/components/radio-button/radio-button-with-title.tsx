import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {IRadioButton, RadioButton} from './radio-button';
import {Config} from '../../config';
const {Color} = Config;

interface IRadioButtonWithTitle extends IRadioButton {
  title: string;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

export const RadioButtonWithTitle: React.FC<IRadioButtonWithTitle> = ({
  title,
  titleStyle,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <RadioButton {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: Color.GREY_400,
  },
});
