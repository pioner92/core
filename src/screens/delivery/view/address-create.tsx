import React, {Fragment} from 'react';
import {Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import {ScreenHeaderTitleWithBackButton} from '../../../components/screen-header/screen-header-title-with-back-button';
import {InputWithLabel} from '../../../components/input/input-with-label';
import {useInput} from '../../../system/hooks/use-input';
import {Select} from '../../../components/select/select';
import {Config} from '../../../config';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {ThemedButton} from '../../../components/buttons/themed-button';
import {windowHeight} from '../../../system/helpers/window-size';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {IAddressItem} from '../types/types';
import {ModalDeliveryNotAvailable} from './components/modals/modal-delivery-not-available';
import {useBottomSheetMenu} from '../../../components/bottom-sheet-menu/bottom-sheet-menu-context';
import {useModal} from '../../../components/modal/modal-provider';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {BottomSheetMenuType} from './organisation-list-with-map';

const {UIStyles} = Config;

export const AddressCreate: React.FC = React.memo(() => {
  const cities = useTypedSelector(state => state.delivery.cities);

  const selectCity = useInput(cities?.[0]?.title);
  const inputStreet = useInput('');
  const inputHouse = useInput('');
  const inputEntrance = useInput('');
  const inputFlat = useInput('');
  const inputFloor = useInput('');
  const inputDomophone = useInput('');

  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const {navigate} = useNavigation();

  const onSelectCity = (city: string) => {
    selectCity.onChangeText(city);
  };

  const data: IAddressItem = {
    city: selectCity.value,
    street: inputStreet.value,
    house_num: inputHouse.value,
    floor: inputFloor.value,
    flat_num: inputFlat.value,
    doorphone: inputDomophone.value,
    entreance: inputEntrance.value,
    country: 'Россия',
  };

  const bottomModal = useBottomSheetMenu();
  const modal = useModal();

  const onPressSave = () => {
    // bottomModal?.show();
    modal.show();
    // dispatch(AsyncActionsDelivery.saveNewAddress(data));
  };

  const inputs = [
    {label: 'Дом', props: inputHouse},
    {label: 'Подъезд', props: inputEntrance},
    {label: 'Квартира', props: inputFlat},
    {label: 'Этаж', props: inputFloor},
    {label: 'Код домофона', props: inputDomophone},
  ];

  const onPressSetAddress = () => {};
  const onPressTakeSelf = () => {
    console.log('PRESS');
    modal.hide();
    navigate(
      Routes.SelectOrganisationInMap,
      {bottomSheetMenuType:BottomSheetMenuType.Organisations},
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: Config.Color.WHITE}}>
      <KeyboardAvoidingView
        onTouchStart={Keyboard.dismiss}
        style={{height: windowHeight - insets.bottom - 30}}
        //@ts-ignore
        behavior={Platform.OS == 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
        <View style={styles.container}>
          <ScreenHeaderTitleWithBackButton title={'Адрес доставки'} />
          <Select
            wrapperStyle={{marginVertical: 16}}
            items={cities}
            onSelect={onSelectCity}
          />

          <InputWithLabel
            wrapperStyle={{marginTop: 24}}
            label={'Улица'}
            {...inputStreet}
            placeholderText="Улица"
          />

          <View style={styles.inputRow}>
            {inputs.slice(0, 3).map((el, index) => {
              return (
                <Fragment key={index}>
                  <InputWithLabel
                    wrapperStyle={styles.inputWrapper}
                    label={el.label}
                    {...el.props}
                    placeholderText={el.label}
                  />
                  {index !== inputs.slice(0, 3).length - 1 && <RowSeparator />}
                </Fragment>
              );
            })}
          </View>
          <View style={styles.inputRow}>
            {inputs.slice(3).map((el, index) => {
              return (
                <Fragment key={index}>
                  <InputWithLabel
                    wrapperStyle={styles.inputWrapper}
                    label={el.label}
                    {...el.props}
                    placeholderText={el.label}
                  />
                  {index !== inputs.slice(3).length - 1 && <RowSeparator />}
                </Fragment>
              );
            })}
          </View>
          <ModalDeliveryNotAvailable
            onPressSetAddress={modal.hide}
            onPressTakeSelf={onPressTakeSelf}
          />
          <ThemedButton
            disabled={!inputHouse.value || !inputStreet.value}
            rounded={true}
            label="Сохранить адрес"
            onPress={onPressSave}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

const RowSeparator = () => {
  return <View style={{width: 8}} />;
};

const styles = StyleSheet.create({
  container: {
    ...UIStyles.paddingH16,
    flex: 1,
  },
  select: {
    marginTop: 16,
  },
  inputWrapper: {
    marginTop: 24,
    flex: 1,
  },
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});