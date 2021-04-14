import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';
const {Color} = Config;

export const CellPhoneIcon: React.FC<SvgProps> = ({
  fill = Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.389 5.201A1.29 1.29 0 005.7 3.9v-.002a8.332 8.332 0 01-.418-2.617C5.283.575 4.71 0 4.002 0h-2.72C.574 0 0 .575 0 1.281 0 8.846 6.154 15 13.719 15c.706 0 1.281-.575 1.281-1.281v-2.713c0-.707-.575-1.282-1.281-1.282-.898 0-1.778-.14-2.612-.416-.45-.153-.963-.037-1.265.266L8.229 10.79C6.36 9.785 5.2 8.625 4.208 6.771l1.18-1.57z"
        fill={fill}
      />
    </Svg>
  );
};
