import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useContext, useMemo} from 'react';
import CustomBackdrop from './components/custom-backdrop';
import {BottomSheetModalProvider} from '../bottom-sheet-modal-provider';

export interface IBottomSheetModalComponent {}

export const BottomSheetModalComponent: React.FC<IBottomSheetModalComponent> = React.memo(
  ({}) => {
    const snapPoints = useMemo(() => ['30%'], []);
    const {
      Component,
      snapPoints: snapPointsProps,
      modalRef,
      close,
      collapse,
      expand,
    } = useContext(BottomSheetModalProvider);

    return (
      <BottomSheetModal
        topInset={50}
        handleHeight={50}
        dismissOnPanDown={true}
        backdropComponent={props => <CustomBackdrop close={close} {...props} />}
        ref={modalRef}
        index={0}
        snapPoints={snapPointsProps || snapPoints}>
        {React.isValidElement(Component) &&
          //@ts-ignore
          React.cloneElement(Component, {close, collapse, expand})}
      </BottomSheetModal>
    );
  },
);
