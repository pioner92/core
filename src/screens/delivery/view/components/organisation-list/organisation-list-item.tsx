import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Config} from '../../../../../config';

const {UIStyles, Color} = Config;

export interface IOrganisationListItem {
  title: string;
  onSelect: () => void;
  isSelected: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const OrganisationListItem: React.FC<IOrganisationListItem> = React.memo(
  ({title, onSelect, isSelected, containerStyle, textStyle}) => {
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={onSelect}>
        <Text
          style={[
            styles.title,
            {fontWeight: isSelected ? 'bold' : 'normal'},
            textStyle,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13.5,
  },
  title: {
    ...UIStyles.font15,
    color: Color.DARK,
  },
});
