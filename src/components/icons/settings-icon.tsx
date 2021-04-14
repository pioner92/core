import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const SettingsIcon: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  stroke = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path stroke={stroke} d="M6.5 5.5H10.5V9.5H6.5z" />
      <Path stroke={stroke} d="M13.5 10.5H17.5V14.5H13.5z" />
      <Path stroke={stroke} d="M6.5 15.5H10.5V19.5H6.5z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 7H4v1h2V7zm7 0v1h7V7h-7zm7 5h-2v1h2v-1zM4 12h7v1H4v-1zm9 5h7v1h-7v-1zm-7 0H4v1h2v-1z"
        fill={fill}
      />
    </Svg>
  );
};
