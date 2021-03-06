import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {InputWithLabel} from '../../../components/input/input-with-label';
import {useInput} from '../../../system/hooks/use-input';
import {UIStyles} from '../../../assets/styles';
import {Avatar} from './components/avatar';
import {Config} from '../../../config';
import {GenderRadioSelect} from './components/gender-radio-select';
import {IRadioButtonData} from '../../../components/radio-button/radio-button';
import {ScreenHeaderTitleWithBackButton} from '../../../components/screen-header/screen-header-title-with-back-button';
import {ThemedButton} from '../../../components/buttons/themed-button';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';

const {Color} = Config;

export const ProfileSettings: React.FC = () => {
  const nameInput = useInput('');
  const dateInput = useInput('');
  const emailInput = useInput('');

  const {navigate} = useNavigation();

  const inputs = [
    {title: 'Ваше имя', props: nameInput, placeholder: 'Имя'},
    {title: 'Дата рождения', props: dateInput, placeholder: 'Дата'},
    {title: 'Ваш E-mail', props: emailInput, placeholder: 'Email'},
  ];

  const onSelectGender = (item: IRadioButtonData) => {
    console.log(item);
  };

  const onPressSave = () => {
    navigate(Routes.ProfileAuth);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScreenHeaderTitleWithBackButton title="Настройки профиля" />
      <View style={styles.container}>
        <Avatar
          imageUrl={'https://klike.net/uploads/posts/2020-07/1594621599_2.jpg'}
        />
        {inputs.map((el, index) => {
          return (
            <InputWithLabel
              key={index}
              placeholderText={el.placeholder}
              wrapperStyle={{marginTop: 24}}
              {...el.props}
              label={el.title}
            />
          );
        })}
        <Text style={styles.description}>На него мы отправим чек</Text>
        <GenderRadioSelect onSelect={onSelectGender} />
        <ThemedButton
          rounded={true}
          wrapperStyle={{marginTop: 'auto', marginBottom: 10}}
          label={'Сохранить'}
          onPress={onPressSave}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIStyles.paddingH16,
    flex: 1,
  },
  description: {
    ...UIStyles.font13,
    color: Color.GREY_600,
    paddingTop: 12,
  },
});
