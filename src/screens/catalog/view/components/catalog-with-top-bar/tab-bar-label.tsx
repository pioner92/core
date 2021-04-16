import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Config} from '../../../../../config';

const {Color} = Config;

interface ITabBarLabelProps {
  route: {key: string; title: string};
  focused: boolean;
}

export const TabBarLabel: React.FC<ITabBarLabelProps> = ({route, focused}) => {
  return (
    <View
      style={focused ? styles.labelWrapperActive : styles.labelWrapperInactive}>
      <Text
        style={[
          styles.label,
          focused ? styles.labelActive : styles.labelInactive,
        ]}>
        {route.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    lineHeight: 15,
    paddingHorizontal: 10,
    paddingVertical: 11.5,
  },
  labelActive: {
    color: Color.WHITE,
  },
  labelInactive: {
    color: Color.GREY_600,
  },
  labelWrapperActive: {
    backgroundColor: Color.SECONDARY,
    borderRadius: 48,
  },
  labelWrapperInactive: {
    backgroundColor: Color.WHITE,
  },
});
