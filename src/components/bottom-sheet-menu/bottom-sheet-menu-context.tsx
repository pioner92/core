import React, {RefObject, useContext} from 'react';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

export const refModal = React.createRef<BottomSheetModalMethods | null>();

export const BottomSheetModalMenu = React.createContext<
  RefObject<BottomSheetModalMethods | null>
>(refModal);

export const useBottomSheetMenu = () => {
  const ref = useContext(BottomSheetModalMenu);
  // return ref.current;
  return {
    show: () => ref.current?.present(),
    hide: () => ref.current?.dismiss(),
  };
};

export const BottomSheetMenuContext: React.FC = ({children}) => {
  return (
    <BottomSheetModalMenu.Provider value={refModal}>
      {children}
    </BottomSheetModalMenu.Provider>
  );
};
