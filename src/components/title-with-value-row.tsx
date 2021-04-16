import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {Config} from '../config';
const {Color, UIStyles} = Config;

interface ITitleWithValueRow {
  title: string;
  value: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  valueStyle?: TextStyle;
}

export const TitleWithValueRow: React.FC<ITitleWithValueRow> = ({
  title,
  value,
  containerStyle,
  titleStyle,
  valueStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIStyles.flexRow,
    paddingVertical: 15.5,
  },
  title: {
    ...UIStyles.font15,
    color: Color.GREY_600,
  },
  value: {
    ...UIStyles.font15,
    color: Color.BLACK,
  },
});
