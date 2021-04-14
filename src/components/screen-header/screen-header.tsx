import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {UIStyles} from '../../assets/styles';

export interface IScreenHeader {
  style?: ViewStyle;
}

export const ScreenHeader: React.FC<IScreenHeader> = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    ...UIStyles.paddingH16,
    height: 48,
    justifyContent: 'center',
  },
});
