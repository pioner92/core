import * as React from 'react';
import {Routes} from '../../navigation/routes';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const rootNavigate = (name: keyof typeof Routes, params?: any) => {
  navigationRef.current?.navigate(name, params);
};
