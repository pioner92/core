import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const InfoInCircleTransparentIcon: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 27.333c7.364 0 13.333-5.97 13.333-13.333C27.333 6.636 21.363.667 14 .667 6.636.667.667 6.636.667 14S6.637 27.333 14 27.333zm1.25-17.915a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-2.083 11.248v-8.333h1.666v8.333h-1.666z"
        fill={fill}
      />
    </Svg>
  );
};
