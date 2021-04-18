import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Config} from '../../../../config';
import {ThemedButton} from '../../../../components/buttons/themed-button';
import {useTypedSelector} from '../../../../system/hooks/use-typed-selector';
import {IOrderTypesItem} from '../../types/types';
import {Routes} from '../../../../navigation/routes';
import {ActionDelivery} from '../../store/action-delivery';
import {BottomSheetMenuType} from '../organisation-list-with-map';
import {useDispatch} from 'react-redux';
import {IBottomSheetModalComponentProps} from '../../../../components/bottom-sheet-menu/bottom-sheet-modal-provider';

const {Color, UIStyles} = Config;

interface ICreateNewAddressModal extends IBottomSheetModalComponentProps {
  navigate: (routName: keyof typeof Routes, params?: any) => void;
}

export const BottomSheetOrderTypeContent: React.FC<ICreateNewAddressModal> = ({
  navigate,
  close,
}) => {
  const orderTypes = useTypedSelector(state => state.delivery.orderTypes);
  const dispatch = useDispatch();

  const onPressOrderTypeItem = (type: IOrderTypesItem) => {
    dispatch(ActionDelivery.setSelectedOrderType(type.id));
    if (type.isRemoted) {
      navigate(Routes.AddressCreate);
    } else {
      navigate(Routes.SelectOrganisationInMap, {
        bottomSheetMenuType: BottomSheetMenuType.Organisations,
      });
    }
    close?.();
  };

  return (
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
              onPress={() => onPressOrderTypeItem(el)}
            />
          );
        })}
      </View>
    </View>
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
