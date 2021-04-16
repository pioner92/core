import * as React from 'react';
import Svg, {Rect, Path, Circle, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const ImageIcon: React.FC<SvgProps> = ({
  stroke = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Rect x={2.5} y={5.5} width={19} height={13} rx={2.5} stroke={stroke} />
      <Path d="M21.5 16.5L17 13l-3 3-6.5-6.5-5 5" stroke={stroke} />
      <Circle cx={17} cy={9} r={1.5} stroke={stroke} />
    </Svg>
  );
};
