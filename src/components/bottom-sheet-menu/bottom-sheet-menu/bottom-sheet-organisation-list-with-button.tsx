import {ThemedButton} from '../../buttons/themed-button';
import React from 'react';
import {
  BottomSheetOrganisationList,
  IBottomSheetMenuOrganisationList,
} from './bottom-sheet-organisation-list';
import {OrganisationListItemWithChecked} from '../../../screens/delivery/view/components/organisation-list/organisation-list-item-with-checked';
import {Config} from '../../../config';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';

type props = Omit<IBottomSheetMenuOrganisationList, 'RenderItem'>;

interface BottomSheetOrganisationListWithButton extends props {
  onPressButton: () => void;
}

export const BottomSheetOrganisationListWithButton: React.FC<BottomSheetOrganisationListWithButton> = ({
  data,
  onSelectItem,
                                                                                                         onPressButton,
}) => {

  return (
    <BottomSheetOrganisationList
      contentStyle={{height: '100%'}}
      RenderItem={props => (
        <OrganisationListItemWithChecked title={props.data.title} {...props} />
      )}
      onSelectItem={onSelectItem}
      data={data}
      BottomComponent={() => {
        return (
          <ThemedButton
            wrapperStyle={{
              marginTop: 'auto',
              paddingHorizontal: 16,
              paddingTop: 5,
              backgroundColor: Config.Color.WHITE,
            }}
            rounded={true}
            label={'Выбрать ресторан'}
            onPress={onPressButton}
          />
        );
      }}
    />
  );
};
