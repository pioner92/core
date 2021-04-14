import {BottomSheetMenu} from './bottom-sheet-menu';
import {View} from 'react-native';
import {OrganisationList} from '../../../screens/delivery/view/components/organisation-list/organisation-list';
import React from 'react';
import {OrganisationListItemContact} from '../../../screens/delivery/view/components/organisation-list/organisation-list-item-contact';
import {IBottomSheetMenuOrganisationList} from './bottom-sheet-organisation-list';

type props = Omit<IBottomSheetMenuOrganisationList, 'RenderItem'>;

interface IBottomSheetMenuContactList extends props {}

export const BottomSheetContactList: React.FC<IBottomSheetMenuContactList> = React.memo(
  ({data, onSelectItem}) => {
    return (
      <BottomSheetMenu>
        <View>
          <OrganisationList
            RenderItem={OrganisationListItemContact}
            onSelectItem={onSelectItem}
            data={data}
          />
        </View>
      </BottomSheetMenu>
    );
  },
);
