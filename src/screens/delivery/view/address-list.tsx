import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Config} from '../../../config';
import {PlusIcon} from '../../../components/icons/plus-icon';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {useDispatch} from 'react-redux';
import {useLinkTo, useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {AddressListWithCheckedItem} from './components/organisation-list/address-list-with-checked-item';
import {ScreenHeaderTitleWithBackButton} from '../../../components/screen-header/screen-header-title-with-back-button';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../navigation/types/types';
import {ThemedButton} from '../../../components/buttons/themed-button';
import {
  IAddressItemResponse,
  IGetOrganisationByAddressResponse,
} from '../api/types';
import {useModal} from '../../../components/modal/modal-provider';
import {AsyncActionsDelivery} from '../store/async-actions-delivery';

const {Color, UIStyles} = Config;

type TNavigation = StackNavigationProp<
  TRootStackParamList,
  Routes.AddressCreate
>;

type TProps = StackScreenProps<TRootStackParamList, Routes.LoginCode>;

export const AddressList: React.FC<TProps> = React.memo(() => {
  const userAddressList = useTypedSelector(state => state.delivery.addressList);
  const dispatch = useDispatch();
  const {navigate} = useNavigation<TNavigation>();
  const cityId = useTypedSelector(state => state.delivery.selectedCityId);
  const linkTo = useLinkTo();

  const {show} = useModal();

  const [
    selectedAddress,
    setSelectedAddress,
  ] = useState<IAddressItemResponse>();

  const onCreateNewAddress = () => {
    navigate(Routes.AddressCreate);
  };

  const onPressGoToMenu = async () => {
    //@ts-ignore
    const res: IGetOrganisationByAddressResponse = await dispatch(
      AsyncActionsDelivery.getOrganisationByAddress({
        street: selectedAddress?.street || '',
        house: selectedAddress?.house_num || '',
        country: selectedAddress?.country || '',
        city: selectedAddress?.city || '',
        city_id: cityId,
      }),
    );
    if (res) {
      show({
        title: res.successMsgTitle,
        description: res.successMsgSubtitle,
        buttons: [
          {
            label: 'Понятно',
            onPress: () => {
              linkTo(`/${Routes.TabRootScreen}/${Routes.Catalog}`);
            },
          },
        ],
      });
    }
  };

  useEffect(() => {
    // dispatch(AsyncActionsDelivery.getUserAddressList());
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScreenHeaderTitleWithBackButton title="Адрес доставки" />
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={onCreateNewAddress}
          style={styles.addNewAddressWrapper}>
          <Text>Добавить адрес доставки</Text>
          <PlusIcon fill={Color.GREY_600} />
        </TouchableOpacity>
        <AddressListWithCheckedItem
          onSelect={setSelectedAddress}
          items={userAddressList}
        />
        <ThemedButton
          rounded={true}
          label={'Перейти в меню'}
          onPress={onPressGoToMenu}
        />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    ...UIStyles.paddingH16,
    paddingTop: 16,
  },
  addNewAddressWrapper: {
    borderWidth: 1,
    borderColor: Color.GREY_100,
    borderRadius: 8,
    paddingVertical: 19.5,
    ...UIStyles.paddingH16,
    ...UIStyles.flexRow,
  },
});
