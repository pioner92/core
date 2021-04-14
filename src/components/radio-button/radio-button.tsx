import {Config} from '../../config';
import React from 'react';
//@ts-ignore
import RadioButtonRN from 'radio-buttons-react-native';
import {ColorValue, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Color} from 'react-native-svg';

export interface IRadioButtonData {
  id: number;
  label: string;
}

export interface IRadioButton {
  initialIndex?: number;
  data: IRadioButtonData[];
  style?: ViewStyle;
  inactiveColor?: ColorValue;
  activeColor?: Color;
  onSelect: (item: IRadioButtonData) => void;
  textStyle?: TextStyle;
}

export const RadioButton: React.FC<IRadioButton> = ({
  data,
  style,
  onSelect,
  inactiveColor,
  activeColor,
  textStyle,
  initialIndex = 1,
}) => {
  return (
    <RadioButtonRN
      initial={initialIndex}
      box={false}
      style={[styles.container, style]}
      data={data}
      circleSize={12}
      boxStyle={styles.boxStyle}
      deactiveColor={inactiveColor || Config.Color.BLACK}
      selectedBtn={onSelect}
      activeColor={activeColor}
      textStyle={textStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  boxStyle: {},
});
