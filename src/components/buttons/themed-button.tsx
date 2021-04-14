import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  BUTTON_RADIUS,
  DEFAULT_BUTTON_THEME,
  themeNames,
} from '../../assets/styles';
import {style} from '../../system/helpers/styles';
import {Theme} from '../../assets/theme';
import {Config} from '../../config';

const {Color, UIStyles} = Config;

export interface IThemedButton {
  label: string;
  onPress: () => void;
  labelStyle?: TextStyle;
  modifier?: 'bordered' | 'default';
  style?: ViewStyle;
  theme?: keyof typeof themeNames;
  disabled?: boolean;
  rounded?: boolean;
  wrapperStyle?: ViewStyle;
}

export const ThemedButton: React.FC<IThemedButton> = ({
  label,
  labelStyle,
  theme = DEFAULT_BUTTON_THEME,
  style,
  disabled = false,
  rounded = false,
  modifier = 'default',
  onPress,
  wrapperStyle,
}) => {
  const themeStyles = Theme[theme];

  const isBordered = modifier === 'bordered';

  const buttonStyle: ViewStyle = {
    backgroundColor: !isBordered
      ? disabled
        ? themeStyles.disabled
        : themeStyles.normal
      : 'transparent',
    borderRadius: rounded ? BUTTON_RADIUS : 0,
    borderColor: isBordered
      ? disabled
        ? themeStyles.disabled
        : themeStyles.normal
      : 'transparent',
    borderWidth: isBordered ? 1 : 0,
    ...style,
  };

  const textStyle = {
    color: isBordered ? themeStyles.normal : themeStyles.text,
    ...labelStyle,
  };

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.container, buttonStyle]}>
        <Text style={[styles.text, textStyle]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: style.view({
    height: 40,
    width: '100%',
    marginTop: 'auto',
    borderRadius: BUTTON_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  wrapper: {
    marginTop: 'auto',
    width: '100%',
  },
  text: style.text({
    ...UIStyles.font14b,
    textTransform: 'uppercase',
    color: Color.WHITE,
  }),
});
