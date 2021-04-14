import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useMemo} from 'react';
import CustomBackdrop from './components/custom-backdrop';
import {refModal} from '../bottom-sheet-menu-context';

export interface IBottomSheetModalComponent {
  snapPointsProps?: Array<string | number>;
}

export const BottomSheetModalComponent: React.FC<IBottomSheetModalComponent> = ({
  children,
  snapPointsProps,
}) => {
  const snapPoints = useMemo(() => ['30%'], []);

  return (
    <BottomSheetModal
      dismissOnPanDown={true}
      backdropComponent={CustomBackdrop}
      //@ts-ignore
      ref={refModal}
      index={0}
      snapPoints={snapPointsProps || snapPoints}>
      {children}
    </BottomSheetModal>
  );
};
