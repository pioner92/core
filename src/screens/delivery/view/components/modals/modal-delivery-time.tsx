import React from 'react';
import {ThemedButton} from '../../../../../components/buttons/themed-button';
import {ModalWithTitleAndDescription} from '../../../../../components/modal/modal-with-title-and-description';

interface IModalDeliveryTime {
  onPress: () => void;
  title: string;
  description: string;
}

export const ModalDeliveryTime: React.FC<IModalDeliveryTime> = ({
  title,
  description,
  onPress,
}) => {
  return (
    <ModalWithTitleAndDescription title={title} description={description}>
      <ThemedButton rounded={true} label="Понятно" onPress={onPress} />
    </ModalWithTitleAndDescription>
  );
};
