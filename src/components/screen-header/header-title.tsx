import {StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';
import {Color, UIStyles} from '../../assets/styles';

export interface IHeaderTitle {
  titleStyle?: TextStyle;
}

export const HeaderTitle: React.FC<IHeaderTitle> = ({titleStyle, children}) => {
  return <Text style={[styles.title, titleStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    ...UIStyles.font20b,
    color: Color.BLACK,
  },
});
