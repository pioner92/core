import {InputWithRightElement} from '../../../../components/input/input-with-right-element';
import {ThemedButton} from '../../../../components/buttons/themed-button';
import React from 'react';
import {Config} from '../../../../config';
import {useInput} from '../../../../system/hooks/use-input';

const {UIStyles} = Config;

interface IPromoInput {
  onPress: (text: string) => void;
}

export const PromoInput: React.FC<IPromoInput> = ({onPress}) => {
  const input = useInput('');
  const onPressHandler = () => {
    onPress(input.value);
  };

  return (
    <InputWithRightElement
      {...input}
      placeholderText={'Введите промокод'}
      inputStyle={{paddingVertical: 11, alignItems: 'center', marginTop: 16}}
      RightComponent={() => {
        return (
          <ThemedButton
            buttonStyle={{flex: 1}}
            rounded={true}
            modifier={'bordered'}
            wrapperStyle={{width: 97, height: 28}}
            labelStyle={UIStyles.font12}
            label={'Проверить'}
            onPress={onPressHandler}
          />
        );
      }}
    />
  );
};
