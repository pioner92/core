import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Config} from '../../config';
const {Color, UIStyles} = Config;

export interface IInput {
  textStyle?: TextStyle;
  inputStyle?: ViewStyle;
  placeholderColor?: string;
  placeholderText?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
}

export const Input: React.FC<IInput> = ({
  textStyle,
  inputStyle,
  placeholderColor = Color.RGBA_400,
  placeholderText = 'Placeholder',
  onChangeText,
  value,
  keyboardType = 'default',
  multiline = false,
}) => {
  return (
    <View style={[styles.container, inputStyle]}>
      <TextInput
        multiline={multiline}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        style={[styles.inputStyle, textStyle]}
        placeholder={placeholderText}
        placeholderTextColor={placeholderColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Color.GREY_100,
    borderRadius: 8,
    justifyContent: 'center',
    ...UIStyles.paddingH16,
    ...UIStyles.paddingV16,
  },
  inputStyle: {
    ...UIStyles.font15,
    color: Color.BLACK,
  },
});
