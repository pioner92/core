import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const SearchIcon: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.188 6.812a5.923 5.923 0 11-8.376 8.376 5.923 5.923 0 018.376-8.376zm1.417 8.383A7.002 7.002 0 006.05 6.05a7 7 0 009.144 10.555.974.974 0 00.049.052l2.828 2.828a1 1 0 001.414-1.414l-2.828-2.828a.974.974 0 00-.052-.049z"
        fill={fill}
      />
    </Svg>
  );
};
