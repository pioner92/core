import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';
const {Color} = Config;

export const ArrowNavigate: React.FC<SvgProps> = ({
  fill = Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
      <Path
        d="M28.5 7.5l-8.303 24L16.102 20 4.5 15.245l24-7.746z"
        fill={fill}
      />
    </Svg>
  );
};
