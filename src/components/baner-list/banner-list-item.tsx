import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {IBannerItem} from '../../screens/catalog/types/types';
import {Config} from '../../config';

const {Color, UIStyles} = Config;

export interface IBannerListItemProps {
  item: IBannerItem;
  style?: ViewStyle;
  onPress?: () => void;
}

export const BannerListItem: React.FC<IBannerListItemProps> = ({
  item,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <FastImage
        source={{uri: item.img_big}}
        style={styles.image}
        resizeMode={'cover'}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.68)']}
        style={styles.gradient}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
      />
      <View style={[styles.titleWrapper]}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 128,
    backgroundColor: Color.WHITE,
    marginRight: 12,
  },
  image: {
    width: 283,
    height: 128,
    borderRadius: 12,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  titleWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    ...UIStyles.font20b,
    color: Color.WHITE,
  },
});
