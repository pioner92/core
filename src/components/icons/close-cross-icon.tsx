import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Color} from '../../assets/styles';

export const CloseCrossIcon: React.FC<SvgProps> = ({
  fill = Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <Path
        d="M12.948 0l1.414 1.414L1.634 14.142.22 12.728 12.948 0z"
        fill={fill}
      />
      <Path
        d="M14.362 12.728l-1.414 1.414L.22 1.414 1.634 0l12.728 12.728z"
        fill={fill}
      />
    </Svg>
  );
};
