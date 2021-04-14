import {IScreenHeader, ScreenHeader} from './screen-header';
import React from 'react';
import {HeaderTitle, IHeaderTitle} from './header-title';

interface IScreenHeaderTitle extends IScreenHeader, IHeaderTitle {}

export const ScreenHeaderWithTitle: React.FC<IScreenHeaderTitle> = ({
  children,
  style,
  titleStyle,
}) => {
  return (
    <ScreenHeader {...style}>
      <HeaderTitle titleStyle={titleStyle}>{children}</HeaderTitle>
    </ScreenHeader>
  );
};
