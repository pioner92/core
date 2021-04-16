import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {ScreenHeaderWithTitle} from '../../../components/screen-header/screen-header-with-title';
import {useDispatch} from 'react-redux';
import {AsyncActionsDelivery} from '../store/async-actions-delivery';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {OrganisationListItemWithChecked} from './components/organisation-list/organisation-list-item-with-checked';
import {Config} from '../../../config';
import {Divider} from '../../../components/divider';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemedButton} from '../../../components/buttons/themed-button';
import {CreateNewAddressModal} from './components/create-new-address-modal';
import {useBottomSheetMenu} from '../../../components/bottom-sheet-menu/bottom-sheet-menu-context';
import {ActionDelivery} from '../store/action-delivery';

const {UIStyles} = Config;

export const SelectCity: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState<string>('-1');
  const insets = useSafeAreaInsets();

  const cities = useTypedSelector(state => state.delivery.cities);

  const bottomModal = useBottomSheetMenu();

  const onPressSave = () => {
    bottomModal?.show();
    dispatch(ActionDelivery.setSelectedCityId(selectedCity));
  };

  useEffect(() => {
    dispatch(AsyncActionsDelivery.getCities());
    dispatch(AsyncActionsDelivery.getOrderTypes());
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScreenHeaderWithTitle>Выберите город</ScreenHeaderWithTitle>
      <View style={[UIStyles.paddingH16, {flex: 1}]}>
        <FlatList
          contentContainerStyle={[UIStyles.paddingV16, {paddingBottom: 10}]}
          ItemSeparatorComponent={Divider}
          data={cities}
          renderItem={({item}) => (
            <OrganisationListItemWithChecked
              isSelected={item.id === selectedCity}
              onSelect={() => setSelectedCity(item.id)}
              title={item.title}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <ThemedButton
        rounded={true}
        disabled={selectedCity === '-1'}
        wrapperStyle={StyleSheet.flatten([
          styles.buttonWrapper,
          {marginBottom: -insets.bottom},
        ])}
        label="Сохранить"
        onPress={onPressSave}
      />
      <CreateNewAddressModal cityId={selectedCity} />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    ...UIStyles.paddingH16,
  },
});
