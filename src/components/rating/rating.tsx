import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {StartIcon} from '../icons/start-icon';
import {Config} from '../../config';
import {StartFilledIcon} from '../icons/start-filled-icon';
import {SvgProps} from 'react-native-svg';
const {Color, UIStyles} = Config;

const startCount: Array<number> = Array(5).fill(1);

interface IRatingComponent {
  rating: number;
  iconStyle?: SvgProps;
  containerStyle?: ViewStyle;
  onPress?: (index: number) => void;
  isTouchable?: boolean;
}

export const Rating: React.FC<IRatingComponent> = ({
  rating = 0,
  iconStyle,
  containerStyle,
  isTouchable = false,
  onPress,
}) => {
  const [ratingValue, setRatingValue] = useState(rating);

  const getIcon = (flag: boolean) => {
    return flag ? StartFilledIcon : StartIcon;
  };

  const onPressHandler = (value: number) => {
    setRatingValue(value);
    onPress && onPress(value);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {startCount.map((el, index) => {
        const Icon = getIcon(index < ratingValue);
        return (
          <TouchableOpacity
            key={index}
            disabled={!isTouchable}
            onPress={() => onPressHandler(index + 1)}>
            <Icon fill={Color.PRIMARY} width={20} {...iconStyle} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
