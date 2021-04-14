import {ButtonCircle, IButtonCircle} from './button-circle';
import React from 'react';
import {ArrowNavigate} from '../icons/arrow-navigate';
import {StyleSheet} from 'react-native';
import {Config} from '../../config';

const {UIStyles, Color} = Config;

interface IButtonGoToCurrentPosition extends IButtonCircle {}

export const ButtonGoToCurrentPosition: React.FC<IButtonGoToCurrentPosition> = React.memo(
  ({...rest}) => {
    return (
      <ButtonCircle style={styles.container} {...rest}>
        <ArrowNavigate />
      </ButtonCircle>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    zIndex: 0,
    top: '45%',
    right: 16,
    ...UIStyles.shadowMD,
  },
});
