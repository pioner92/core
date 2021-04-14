import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BASE_URL, Config} from '../../../../../config';
import {
  IProductListItemContent,
  ProductListItemContent,
} from './product-list-item-content';
import {InfoInCircleTransparentIcon} from '../../../../../components/icons/info-in-corcle-transparent-icon';
import {EnergyDataOverlay, IEnergyDataOverlay} from './energy-data-overlay';

const {Color, UIStyles} = Config;

export interface IProductListItemComponent
  extends IProductListItemContent,
    Omit<IEnergyDataOverlay, 'onPress'> {
  image: string;
  rating: string;
  ratingWrapperStyle?: ViewStyle;
}

export const ProductListItem: React.FC<IProductListItemComponent> = ({
  image,
  rating,
  energyData,
  ratingWrapperStyle,
  ...rest
}) => {
  const url = image.includes('http') ? image : BASE_URL + image;

  const [isVisibleEnergyData, setIsVisibleEnergyData] = useState(false);

  const toggleEnergyData = () => {
    setIsVisibleEnergyData(state => !state);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleEnergyData}>
        <FastImage
          resizeMode={'contain'}
          style={styles.image}
          source={{uri: url}}
        />
        <View style={styles.overlay} />
        <TouchableOpacity onPress={toggleEnergyData} style={styles.buttonInfo}>
          <InfoInCircleTransparentIcon fill={Config.Color.WHITE} />
        </TouchableOpacity>
        <View style={[styles.ratingWrapper, ratingWrapperStyle]}>
          <Text style={styles.ratingValue}>{rating}</Text>
        </View>
        {isVisibleEnergyData ? (
          <EnergyDataOverlay
            rating={rating}
            onPress={toggleEnergyData}
            energyData={energyData}
          />
        ) : null}
      </TouchableOpacity>
      <ProductListItemContent {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 18,
  },
  ratingWrapper: {
    position: 'absolute',
    right: -2,
    backgroundColor: Color.SUCCESS,
    width: 45,
    height: 38,
    borderBottomLeftRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingValue: {
    ...UIStyles.font15,
    fontWeight: '500',
    color: Color.WHITE,
  },
  buttonInfo: {
    position: 'absolute',
    right: 19.6,
    bottom: 14.6,
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: Config.Color.RGBA_100,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: 229,
  },
});
