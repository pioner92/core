import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const ArrowBottomWithoutLine: React.FC<SvgProps> = ({
  stroke = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={12} height={8} viewBox="0 0 12 8" fill="none" {...props}>
      <Path d="M11 1.5L6 6 1 1.5" stroke={stroke} strokeWidth={1.5} />
    </Svg>
  );
};
