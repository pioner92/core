import {
  BottomSheetModalComponent,
  IBottomSheetModalComponent,
} from '../../../../components/bottom-sheet-menu/bottom-sheet-modal/bottom-sheet-modal';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Config} from '../../../../config';
import {ThemedButton} from '../../../../components/buttons/themed-button';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../navigation/routes';
import {BottomSheetMenuType} from '../organisation-list-with-map';
import {useBottomSheetMenu} from '../../../../components/bottom-sheet-menu/bottom-sheet-menu-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../../navigation/types/types';

const {Color, UIStyles} = Config;

interface ICreateNewAddressModal extends IBottomSheetModalComponent {}
type TNavigationProps = CompositeNavigationProp<
  StackNavigationProp<TRootStackParamList, Routes.SelectOrganisationInMap>,
  StackNavigationProp<TRootStackParamList, Routes.AddressCreate>
>;

export const CreateNewAddressModal: React.FC<ICreateNewAddressModal> = () => {
  const {navigate} = useNavigation<TNavigationProps>();
  const bottomModal = useBottomSheetMenu();

  const onPressNewAddress = () => {
    navigate(Routes.AddressCreate);
    bottomModal.hide();
  };

  const onPress = () => {
    navigate(Routes.SelectOrganisationInMap, {
      bottomSheetMenuType: BottomSheetMenuType.Organisations,
    });
    bottomModal.hide();
  };

  return (
    <BottomSheetModalComponent>
      <View style={styles.container}>
        <Text style={styles.title}>Создадим адрес?</Text>
        <Text style={styles.description}>
          Хотим убедиться, что на ваш адрес доступна доставка
        </Text>
        <View style={styles.buttonsWrapper}>
          <ThemedButton
            modifier={'bordered'}
            rounded={true}
            label={'Новый адрес'}
            onPress={onPressNewAddress}
          />
          <ThemedButton
            modifier={'bordered'}
            wrapperStyle={{marginTop: 8}}
            rounded={true}
            label={'Заберу заказ сам'}
            onPress={onPress}
          />
        </View>
      </View>
    </BottomSheetModalComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 31,
    alignItems: 'center',
  },
  description: {
    marginTop: 16,
    ...UIStyles.font15,
    color: Color.GREY_800,
  },
  buttonsWrapper: {
    width: '100%',
    marginTop: 72,
  },
  title: {
    ...UIStyles.font24b,
    color: Color.BLACK,
  },
});
