import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const MoreIcon: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={18} height={4} viewBox="0 0 18 4" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4a2 2 0 110-4 2 2 0 010 4zm7 0a2 2 0 110-4 2 2 0 010 4zm7 0a2 2 0 110-4 2 2 0 010 4zM1 2a1 1 0 112 0 1 1 0 01-2 0zm7 0a1 1 0 112 0 1 1 0 01-2 0zm8-1a1 1 0 100 2 1 1 0 000-2z"
        fill={fill}
      />
    </Svg>
  );
};
