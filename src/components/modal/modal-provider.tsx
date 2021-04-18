import React, {useContext, useState} from 'react';
import {IThemedButton} from '../buttons/themed-button';

enum ButtonDirection {
  row = 'row',
  column = 'column',
}

interface IModalButton {
  label: string;
  onPress: () => void;
  styles?: Omit<IThemedButton, 'label' | 'onPress'>;
}

interface IShowCallbackProps {
  title: string;
  description: string;
  buttons: IModalButton[];
  buttonsDirection?: keyof typeof ButtonDirection;
}
type TShowCallback = (props: IShowCallbackProps) => void;

interface IModalProvider {
  isVisible: boolean;
  title: string;
  description: string;
  show: TShowCallback;
  close: () => void;
  buttons: Array<IModalButton>;
  buttonsDirection: keyof typeof ButtonDirection;
}

export const ModalContext = React.createContext<IModalProvider>({
  isVisible: false,
  show: () => {},
  close: () => {},
  description: '',
  title: '',
  buttons: [],
  buttonsDirection: ButtonDirection.column,
});

export const useModal = () => {
  const {show, close} = useContext(ModalContext);
  return {
    show,
    close,
  };
};
export const ModalProvider: React.FC = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [buttonsDirection, setBottomDirection] = useState<
    keyof typeof ButtonDirection
  >(ButtonDirection.column);
  const [buttons, setButtons] = useState<IModalButton[]>([] as IModalButton[]);

  const show: TShowCallback = ({
    title,
    description,
    buttonsDirection = ButtonDirection.column,
    buttons,
  }) => {
    setTitle(title);
    setDescription(description);
    setButtons(buttons);
    setIsVisible(true);
    setBottomDirection(buttonsDirection);
  };
  const close = () => {
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isVisible,
        title,
        description,
        show,
        close,
        buttons,
        buttonsDirection,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
