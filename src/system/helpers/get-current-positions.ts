import Geolocation from '@react-native-community/geolocation';
import {RESULTS} from 'react-native-permissions';
import {permissionGeolocationCheck} from './permissions/permission-geolocation-check';

interface IetCurrentPositions {
  latitude: number;
  longitude: number;
}

export const getCurrentPositions = async (): Promise<
  IetCurrentPositions | undefined
> => {
  const status = await permissionGeolocationCheck();
  if (status !== RESULTS.GRANTED) {
    return;
  }
  return new Promise(res => {
    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      res({latitude, longitude});
    });
  });
};
