import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Config} from '../../../config';
import {PlusIcon} from '../../../components/icons/plus-icon';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {useDispatch} from 'react-redux';
import {AsyncActionsDelivery} from '../store/async-actions-delivery';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {AddressListWithCheckedItem} from './components/organisation-list/address-list-with-checked-item';
import {ScreenHeaderTitleWithBackButton} from '../../../components/screen-header/screen-header-title-with-back-button';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../navigation/types/types';

const {Color, UIStyles} = Config;

type TNavigationProps = StackNavigationProp<
  TRootStackParamList,
  Routes.AddressCreate
>;

export const AddressList: React.FC = React.memo(() => {
  const userAddressList = useTypedSelector(state => state.delivery.addressList);
  const dispatch = useDispatch();
  const {navigate} = useNavigation<TNavigationProps>();

  const onCreateNewAddress = () => {
    navigate(Routes.AddressCreate);
  };

  const onPressModal = () => {};

  useEffect(() => {
    dispatch(AsyncActionsDelivery.getUserAddressList());
  }, []);

  return (
    <SafeAreaView>
      <ScreenHeaderTitleWithBackButton title="Адрес доставки" />
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={onCreateNewAddress}
          style={styles.addNewAddressWrapper}>
          <Text>Добавить адрес доставки</Text>
          <PlusIcon fill={Color.GREY_600} />
        </TouchableOpacity>
        <AddressListWithCheckedItem items={userAddressList} />
        {/*<ModalDeliveryTime time={'50'} onPress={onPressModal} />*/}
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
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
