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
import {BottomSheetOrderTypeContent} from './components/bottom-sheet-order-type-content';
import {ActionDelivery} from '../store/action-delivery';
import {useBottomSheetMenu} from '../../../components/bottom-sheet-menu/bottom-sheet-modal-provider';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../navigation/types/types';
import {Routes} from '../../../navigation/routes';

const {UIStyles} = Config;

export type TNavigationPropsOrderTypeModal = CompositeNavigationProp<
  StackNavigationProp<TRootStackParamList, Routes.SelectOrganisationInMap>,
  StackNavigationProp<TRootStackParamList, Routes.AddressCreate>
>;

export const SelectCity: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState<string>('-1');
  const insets = useSafeAreaInsets();
  const {navigate} = useNavigation<TNavigationPropsOrderTypeModal>();

  const cities = useTypedSelector(state => state.delivery.cities);

  const {show, close} = useBottomSheetMenu();

  const onPressSave = () => {
    show({
      Component: () => (
        <BottomSheetOrderTypeContent navigate={navigate} close={close} />
      ),
      snapPoints: ['35%'],
    });
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
          {marginBottom: -insets.bottom + 10},
        ])}
        label="Сохранить"
        onPress={onPressSave}
      />
      {/*<CreateNewAddressModal cityId={selectedCity} />*/}
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
