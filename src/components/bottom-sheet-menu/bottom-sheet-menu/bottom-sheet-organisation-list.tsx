import {BottomSheetMenu} from './bottom-sheet-menu';
import {View, ViewStyle} from 'react-native';
import {
  IOrganisationListProps,
  OrganisationList,
} from '../../../screens/delivery/view/components/organisation-list/organisation-list';
import React from 'react';

export interface IBottomSheetMenuOrganisationList
  extends IOrganisationListProps {
  BottomComponent?: React.FC<any>;
  HeaderComponent?: React.FC<any>;
  contentStyle?: ViewStyle;
}

export const BottomSheetOrganisationList: React.FC<IBottomSheetMenuOrganisationList> = React.memo(
  ({
    data,
    RenderItem,
    onSelectItem,
    HeaderComponent,
    BottomComponent,
    contentStyle,
  }) => {
    return (
      <BottomSheetMenu>
        <View style={[contentStyle]}>
          {HeaderComponent ? <HeaderComponent /> : null}
          <OrganisationList
            RenderItem={RenderItem}
            onSelectItem={onSelectItem}
            data={data}
          />
          {BottomComponent ? <BottomComponent /> : null}
        </View>
      </BottomSheetMenu>
    );
  },
);
