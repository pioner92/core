import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ArrowRightWithoutLineIcon: React.FC<SvgProps> = ({
  stroke = '#000',
  ...props
}) => {
  return (
    <Svg width={7} height={12} viewBox="0 0 7 12" fill="none" {...props}>
      <Path
        d="M1.5.792L6 6 1.5 11.21"
        stroke={stroke}
        strokeOpacity={0.4}
        strokeWidth={1.5}
      />
    </Svg>
  );
};
