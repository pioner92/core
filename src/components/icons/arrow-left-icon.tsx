import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ArrowLeftIcon: React.FC<SvgProps> = ({fill = '#000', ...props}) => {
  return (
    <Svg width={17} height={16} viewBox="0 0 17 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.181 0c.175 0 .339.074.466.202l.242.243a.66.66 0 01.2.466.66.66 0 01-.2.467L3.146 7.149h12.417c.183 0 .345.09.457.202a.66.66 0 01.2.458v.347c0 .39-.328.66-.657.66H3.143l5.746 5.806a.66.66 0 01.2.467.66.66 0 01-.2.466l-.242.243a.656.656 0 01-.466.202.656.656 0 01-.465-.202L.42 8.466A.66.66 0 01.22 8a.66.66 0 01.2-.466L7.716.202A.656.656 0 018.18 0z"
        fill={fill}
      />
    </Svg>
  );
};
