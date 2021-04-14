import React from 'react';
import {IInput, Input} from './input';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Config} from '../../config';
const {Color, UIStyles} = Config;

interface IInputWithLabel extends IInput {
  label: string;
  labelStyle?: TextStyle;
  wrapperStyle?: ViewStyle;
}

export const InputWithLabel: React.FC<IInputWithLabel> = ({
  label = 'Label',
  labelStyle,
  wrapperStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container, wrapperStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <Input {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelWrapper: {
    position: 'absolute',
    top: -8,
    left: 8,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  label: {
    ...UIStyles.font13,
    zIndex: 1,
    color: Color.RGBA_400,
    backgroundColor: Color.WHITE,
    position: 'absolute',
    top: -8,
    left: 8,
  },
});
