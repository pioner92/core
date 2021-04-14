import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Config} from '../../../../../config';
import {CheckedIcon} from '../../../../../components/icons/checked-icon';
import {
  IOrganisationListItem,
  OrganisationListItem,
} from './organisation-list-item';

const {Color, UIStyles} = Config;

export const OrganisationListItemWithChecked: React.FC<IOrganisationListItem> = React.memo(
  ({title, onSelect, isSelected}) => {
    return (
      <TouchableOpacity onPress={onSelect} style={styles.container}>
        <OrganisationListItem
          title={title}
          isSelected={isSelected}
          onSelect={onSelect}
        />
        {isSelected ? <CheckedIcon fill={Color.PRIMARY} /> : null}
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    ...UIStyles.flexRow,
  },
  title: {
    ...UIStyles.font15,
    color: Color.DARK,
    paddingVertical: 13.5,
  },
});
