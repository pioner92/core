import React from 'react';
import {ThemedButton} from '../../../../../components/buttons/themed-button';
import {ModalWithTitleAndDescription} from '../../../../../components/modal/modal-with-title-and-description';

interface IModalDeliveryTime {
  time: string;
  onPress: () => void;
}

export const ModalDeliveryTime: React.FC<IModalDeliveryTime> = ({
  time = 0,
  onPress,
}) => {
  return (
    <ModalWithTitleAndDescription
      title={`Доставим за ${time} минут`}
      description={`Примерное время доставки – около ${time} минут.`}>
      <ThemedButton rounded={true} label="Понятно" onPress={onPress} />
    </ModalWithTitleAndDescription>
  );
};


