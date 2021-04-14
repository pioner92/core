import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {Config} from '../../config';
const {Color} = Config;

export interface IButtonCircle {
  onPress: () => void;
  style?: ViewStyle;
}

export const ButtonCircle: React.FC<IButtonCircle> = ({
  children,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
