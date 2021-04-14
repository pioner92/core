import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';


export const PlusIcon: React.FC<SvgProps> = ({fill = Config.Color.BLACK, ...props}) => {
  return (
    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0H4v4H0v2h4v4h2V6h4V4H6V0z"
        fill={fill}
      />
    </Svg>
  );
};
