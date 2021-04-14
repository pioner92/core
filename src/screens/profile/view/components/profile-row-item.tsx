import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArrowRightWithoutLineIcon} from '../../../../components/icons/arrow-right-without-line-icon';
import {Color, UIStyles} from '../../../../assets/styles';
import {Divider} from '../../../../components/divider';

interface IProfileRowItem {
  Icon: React.FC;
  title: string;
  onPress: () => void;
}

export const ProfileRowItem: React.FC<IProfileRowItem> = ({
  Icon,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconWithTitleWrapper}>
        <View style={[styles.iconWrapper]}>
          <Icon />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <ArrowRightWithoutLineIcon />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIStyles.flexRow,
    paddingVertical: 9,
  },
  iconWithTitleWrapper: {
    ...UIStyles.flexRow,
  },
  iconWrapper: {
    padding: 8,
  },
  title: {
    ...UIStyles.font15,
    color: Color.BLACK,
    marginLeft: 24,
  },
});
