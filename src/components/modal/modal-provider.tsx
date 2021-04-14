import React, {useContext, useState} from 'react';

interface IModalProvider {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
}

export const ModalContext = React.createContext<IModalProvider>({
  isVisible: true,
  show: () => {},
  hide: () => {},
});

export const useModal = () => {
  const modalContext = useContext(ModalContext);
  return {
    show: modalContext.show,
    hide: modalContext.hide,
    isVisible: modalContext.isVisible,
  };
};
export const ModalProvider: React.FC = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isVisible: isVisible,
        show: () => setIsVisible(true),
        hide: () => setIsVisible(false),
      }}>
      {children}
    </ModalContext.Provider>
  );
};
