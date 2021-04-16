import React, {useMemo} from 'react';
import {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';
import {useBottomSheetMenu} from '../../bottom-sheet-menu-context';

const CustomBackdrop = ({animatedIndex, style}: BottomSheetBackdropProps) => {
  // animated variables
  const modal = useBottomSheetMenu();
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

  return <Animated.View onTouchEnd={modal.hide} style={containerStyle} />;
};

export default CustomBackdrop;
