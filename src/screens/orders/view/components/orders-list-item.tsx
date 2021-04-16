import React from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Config} from '../../../../config';
import {Divider} from '../../../../components/divider';
import {Rating} from '../../../../components/rating/rating';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../navigation/routes';
const {Color, UIStyles} = Config;

interface IMyOrderListItem {
  onPress: () => void;
  address: string;
  rating?: number;
  title: string;
  price: number;
  status: string;
  statusColorWrapper?: ColorValue;
  statusColorLabel?: ColorValue;
  containerColor?: ColorValue;
  containerStyle?: ViewStyle;
  date: string;
}

export const OrdersListItem: React.FC<IMyOrderListItem> = ({
  title,
  address,
  rating,
  price,
  date,
  status,
  statusColorLabel = Color.WHITE,
  statusColorWrapper = Color.SUCCESS,
  containerColor,
  containerStyle,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {backgroundColor: containerColor},
          containerStyle,
        ]}>
        <View style={UIStyles.flexRow}>
          <Text style={styles.title}>{title}</Text>
          <View
            style={[
              styles.statusWrapper,
              {backgroundColor: statusColorWrapper},
            ]}>
            <Text style={[styles.statusTitle, {color: statusColorLabel}]}>
              {status}
            </Text>
          </View>
        </View>
        {rating ? (
          <View style={styles.ratingWrapper}>
            <Rating containerStyle={{marginRight: 12}} rating={rating} />
            <Text style={styles.ratingTitle}>Ваша оценка</Text>
          </View>
        ) : null}

        <Text style={styles.address}>{address}</Text>
        <View style={styles.dateRow}>
          <Text style={styles.dateValue}>{date}</Text>
          <Text style={styles.priceValue}>{price} ₽</Text>
        </View>
      </TouchableOpacity>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIStyles.paddingH16,
    paddingVertical: 12,
  },
  title: {
    ...UIStyles.font18b,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
  statusWrapper: {
    backgroundColor: Color.SUCCESS,
    borderRadius: 40,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  statusTitle: {
    ...UIStyles.font15,
    color: Color.WHITE,
  },
  address: {
    marginTop: 12,
    ...UIStyles.font15,
    color: Color.GREY_800,
  },
  dateRow: {
    marginTop: 12,
    ...UIStyles.flexRow,
  },
  dateValue: {
    ...UIStyles.font15,
    color: Color.GREY_400,
  },
  priceValue: {
    ...UIStyles.font18b,
    color: Color.BLACK,
  },
  ratingWrapper: {
    flexDirection: 'row',
    marginTop: 12,
  },
  ratingTitle: {
    ...UIStyles.font15,
    color: Color.GREY_400,
  },
});
