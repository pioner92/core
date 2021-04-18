import {ThemedButton} from '../../buttons/themed-button';
import React from 'react';
import {BottomSheetOrganisationList, IBottomSheetMenuOrganisationList} from './bottom-sheet-organisation-list';
import {OrganisationListItemWithChecked} from '../../../screens/delivery/view/components/organisation-list/organisation-list-item-with-checked';
import {Config} from '../../../config';
import {ActivityIndicator} from 'react-native';

const {Color} = Config;

type props = Omit<IBottomSheetMenuOrganisationList, 'RenderItem'>;

interface BottomSheetOrganisationListWithButton extends props {
  onPressButton: () => void;
  isLoading: boolean;
}

export const BottomSheetOrganisationListWithButton: React.FC<BottomSheetOrganisationListWithButton> = ({
  data,
  onSelectItem,
  onPressButton,
  isLoading,
}) => {
  return (
    <BottomSheetOrganisationList
      contentStyle={{height: '100%'}}
      HeaderComponent={() =>
        isLoading ? (
          <ActivityIndicator size={'large'} color={Color.PRIMARY} />
        ) : null
      }
      RenderItem={props =>
        !isLoading ? (
          <OrganisationListItemWithChecked
            title={props.data.title}
            {...props}
          />
        ) : null
      }
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
