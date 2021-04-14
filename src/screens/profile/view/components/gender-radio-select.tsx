import React from 'react';
import {RadioButtonWithTitle} from '../../../../components/radio-button/radio-button-with-title';
import {IRadioButtonData} from '../../../../components/radio-button/radio-button';
import {StyleSheet} from 'react-native';

const data = [
  {
    id: 0,
    label: 'Мужской',
  },
  {
    id: 1,
    label: 'Женский',
  },
];

interface IGenderRadioSelect {
  onSelect: (item: IRadioButtonData) => void;
}

export const GenderRadioSelect: React.FC<IGenderRadioSelect> = ({onSelect}) => {
  return (
    <RadioButtonWithTitle
      containerStyle={styles.container}
      onSelect={onSelect}
      title={'Ваш пол'}
      data={data}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
});
