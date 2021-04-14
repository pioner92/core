import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';
const {Color} = Config;

export const CheckedIcon: React.FC<SvgProps> = ({
  fill = Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={16} height={13} viewBox="0 0 16 13" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.54 9.88L13.898.208l1.486 1.394L5.74 12.764 0 7.955l1.28-1.6L5.54 9.88z"
        fill={fill}
      />
    </Svg>
  );
};
