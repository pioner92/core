import {PERMISSIONS, request} from 'react-native-permissions';
import {Platform} from 'react-native';

export const permissionGeolocationRequest = async () => {
  if (Platform.OS === 'ios') {
    return await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else {
    return await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  }
};
