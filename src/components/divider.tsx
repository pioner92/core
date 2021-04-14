import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Color} from '../assets/styles';

interface IDivider {
  style?: ViewStyle;
}

export const Divider: React.FC<IDivider> = ({style}) => {
  return <View style={[styles.container, style]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
    backgroundColor: Color.GREY_50,
  },
});
