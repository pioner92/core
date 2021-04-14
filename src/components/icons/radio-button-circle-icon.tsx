import * as React from 'react';
import Svg, {Circle, SvgProps} from 'react-native-svg';
import {Config} from '../../config';


export const RadioButtonCircleIcon: React.FC<SvgProps> = ({ stroke = Config.Color.BLACK ,...props }) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Circle cx={10} cy={10} r={9} stroke={stroke} strokeWidth={2} />
    </Svg>
  );
};
