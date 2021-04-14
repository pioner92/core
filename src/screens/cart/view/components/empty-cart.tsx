import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ImageRepository} from '../../../../assets/image-repository';
import React from 'react';
import {Config} from '../../../../config';
import {windowHeight} from '../../../../system/helpers/window-size';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const {Color, UIStyles} = Config;

export const EmptyCart = () => {
  const tab = useBottomTabBarHeight();

  return (
    <View style={[styles.container, {transform: [{translateY: -tab}]}]}>
      <FastImage source={ImageRepository.CartImage} style={styles.image} />
      <Text style={styles.title}>Тут пока ничего нет</Text>
      <Text style={styles.description}>
        Самое время выбрать что-то из нашего классного меню
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    paddingHorizontal: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 224,
    height: 143,
  },
  title: {
    marginTop: 25,
    ...UIStyles.font20b,
    color: Color.DARK,
  },
  description: {
    marginTop: 12,
    textAlign: 'center',
    ...UIStyles.font18,
    color: Color.GREY_600,
  },
});
