import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const RubleWithCircleArrowIcon: React.FC<SvgProps> = ({
  fill = '#000',
  ...props
}) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5H1.67a7.005 7.005 0 11-.635 3.752l-.989.106A8 8 0 101 4.127V1H0v5h5V5zm2.332 5.92h1.963v-.926H7.332v-.803h2.045c.945-.004 1.674-.23 2.185-.68.516-.452.774-1.095.774-1.927 0-.793-.268-1.422-.803-1.887C10.998 4.232 10.273 4 9.36 4H6.213v4.271H5v.92h1.213v.803H5v.926h1.213v1.611h1.119V10.92zM9.359 8.27H7.332V4.926h2.063c.558.004 1.002.16 1.33.469.328.304.492.705.492 1.2 0 .548-.158.964-.475 1.249-.316.285-.777.427-1.383.427z"
        fill={fill}
      />
    </Svg>
  );
};
