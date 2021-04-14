import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const InfoInCircleIcon: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 8A7 7 0 111 8a7 7 0 0114 0zm1 0A8 8 0 110 8a8 8 0 0116 0zM8.75 5.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8.5 7v5h-1V7h1z"
        fill={fill}
      />
    </Svg>
  );
};
