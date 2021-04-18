import React, {useEffect, useMemo} from 'react';
import {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';
import {useBottomSheetMenu} from '../../bottom-sheet-modal-provider';

interface ICustomBackdrop extends BottomSheetBackdropProps {
  close: () => void;
}

const CustomBackdrop = ({animatedIndex, style, close}: ICustomBackdrop) => {
  const animatedOpacity = useMemo(
    () =>
      interpolate(animatedIndex, {
        inputRange: [0, 1],
        outputRange: [0, 0.4],
        extrapolate: Extrapolate.CLAMP,
      }),
    [animatedIndex],
  );

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: '#000',
        opacity: animatedOpacity,
      },
    ],
    [style, animatedOpacity],
  );

  return <Animated.View onTouchStart={close} style={containerStyle} />;
};

export default CustomBackdrop;
