import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {IOrganisation} from '../../../types/types';
import {Divider} from '../../../../../components/divider';
import {Config} from '../../../../../config';
import {IOrganisationListItem} from './organisation-list-item';

const {Color, UIStyles} = Config;

type propsFromListItem = Omit<IOrganisationListItem, 'title'>;

export interface IOrganisationListRenderItemProps extends propsFromListItem {
  data: IOrganisation;
}

export interface IOrganisationListProps {
  data: IOrganisation[];
  onSelectItem: (item: IOrganisation) => void;
  RenderItem: React.FC<IOrganisationListRenderItemProps>;
}

export const OrganisationList: React.FC<IOrganisationListProps> = React.memo(
  ({data, onSelectItem, RenderItem}) => {
    const [selectedItem, setSelectedItem] = useState(-1);

    const onSelectHandler = (item: IOrganisation) => {
      setSelectedItem(item.id);
      onSelectItem(item);
    };

    return (
      <View>
        <FlatList
          data={data}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={Divider}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <RenderItem
              data={item}
              isSelected={item.id === selectedItem}
              onSelect={() => onSelectHandler(item)}
            />
          )}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    ...UIStyles.paddingH16,
    paddingBottom: 50,
  },
});
