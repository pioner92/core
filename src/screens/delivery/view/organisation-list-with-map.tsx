import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {LatLng, Marker} from 'react-native-maps';
import {FocusAwareStatusBar} from '../../../system/helpers/focus-aware-status-bar';
import {CustomMarker} from '../../../components/map/custom-marker';
import {useDispatch} from 'react-redux';
import {AsyncActionsDelivery} from '../store/async-actions-delivery';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {ButtonBackCircle} from '../../../components/buttons/button-back-circle';
import {IOrganisation} from '../types/types';
import {convertCoordinatesToNumber} from '../../../system/helpers/convert-coordinates-to-number';
import {ButtonGoToCurrentPosition} from '../../../components/buttons/button-go-to-current-position';
import {getCurrentPositions} from '../../../system/helpers/get-current-positions';
import {BottomSheetContactList} from '../../../components/bottom-sheet-menu/bottom-sheet-menu/bottom-sheet-contact-list';
import {StackScreenProps} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../navigation/types/types';
import {Routes} from '../../../navigation/routes';
import {BottomSheetOrganisationListWithButton} from '../../../components/bottom-sheet-menu/bottom-sheet-menu/bottom-sheet-organisation-list-with-button';
import {windowHeight} from '../../../system/helpers/window-size';
import {ActionDelivery} from '../store/action-delivery';
import {AsyncActionsCatalog} from '../../catalog/store/async-actions-catalog';

export enum BottomSheetMenuType {
  Contacts = 'Contacts',
  Organisations = 'Organisations',
}

type TProps = StackScreenProps<
  TRootStackParamList,
  typeof Routes.SelectOrganisationInMap
>;

export const OrganisationListWithMap: React.FC<TProps> = React.memo(
  ({route, navigation}) => {
    const mapRef = useRef<MapView>(null);
    const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);
    const [selectedOrganisation, setSelectedOrganisation] = useState(-1);
    const orderType = useTypedSelector(
      state => state.delivery.selectedOrderTypeId,
    );
    const isLoading = useTypedSelector(state => state.delivery.isLoading);
    const dispatch = useDispatch();

    const organisations = useTypedSelector(
      state => state.delivery.organisations,
    );
    const selectedCityId = useTypedSelector(
      state => state.delivery.selectedCityId,
    );
    const selectedOrderTypeId = useTypedSelector(
      state => state.delivery.selectedOrderTypeId,
    );
    const markers = useRef<{[key: number]: Marker}>({});
    const bottomSheetMenuType = route.params?.bottomSheetMenuType;

    const onPressButton = () => {
      dispatch(
        AsyncActionsCatalog.getHomepageData({
          rest_id: selectedOrganisation,
          order_type: +orderType,
          page: 1,
        }),
      );
      //@ts-ignore
      navigation.navigate(Routes.TabRootScreen, {screen: Routes.Catalog});
    };

    const animateToRegion = (props: LatLng) => {
      mapRef.current?.animateToRegion(
        {
          ...props,
          longitudeDelta: 0.15,
          latitudeDelta: 0.15,
        },
        1000,
      );
    };

    const firstPositionDisplay = async (data: LatLng) => {
      const currentCoordinates = await getCurrentPositions();
      if (currentCoordinates) {
        setCurrentLocation(currentCoordinates);
        animateToRegion(currentCoordinates);
      } else {
        animateToRegion(data);
      }
    };

    const onSelectListItem = (item: IOrganisation) => {
      animateToRegion(convertCoordinatesToNumber(item.GPS));
      markers.current[item.id]?.showCallout();
      setSelectedOrganisation(item.id);
      dispatch(ActionDelivery.setSelectedOrganisationId(item.id.toString()));
    };

    const animateToCurrentPosition = useCallback(() => {
      if (currentLocation) {
        animateToRegion(currentLocation);
      }
    }, [currentLocation]);

    const addMarkerRef = (ref: Marker | null, item: IOrganisation) => {
      if (ref) {
        markers.current[item.id] = ref;
      }
    };
    useEffect(() => {
      dispatch(
        AsyncActionsDelivery.getOrganisations({
          id: +selectedCityId,
          order_type: +selectedOrderTypeId,
        }),
      );
    }, [selectedCityId, selectedOrderTypeId]);

    useEffect(() => {
      if (organisations.length > 0) {
        firstPositionDisplay(convertCoordinatesToNumber(organisations[0].GPS));
      }
    }, [organisations]);

    return (
      <View style={[styles.container]}>
        <ButtonBackCircle />
        <FocusAwareStatusBar barStyle={'light-content'} />
        <MapView
          ref={mapRef}
          style={{width: '100%', height: windowHeight - 45}}
          showsUserLocation={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {organisations.map(el => {
            return (
              <CustomMarker
                key={el.id}
                addMarkerRef={markerRef => addMarkerRef(markerRef, el)}
                onPressMarker={() =>
                  animateToRegion(convertCoordinatesToNumber(el.GPS))
                }
                calloutText={el.title}
                latitude={+el.GPS.latitude}
                longitude={+el.GPS.longitude}
              />
            );
          })}
        </MapView>
        <ButtonGoToCurrentPosition onPress={animateToCurrentPosition} />
        {bottomSheetMenuType === BottomSheetMenuType.Contacts ? (
          <BottomSheetContactList
            data={organisations}
            onSelectItem={onSelectListItem}
          />
        ) : (
          <BottomSheetOrganisationListWithButton
            isLoading={isLoading}
            onPressButton={onPressButton}
            data={organisations}
            onSelectItem={onSelectListItem}
          />
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
