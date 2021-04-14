import * as React from 'react';
import Svg, {Mask, Path, SvgProps} from 'react-native-svg';
import {Config} from '../../config';

export const MapMarkerIcon: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={12} height={16} viewBox="0 0 12 16" fill="none" {...props}>
      <Mask id="a" fill="#fff">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 16s6-5.444 6-9.2C12 3.044 9.314 0 6 0S0 3.044 0 6.8 6 16 6 16zm0-8.067c.904 0 1.636-.76 1.636-1.7 0-.939-.732-1.7-1.636-1.7-.904 0-1.636.761-1.636 1.7 0 .94.732 1.7 1.636 1.7z"
        />
      </Mask>
      <Path
        d="M6 16l-.672.74.672.61.672-.61L6 16zm5-9.2c0 .696-.286 1.566-.817 2.546-.521.962-1.229 1.94-1.956 2.829a32.66 32.66 0 01-2.899 3.084L6 16l.672.74.002-.001a.258.258 0 01.004-.004l.015-.014a10.849 10.849 0 00.254-.238 34.644 34.644 0 002.826-3.04c.773-.943 1.565-2.03 2.169-3.145C12.536 9.2 13 7.982 13 6.8h-2zM6 1c2.647 0 5 2.475 5 5.8h2C13 2.613 9.98-1 6-1v2zM1 6.8C1 3.475 3.353 1 6 1v-2C2.02-1-1 2.613-1 6.8h2zM6 16a369.948 369.948 0 01.672-.74l-.002-.003a1.807 1.807 0 01-.057-.052 30.823 30.823 0 01-.84-.817 32.66 32.66 0 01-2-2.213c-.727-.889-1.435-1.867-1.956-2.83C1.287 8.367 1 7.496 1 6.8h-2c0 1.182.464 2.4 1.058 3.498.604 1.115 1.396 2.202 2.169 3.144a34.644 34.644 0 003.08 3.28l.015.013a.258.258 0 01.006.005L6 16zm.636-9.767c0 .423-.32.7-.636.7v2c1.492 0 2.636-1.245 2.636-2.7h-2zM6 5.533c.316 0 .636.277.636.7h2c0-1.455-1.144-2.7-2.636-2.7v2zm-.636.7c0-.423.32-.7.636-.7v-2c-1.492 0-2.636 1.245-2.636 2.7h2zm.636.7c-.316 0-.636-.277-.636-.7h-2c0 1.455 1.144 2.7 2.636 2.7v-2z"
        fill={fill}
        mask="url(#a)"
      />
    </Svg>
  );
};
