import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useMemo} from 'react';
import CustomBackdrop from './components/custom-backdrop';
import {refModal} from '../bottom-sheet-menu-context';

export interface IBottomSheetModalComponent {
  snapPointsProps?: Array<string | number>;
  onChange?: (index: number) => void;
}

export const BottomSheetModalComponent: React.FC<IBottomSheetModalComponent> = ({
  children,
  snapPointsProps,
  onChange,
}) => {
  const snapPoints = useMemo(() => ['30%'], []);

  return (
    <BottomSheetModal
      topInset={50}
      handleHeight={50}
      dismissOnPanDown={true}
      backdropComponent={CustomBackdrop}
      //@ts-ignore
      ref={refModal}
      onChange={onChange}
      index={0}
      snapPoints={snapPointsProps || snapPoints}>
      {children}
    </BottomSheetModal>
  );
};
