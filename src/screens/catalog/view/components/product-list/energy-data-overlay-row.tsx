import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Config} from '../../../../../config';
const {Color, UIStyles} = Config;

interface IEnergyDataOverlayRow {
  title: string;
  value: number;
  unit: string;
}

export const EnergyDataOverlayRow: React.FC<IEnergyDataOverlayRow> = ({
  title,
  value,
  unit,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>
        {value || 0}
        {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIStyles.flexRow,
    paddingTop: 8,
    alignItems: 'center',
  },
  title: {
    ...UIStyles.font15,
    color: Color.WHITE,
    opacity: 0.6,
  },
  value: {
    ...UIStyles.font15b,
    fontWeight: 'bold',
    color: Color.WHITE,
  },
});
