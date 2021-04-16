import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const StartFilledIcon: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  width = 14,
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={width}
      viewBox="0 0 14 14"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.443 1.159a.6.6 0 011.114 0l1.57 3.912 4.207.285a.6.6 0 01.345 1.06l-3.236 2.703 1.029 4.088a.6.6 0 01-.901.655L7 11.62l-3.57 2.242a.6.6 0 01-.902-.655L3.557 9.12.32 6.415a.6.6 0 01.345-1.059l4.206-.285L6.443 1.16z"
        fill={fill}
      />
    </Svg>
  );
};
