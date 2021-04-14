import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const MinusIcon: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={14} height={4} viewBox="0 0 14 4" fill="none" {...props}>
      <Path d="M13.667.667v2.666H.333V.667h13.334z" fill={fill} />
    </Svg>
  );
};
