import React, {useState} from 'react';
import {FlatList, ViewStyle} from 'react-native';
import {IAddressItemResponse} from '../../../api/types';
import {OrganisationListItemWithChecked} from './organisation-list-item-with-checked';
import {Divider} from '../../../../../components/divider';

interface IAddressListWithCheckedItem {
  items: IAddressItemResponse[];
  contentContainerStyle?: ViewStyle;
}

export const AddressListWithCheckedItem: React.FC<IAddressListWithCheckedItem> = ({
  items,
  contentContainerStyle,
}) => {
  const [selectedItem, setSelectedItem] = useState(-1);

  const createTitle = (item: IAddressItemResponse) => {
    return `${item.city}  ${item.street}  ${item.house_num}  ${item.flat_num}`;
  };

  return (
    <FlatList
      data={items}
      contentContainerStyle={[{height: '100%', paddingTop: 12}, contentContainerStyle]}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={Divider}
      renderItem={({item}) => (
        <OrganisationListItemWithChecked
          title={createTitle(item)}
          isSelected={selectedItem === item.id}
          onSelect={() => setSelectedItem(item.id)}
        />
      )}
    />
  );
};
