import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Config} from '../../config';
import {PlusIcon} from '../icons/plus-icon';
import {MinusIcon} from '../icons/minus-icon';
import {SvgProps} from 'react-native-svg';

const {Color, UIStyles} = Config;

export interface ICounter {
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  buttonIconStyle?: SvgProps;
  valueStyle?: TextStyle;
  value: number;
  onChange: (value: number) => void;
}

export const Counter: React.FC<ICounter> = ({
  containerStyle,
  buttonStyle,
  buttonIconStyle,
  valueStyle,
  value = 0,
  onChange,
}) => {
  const styleButton = StyleSheet.flatten([styles.button, buttonStyle]);
  const styleButtonIcon = StyleSheet.flatten([
    {fill: Color.WHITE},
    buttonIconStyle,
  ]);

  const onPressPlusHandler = () => {
    onChange(value + 1);
  };
  const onPressMinusHandler = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onPressMinusHandler} style={styleButton}>
        <MinusIcon {...styleButtonIcon} />
      </TouchableOpacity>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
      <TouchableOpacity onPress={onPressPlusHandler} style={styleButton}>
        <PlusIcon {...styleButtonIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: Color.PRIMARY,
    borderRadius: 88,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  value: {
    ...UIStyles.font15b,
    color: Color.WHITE,
  },
  button: {
    borderRadius: 88,
    height: '100%',
    paddingHorizontal: 43,
    backgroundColor: Color.RGBA_100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: Color.WHITE,
    fontSize: 25,
  },
});
