import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IEnergyItems} from '../../../types/types';
import {EnergyDataOverlayRow} from './energy-data-overlay-row';
import {Config} from '../../../../../config';
const {Color, UIStyles} = Config;

export interface IEnergyDataOverlay {
  energyData: IEnergyItems;
  onPress: () => void;
  rating: string;
}

export const EnergyDataOverlay: React.FC<IEnergyDataOverlay> = ({
  energyData,
  onPress,
  rating,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <EnergyDataOverlayRow
        title={'Жиры'}
        unit={' г'}
        value={energyData.energy_oils}
      />
      <EnergyDataOverlayRow
        title={'Белки'}
        unit={' г'}
        value={energyData.energy_protein}
      />
      <EnergyDataOverlayRow
        title={'Углеводы'}
        unit={' г'}
        value={energyData.energy_carbohydrates}
      />
      <EnergyDataOverlayRow
        title={'Каолрийность'}
        unit={' кКал'}
        value={energyData.energy_carbohydrates}
      />
      <Text style={styles.description}>
        Содржит аллергены. Яйцо, мед, сельдерей
      </Text>
      <View style={styles.ratingRow}>
        <Text style={styles.ratingTitle}>Оценка пользователей</Text>
        <View style={styles.ratingValueWrapper}>
          <Text style={styles.ratingValue}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    ...UIStyles.paddingH16,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Color.RGBA_400,
  },
  description: {
    marginTop: 28,
    ...UIStyles.font15,
    color: Color.WHITE,
    opacity: 0.6,
  },
  ratingRow: {
    marginTop: 18,
    ...UIStyles.flexRow,
    marginBottom: 20,
  },
  ratingValueWrapper: {
    backgroundColor: Color.SUCCESS,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },

  ratingTitle: {
    ...UIStyles.font15,
    color: Color.WHITE,
    fontWeight: '600',
  },
  ratingValue: {
    ...UIStyles.font15,
    color: Color.WHITE,
  },
});
