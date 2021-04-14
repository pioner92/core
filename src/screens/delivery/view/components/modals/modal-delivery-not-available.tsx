import {ThemedButton} from '../../../../../components/buttons/themed-button';
import React from 'react';
import {ModalWithTitleAndDescription} from '../../../../../components/modal/modal-with-title-and-description';

const text =
  'К сожалению, на данный адрес мы не можем организовать доставку, попробуйте указать другой адрес. Также вы можете забрать заказ самостоятельно';

interface IModalDeliveryNotAvailable {
  onPressSetAddress: () => void;
  onPressTakeSelf: () => void;
}

export const ModalDeliveryNotAvailable: React.FC<IModalDeliveryNotAvailable> = ({
  onPressSetAddress,
  onPressTakeSelf,
}) => {
  return (
    <ModalWithTitleAndDescription
      descriptionStyle={{paddingBottom: 16}}
      title={'К вам пока не доставляем :('}
      description={text}>
      <ThemedButton
        rounded={true}
        modifier={'bordered'}
        label={'Изменить адрес'}
        onPress={onPressSetAddress}
      />
      <ThemedButton
        wrapperStyle={{marginTop: 8}}
        rounded={true}
        modifier={'bordered'}
        label={'Заберу сам'}
        onPress={onPressTakeSelf}
      />
    </ModalWithTitleAndDescription>
  );
};

