import React, {useState} from 'react';
import {FlatList, ViewStyle} from 'react-native';
import {IAddressItemResponse} from '../../../api/types';
import {OrganisationListItemWithChecked} from './organisation-list-item-with-checked';
import {Divider} from '../../../../../components/divider';

interface IAddressListWithCheckedItem {
  items: IAddressItemResponse[];
  contentContainerStyle?: ViewStyle;
  onSelect: (item: IAddressItemResponse) => void;
}

export const AddressListWithCheckedItem: React.FC<IAddressListWithCheckedItem> = ({
  items,
  contentContainerStyle,
  onSelect,
}) => {
  const [selectedItem, setSelectedItem] = useState(-1);

  const onSelectHandler = (item: IAddressItemResponse) => {
    setSelectedItem(item.id);
    onSelect(item);
  };

  const createTitle = (item: IAddressItemResponse) => {
    return `${item.city}  ${item.street}  ${item.house_num}  ${item.flat_num}`;
  };

  return (
    <FlatList
      data={items}
      contentContainerStyle={[
        {height: '100%', paddingTop: 12},
        contentContainerStyle,
      ]}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={Divider}
      renderItem={({item}) => (
        <OrganisationListItemWithChecked
          title={createTitle(item)}
          isSelected={selectedItem === item.id}
          onSelect={() => onSelectHandler(item)}
        />
      )}
    />
  );
};
