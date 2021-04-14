import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScreenHeaderWithTitle} from '../../../components/screen-header/screen-header-with-title';
import {ProfileIcon} from '../../../components/icons/profile-icon';
import {Color, UIStyles} from '../../../assets/styles';
import {ThemedButton} from '../../../components/buttons/themed-button';
import {Routes} from '../../../navigation/routes';
import {StackScreenProps} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../navigation/types/types';

type TProps = StackScreenProps<TRootStackParamList, Routes.ProfileNotAuth>;

export const ProfileNotAuth: React.FC<TProps> = ({navigation}) => {
  const onPress = () => {
    navigation.replace(Routes.AuthPhone);
  };

  return (
    <SafeAreaView>
      <ScreenHeaderWithTitle>Профиль</ScreenHeaderWithTitle>
      <View style={styles.block}>
        <ProfileIcon width={85} height={80} fill={Color.SECONDARY} />
        <View style={styles.descriptionWrapper}>
          <Text style={UIStyles.font24b}>Давайте знакомиться!</Text>
          <Text style={{marginTop: 12}}>
            Подарки на день рождения, сохраненные адреса и персональные акции!
          </Text>
          <ThemedButton
            style={styles.button}
            rounded={true}
            label={'Хочу'}
            onPress={onPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  block: {
    // flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 154,
    paddingHorizontal: 45,
  },
  descriptionWrapper: {
    marginTop: 54,
    alignItems: 'center',
  },
  button: {
    marginTop: 25,
    width: 97,
  },
});
