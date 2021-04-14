import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Config} from '../../../../../config';

const {Color, UIStyles} = Config;

export interface ICategoryListItemComponent {
  title: string;
  onPress: () => void;
  isSelected: boolean;
  labelStyle?: TextStyle;
  buttonStyle?: ViewStyle;
}

export const CategoryListItem: React.FC<ICategoryListItemComponent> = ({
  title,
  onPress,
  isSelected,
  buttonStyle,
  labelStyle,
}) => {
  const titleStyle = {
    ...UIStyles.font15,
    color: isSelected ? Color.WHITE : Color.GREY_600,
    fontWeight: isSelected ? 'bold' : 'normal',
    ...labelStyle,
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: isSelected ? Color.SECONDARY : 'transparent'},
        buttonStyle,
      ]}
      onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 11.5,
    borderRadius: 48,
  },
  title: {},
});
