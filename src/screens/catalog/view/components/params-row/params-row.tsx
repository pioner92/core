import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Config} from '../../../../../config';
import {SettingsIcon} from '../../../../../components/icons/settings-icon';
import {SearchIcon} from '../../../../../components/icons/search-icon';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../../navigation/routes';
import {useModal} from '../../../../../components/modal/modal-provider';

const {Color, UIStyles} = Config;

interface IParamsRow {
  onPressSearch: () => void;
}

export const ParamsRow: React.FC<IParamsRow> = React.memo(({onPressSearch}) => {
  const {navigate} = useNavigation();

  const onPressSetAddress = () => {
    navigate(Routes.AddressList);
  };

  const modal = useModal();

  const onPressSorting = () => {
    modal.show();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressSetAddress} style={styles.button}>
        <Text style={styles.buttonText}>Изменить адрес/тип доставки</Text>
      </TouchableOpacity>
      <View style={UIStyles.flexRow}>
        <TouchableOpacity onPress={modal.show} style={styles.button}>
          <SettingsIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressSearch}
          style={[styles.button, {marginLeft: 8}]}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    ...UIStyles.paddingH16,
    ...UIStyles.flexRow,
    marginTop: 20,
  },
  button: {
    backgroundColor: Color.BACKGROUND_COLOR,
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    ...UIStyles.font15b,
    color: Color.DARK,
  },
});
