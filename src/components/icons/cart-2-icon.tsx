import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const Cart2Icon: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={22} height={18} viewBox="0 0 22 18" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.01.146a.5.5 0 00-.707 0L4.925 4.525a.499.499 0 00-.105.154H1.98a1 1 0 00-.988 1.157L2.76 16.95a1 1 0 00.987.843h14.057a1 1 0 00.98-.804l2.223-11.114a1 1 0 00-.98-1.196h-3.484a.5.5 0 00-.105-.154L12.061.146a.5.5 0 10-.707.708l3.825 3.825H6.185L10.01.854a.5.5 0 000-.708zm7.795 16.647l2.222-11.114H1.98l1.77 11.114h14.056zM6.5 8a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zm3 0a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zm2.5.5a.5.5 0 011 0v6a.5.5 0 01-1 0v-6zm3.5-.5a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z"
        fill={fill}
        // fillOpacity={0.4}
      />
    </Svg>
  );
};
