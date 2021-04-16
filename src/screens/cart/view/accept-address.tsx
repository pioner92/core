import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {ScreeHeaderTitleLeft} from '../../../components/screen-header/scree-header-title-left';
import {Select} from '../../../components/select/select';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {InputWithLabel} from '../../../components/input/input-with-label';
import {useInput} from '../../../system/hooks/use-input';
import {Config} from '../../../config';
const {Color, UIStyles} = Config;

export const AcceptAddress = () => {
  const streetInput = useInput('');

  const cities = useTypedSelector(state => state.delivery.cities);

  const onSelectCity = () => {};

  return (
    <SafeAreaView>
      <ScreeHeaderTitleLeft title={'Подтвердите адрес'} />
      <View style={UIStyles.paddingH16}>
        <Text>Подтвердите адрес и оставьте комментарий</Text>
        <Select
          containerStyle={{marginTop: 24}}
          items={cities}
          onSelect={onSelectCity}
        />
        <InputWithLabel
          wrapperStyle={{marginTop: 24}}
          label={'Улица'}
          {...streetInput}
        />
      </View>
    </SafeAreaView>
  );
};
