import React, {useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {Config} from '../../config';
import {ArrowBottomWithoutLine} from '../icons/arrow-bottom-without-line-icon';
import {ICityItem} from '../../screens/delivery/types/types';

const {Color, UIStyles} = Config;

export interface ISelect {
  wrapperStyle?: ViewStyle;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  items: ICityItem[];
  onSelect: (item: string) => void;
}

export const Select: React.FC<ISelect> = ({
  wrapperStyle,
  labelStyle,
  containerStyle,
  onSelect,
  items,
}) => {
  const [value, setValue] = useState(items?.[0]?.title);
  const onSelectHandler = (item: string) => {
    setValue(item);
    onSelect(item);
  };

  const cities: Item[] = items.map(el => ({
    label: el.title,
    value: el.title,
    key: el.id,
  }));

  return (
    <View style={[wrapperStyle]}>
      <RNPickerSelect onValueChange={onSelectHandler} items={cities}>
        <View style={[styles.container, containerStyle]}>
          <Text style={[styles.label, labelStyle]}>{value}</Text>
          <ArrowBottomWithoutLine />
        </View>
      </RNPickerSelect>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Color.GREY_100,
    padding: 16,
    borderRadius: 8,
  },
  label: {
    ...UIStyles.font15,
    color: Color.BLACK,
  },
});
