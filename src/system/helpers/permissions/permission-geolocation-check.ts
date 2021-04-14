import {Platform} from 'react-native';
import {check, PERMISSIONS} from 'react-native-permissions';

export const permissionGeolocationCheck = async () => {
  if (Platform.OS === 'ios') {
    return await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else {
    return await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  }
};
