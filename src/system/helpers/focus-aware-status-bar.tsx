import {StatusBar, StatusBarProps} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import React from 'react';

export const FocusAwareStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};
