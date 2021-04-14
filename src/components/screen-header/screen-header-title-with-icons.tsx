import React from 'react';
import {IScreenHeader, ScreenHeader} from './screen-header';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {HeaderTitle, IHeaderTitle} from './header-title';
import {UIStyles} from '../../assets/styles';

export interface IScreenHeaderTitleWithIcon
  extends IHeaderTitle,
    IScreenHeader {
  IconLeft?: React.FC;
  IconRight?: React.FC;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
  titleWrapperStyle?: ViewStyle;
}

export const ScreenHeaderTitleWithIcons: React.FC<IScreenHeaderTitleWithIcon> = ({
  children,
  style,
  titleStyle,
  IconLeft,
  IconRight,
  onPressLeftIcon,
  onPressRightIcon,
  titleWrapperStyle,
}) => {
  return (
    <ScreenHeader style={StyleSheet.flatten([style, styles.container])}>
      <View style={UIStyles.flex}>
        {IconLeft && (
          <TouchableOpacity onPress={onPressLeftIcon}>
            <IconLeft />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.titleWrapper, titleWrapperStyle]}>
        <HeaderTitle titleStyle={titleStyle}>{children}</HeaderTitle>
      </View>
      <View style={UIStyles.flex}>
        {IconRight && (
          <TouchableOpacity onPress={onPressRightIcon}>
            <IconRight />
          </TouchableOpacity>
        )}
      </View>
    </ScreenHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 5,
    alignItems: 'flex-start',
  },
});
