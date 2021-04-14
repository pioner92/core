import React, {useState} from 'react';
import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';
import {ICategoryItem} from '../../../types/types';
import {CategoryListItem} from './category-list-item';

export interface ICategoryLisComponent {
  categories: ICategoryItem[];
  onSelect: (item: ICategoryItem) => void;
  containerStyle?: ViewStyle;
}

export const CategoryList: React.FC<ICategoryLisComponent> = ({
  categories,
  containerStyle,
  onSelect,
}) => {
  const [selectedItem, setSelectedItem] = useState('-1');

  const onSelectHandler = (item: ICategoryItem) => {
    setSelectedItem(item.id);
    onSelect(item);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        horizontal={true}
        data={categories}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 6}}
        renderItem={({item}) => (
          <CategoryListItem
            isSelected={item.id === selectedItem}
            title={item.title}
            onPress={() => onSelectHandler(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});
