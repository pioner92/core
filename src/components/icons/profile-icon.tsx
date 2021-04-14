import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const ProfileIcon: React.FC<SvgProps> = ({fill = Config.Color.BLACK, ...props}) => {
  return (
    <Svg width={16} height={15} viewBox="0 0 16 15" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 9a4 4 0 100-8 4 4 0 000 8zm8 5s-1-3-8-3-8 3-8 3v1h16v-1zm-1.167 0H1.167c.15-.18.39-.42.763-.668C2.848 12.72 4.64 12 8 12c3.36 0 5.152.72 6.07 1.332.374.249.614.487.763.668zM13 5A5 5 0 113 5a5 5 0 0110 0z"
        fill={fill}
      />
    </Svg>
  );
};
