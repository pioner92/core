import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IOrganisationListRenderItemProps} from './organisation-list';
import {OrganisationListItem} from './organisation-list-item';
import {CellPhoneIcon} from '../../../../../components/icons/cell-phone-icon';
import {Config} from '../../../../../config';

const {Color, UIStyles} = Config;

export const OrganisationListItemContact: React.FC<IOrganisationListRenderItemProps> = React.memo(
  ({data, onSelect, isSelected}) => {
    const onPressCall = () => {
      Linking.openURL(`tel:${data.phone}`);
    };

    return (
      <TouchableOpacity onPress={onSelect} style={styles.container}>
        <View>
          <OrganisationListItem
            containerStyle={{paddingBottom: 7.5}}
            title={data.title}
            onSelect={onSelect}
            isSelected={isSelected}
          />
          <Text style={styles.subTitle}>{data.worktime}</Text>
        </View>
        <TouchableOpacity
          onPress={onPressCall}
          style={styles.callButtonWrapper}>
          <CellPhoneIcon fill={Color.PRIMARY} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    ...UIStyles.flexRow,
    // paddingVertical:16,
    paddingBottom: 13.5,
  },
  subTitle: {
    color: Color.GREY_600,
  },
  callButtonWrapper: {
    backgroundColor: Color.BACKGROUND_COLOR,
    borderRadius: 8,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
