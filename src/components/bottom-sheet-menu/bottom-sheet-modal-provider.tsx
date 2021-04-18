import React, {useContext, useRef, useState} from 'react';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

export interface IBottomSheetModalComponentProps {
  close?: () => void;
  expand?: () => void;
  collapse?: () => void;
}

type IComponent = React.FC<IBottomSheetModalComponentProps>;

interface IShowCallbackProps {
  Component: IComponent | null;
  snapPoints?: Array<string | number>;
}

type TShowCallback = (props: IShowCallbackProps) => void;

interface IBottomSheetModalMenu {
  isVisible: boolean;
  show: TShowCallback;
  expand: () => void;
  collapse: () => void;
  close: () => void;
  Component: IComponent | null;
  snapPoints: Array<string | number>;
  modalRef: React.MutableRefObject<BottomSheetModalMethods | null> | null;
}

export const BottomSheetModalProvider = React.createContext<IBottomSheetModalMenu>(
  {
    isVisible: false,
    show: () => undefined,
    close: () => undefined,
    expand: () => undefined,
    collapse: () => undefined,
    snapPoints: ['30%'],
    modalRef: null,
    Component: null,
  },
);

export const useBottomSheetMenu = () => {
  return useContext(BottomSheetModalProvider);
};

export const BottomSheetMenuProvider: React.FC = React.memo(({children}) => {
  const [Component, setComponent] = useState<IComponent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [snapPoints, setSnapPoints] = useState<Array<string | number>>([]);
  const modalRef = useRef<BottomSheetModalMethods | null>(null);

  const show: TShowCallback = ({Component, snapPoints = ['30%']}) => {
    setComponent(Component);
    setIsVisible(true);
    setSnapPoints(snapPoints);
    modalRef.current?.present();
  };

  const close = () => {
    setIsVisible(false);
    setComponent(() => null);
    modalRef.current?.dismiss();
  };

  const expand = () => {
    modalRef.current?.expand();
  };
  const collapse = () => {
    modalRef.current?.collapse();
  };

  return (
    <BottomSheetModalProvider.Provider
      value={{
        Component,
        snapPoints,
        isVisible,
        modalRef,
        close,
        show,
        collapse,
        expand,
      }}>
      {children}
    </BottomSheetModalProvider.Provider>
  );
});
