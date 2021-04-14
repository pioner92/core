import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const StartIcon: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={22} height={21} viewBox="0 0 22 21" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.165.81a.887.887 0 011.67 0l2.357 6.114 6.31.445c.81.057 1.138 1.113.516 1.655l-4.853 4.224 1.543 6.389c.198.82-.665 1.472-1.352 1.022L11 17.157l-5.356 3.502c-.687.45-1.55-.203-1.351-1.022l1.542-6.39L.982 9.025C.36 8.482.69 7.426 1.498 7.369l6.31-.445L10.165.81zm.835.63L8.713 7.371a.904.904 0 01-.775.586l-6.123.433 4.71 4.1c.265.23.38.599.296.948l-1.498 6.2 5.198-3.4a.87.87 0 01.958 0l5.198 3.4-1.497-6.2a.961.961 0 01.295-.949l4.71-4.099-6.123-.433a.904.904 0 01-.775-.586L11 1.44z"
        fill={fill}
      />
    </Svg>
  );
};
