import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PhotoCameraSvg} from '../../../../components/icons/photo-camera-icon';
import {Config} from '../../../../config';

const {Color} = Config;

interface IAvatar {
  imageUrl: string;
}

export const Avatar: React.FC<IAvatar> = ({imageUrl}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <FastImage
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
        <TouchableOpacity style={styles.photoButton}>
          <PhotoCameraSvg fill={Color.WHITE} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 200,
  },
  avatarWrapper: {
    width: 100,
    height: 100,
  },
  photoButton: {
    width: 36,
    height: 36,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderColor: Color.WHITE,
    backgroundColor: Color.PRIMARY,
  },
});
