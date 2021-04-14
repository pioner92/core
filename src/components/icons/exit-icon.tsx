import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ExitSvg: React.FC<SvgProps> = ({fill = '#000', ...props}) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 1a.5.5 0 010 1H2a1 1 0 00-1 1v10a1 1 0 001 1h5.5a.5.5 0 010 1H2a2 2 0 01-2-2V3a2 2 0 012-2h5.5zm7.854 6.646l-3.182-3.182a.5.5 0 10-.708.708L13.793 7.5H7.5a.5.5 0 000 1h6.293l-2.329 2.328a.5.5 0 10.708.708l3.182-3.182a.5.5 0 000-.708z"
        fill={fill}
      />
    </Svg>
  );
};
