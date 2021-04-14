import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ImageRepository} from '../../../../assets/image-repository';
import {Config} from '../../../../config';
const {Color, UIStyles} = Config;

export const PaymentsImagesRow = () => {
  return (
    <View style={styles.container}>
      <FastImage
        resizeMode={'contain'}
        style={styles.image}
        source={ImageRepository.Mir}
      />
      <FastImage
        resizeMode={'contain'}
        style={styles.image}
        source={ImageRepository.Visa}
      />
      <FastImage
        resizeMode={'contain'}
        style={styles.image}
        source={ImageRepository.MasterCard}
      />
      <FastImage
        resizeMode={'contain'}
        style={styles.image}
        source={ImageRepository.JCB}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIStyles.flexRow,
    paddingHorizontal: 51,
  },
  image: {
    width: 50,
    height: 50,
  },
});
