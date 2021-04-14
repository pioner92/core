import {
  IScreenHeaderTitleWithIcon,
  ScreenHeaderTitleWithIcons,
} from './screen-header-title-with-icons';
import {ArrowLeftIcon} from '../icons/arrow-left-icon';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

export interface IScreenHeaderTitleWithBackButton
  extends IScreenHeaderTitleWithIcon {
  title: string;
}

export const ScreenHeaderTitleWithBackButton: React.FC<IScreenHeaderTitleWithBackButton> = ({
  title,
  ...rest
}) => {
  const {goBack} = useNavigation();

  return (
    <ScreenHeaderTitleWithIcons
      {...rest}
      onPressLeftIcon={goBack}
      IconLeft={ArrowLeftIcon}>
      {title}
    </ScreenHeaderTitleWithIcons>
  );
};
