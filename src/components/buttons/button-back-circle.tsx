import React from 'react';
import {StyleSheet} from 'react-native';
import {ArrowLeftIcon} from '../icons/arrow-left-icon';
import {Config} from '../../config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {ButtonCircle} from './button-circle';

const {Color} = Config;

export const ButtonBackCircle = React.memo(() => {
  const insets = useSafeAreaInsets();
  const {goBack} = useNavigation();

  return (
    <ButtonCircle
      style={StyleSheet.flatten([styles.circle, {top: insets.top}])}
      onPress={goBack}>
      <ArrowLeftIcon />
    </ButtonCircle>
  );
});

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    zIndex: 1,
    left: 16,
    backgroundColor: Color.WHITE,
    borderRadius: 100,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
