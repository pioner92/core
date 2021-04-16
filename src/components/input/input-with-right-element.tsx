import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {IInput} from './input';
import {Config} from '../../config';
const {Color, UIStyles} = Config;

interface IInputWithRightElement extends IInput {
  RightComponent: React.FC;
}

export const InputWithRightElement: React.FC<IInputWithRightElement> = ({
  RightComponent,
  inputStyle,
  placeholderText,
  ...rest
}) => {
  return (
    <View style={[styles.container, inputStyle]}>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={Color.RGBA_400}
        style={styles.inputStyle}
        {...rest}
      />
      <RightComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.GREY_100,
    borderRadius: 8,
    justifyContent: 'space-between',
    ...UIStyles.paddingH16,
    ...UIStyles.paddingV16,
  },
  inputStyle: {
    flex: 1,
    ...UIStyles.font15,
    color: Color.BLACK,
  },
});
