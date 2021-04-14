import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Config} from '../../../config';

export const SortingArrowBottom: React.FC<SvgProps> = ({
  fill = Config.Color.BLACK,
  ...props
}) => {
  return (
    <Svg width={23} height={21} viewBox="0 0 23 21" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.151.865H10.24v10.134H7.75v1.217h2.489v1.54H7.75v1.216h2.489v5.164h1.172v-5.164h4.978v-1.217H11.41v-1.54h4.83c1.879-.017 3.364-.499 4.42-1.482 1.068-.987 1.589-2.378 1.589-4.135 0-1.775-.534-3.19-1.625-4.21C19.545 1.36 18.042.864 16.15.864zm-4.74 10.134V2.082h4.74c1.594 0 2.796.414 3.64 1.208l.002.001c.85.783 1.285 1.882 1.285 3.334 0 1.397-.434 2.457-1.282 3.215-.845.762-2.049 1.16-3.645 1.16h-4.74zm-8.083 9.244L.146 16.93a.536.536 0 010-.737.486.486 0 01.708 0l2.328 2.426V1.125h1v17.493l2.328-2.426a.486.486 0 01.708 0 .536.536 0 010 .737l-3.182 3.314a.486.486 0 01-.708 0z"
        fill={fill}
      />
    </Svg>
  );
};
