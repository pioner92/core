import {ScreenHeader} from './screen-header';
import {HeaderTitle} from './header-title';
import React from 'react';

interface IScreeHeaderTitleLeft {
  title: string;
}

export const ScreeHeaderTitleLeft: React.FC<IScreeHeaderTitleLeft> = React.memo(
  ({title}) => {
    return (
      <ScreenHeader>
        <HeaderTitle>{title}</HeaderTitle>
      </ScreenHeader>
    );
  },
);
