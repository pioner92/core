import {
  BottomSheetModalComponent,
  IBottomSheetModalComponent,
} from '../../../../components/bottom-sheet-menu/bottom-sheet-modal/bottom-sheet-modal-component';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Config} from '../../../../config';
import {ThemedButton} from '../../../../components/buttons/themed-button';
import {
  CompositeNavigationProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {Routes} from '../../../../navigation/routes';
import {BottomSheetMenuType} from '../organisation-list-with-map';
import {useBottomSheetMenu} from '../../../../components/bottom-sheet-menu/bottom-sheet-menu-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../../navigation/types/types';
import {useTypedSelector} from '../../../../system/hooks/use-typed-selector';
import {useDispatch} from 'react-redux';
import {ActionDelivery} from '../../store/action-delivery';

const {Color, UIStyles} = Config;

interface ICreateNewAddressModal extends IBottomSheetModalComponent {
  cityId: string;
}
type TNavigationProps = CompositeNavigationProp<
  StackNavigationProp<TRootStackParamList, Routes.SelectOrganisationInMap>,
  StackNavigationProp<TRootStackParamList, Routes.AddressCreate>
>;

export const CreateNewAddressModal: React.FC<ICreateNewAddressModal> = () => {
  const {navigate} = useNavigation<TNavigationProps>();
  const bottomModal = useBottomSheetMenu();
  const orderTypes = useTypedSelector(state => state.delivery.orderTypes);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const onPressNewAddress = (id: string) => {
    dispatch(ActionDelivery.setSelectedOrderType(id));
    if (id === '2') {
      navigate(Routes.AddressCreate);
    } else {
      navigate(Routes.SelectOrganisationInMap, {
        bottomSheetMenuType: BottomSheetMenuType.Organisations,
      });
    }
    bottomModal.hide();
  };

  if (!isFocused) {
    return null;
  }

  return (
    <BottomSheetModalComponent snapPointsProps={['35%']}>
      <View style={styles.container}>
        <Text style={styles.title}>Создадим адрес?</Text>
        <Text style={styles.description}>
          Хотим убедиться, что на ваш адрес доступна доставка
        </Text>
        <View style={styles.buttonsWrapper}>
          {orderTypes?.map(el => {
            return (
              <ThemedButton
                key={el.id}
                wrapperStyle={{marginTop: 8}}
                modifier={'bordered'}
                rounded={true}
                label={el?.name}
                onPress={() => onPressNewAddress(el.id)}
              />
            );
          })}
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
    marginTop: 32,
  },
  title: {
    ...UIStyles.font24b,
    color: Color.BLACK,
  },
});
