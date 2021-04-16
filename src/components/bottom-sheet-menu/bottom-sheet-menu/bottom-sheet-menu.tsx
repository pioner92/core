import React, {useCallback, useEffect, useRef} from 'react';
import {View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {HandleComponent} from '../handle-component';

interface IBottomSheetMenu {
  snapPoints?: Array<string>;
}

export const BottomSheetMenu: React.FC<IBottomSheetMenu> = React.memo(
  ({snapPoints = ['1%', '40%'], children}) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);


    useEffect(() => {
      bottomSheetRef.current?.snapTo(0);
    }, [bottomSheetRef]);

    return (
      <BottomSheet
        enableContentPanningGesture={false}
        ref={bottomSheetRef}
        handleComponent={HandleComponent}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={{paddingBottom: 20}}>{children}</View>
      </BottomSheet>
    );
  },
);

