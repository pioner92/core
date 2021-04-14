import React from 'react';
import {ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import {BannerListItem} from './banner-list-item';
import {UIStyles} from '../../assets/styles';
import {IBannerItem} from '../../screens/catalog/types/types';

export interface IBannerList {
  items: Array<IBannerItem>;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  onPress: (item: IBannerItem) => void;
}

export const BannerList: React.FC<IBannerList> = ({
  items,
  style,
  onPress,
  containerStyle,
}) => {
  return (
    <View>
      <ScrollView
        style={[styles.container, style]}
        horizontal={true}
        contentContainerStyle={[styles.containerContent, containerStyle]}
        showsHorizontalScrollIndicator={false}>
        {items.map(el => {
          return (
            <BannerListItem onPress={() => onPress(el)} key={el.id} item={el} />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerContent: {
    ...UIStyles.paddingH16,
    paddingTop: 16,
  },
});
