import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

import { Path, G } from 'react-native-svg';

export const InfoOutlineIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <G>
      <Path d="M11.9442 8.24C12.5628 8.24 13.0642 7.73856 13.0642 7.12C13.0642 6.50144 12.5628 6 11.9442 6C11.3257 6 10.8242 6.50144 10.8242 7.12C10.8242 7.73856 11.3257 8.24 11.9442 8.24Z" />
      <Path d="M14.4008 15.9996H12.8008V9.59961H10.4008C10.1886 9.59961 9.98513 9.68389 9.8351 9.83392C9.68507 9.98395 9.60078 10.1874 9.60078 10.3996C9.60078 10.6118 9.68507 10.8153 9.8351 10.9653C9.98513 11.1153 10.1886 11.1996 10.4008 11.1996H11.2008V15.9996H9.60078C9.38861 15.9996 9.18513 16.0839 9.0351 16.2339C8.88507 16.384 8.80078 16.5874 8.80078 16.7996C8.80078 17.0118 8.88507 17.2153 9.0351 17.3653C9.18513 17.5153 9.38861 17.5996 9.60078 17.5996H14.4008C14.613 17.5996 14.8164 17.5153 14.9665 17.3653C15.1165 17.2153 15.2008 17.0118 15.2008 16.7996C15.2008 16.5874 15.1165 16.384 14.9665 16.2339C14.8164 16.0839 14.613 15.9996 14.4008 15.9996Z" />
      <Path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 9.34783 20.9464 6.80429 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM12 20.3333C10.3518 20.3333 8.74066 19.8446 7.37025 18.9289C5.99984 18.0132 4.93174 16.7117 4.30101 15.189C3.67028 13.6663 3.50525 11.9908 3.82679 10.3742C4.14834 8.75774 4.94201 7.27288 6.10745 6.10744C7.27288 4.942 8.75774 4.14833 10.3743 3.82679C11.9908 3.50525 13.6663 3.67027 15.189 4.301C16.7117 4.93173 18.0132 5.99984 18.9289 7.37025C19.8446 8.74066 20.3333 10.3518 20.3333 12C20.3333 13.0943 20.1178 14.178 19.699 15.189C19.2802 16.2001 18.6664 17.1187 17.8926 17.8926C17.1187 18.6664 16.2001 19.2802 15.189 19.699C14.178 20.1178 13.0944 20.3333 12 20.3333Z" />
    </G>
  ),
});

InfoOutlineIcon.displayName = 'InfoOutlineIcon';
export const InfoIcon = createIcon({
  Root,
  viewBox: '0 0 22 21',
  d: 'M11 -0.000976562C16.5237 -0.000976562 21.0015 4.47687 21.0015 10.0006C21.0015 15.5243 16.5237 20.0021 11 20.0021C5.47626 20.0021 0.998413 15.5243 0.998413 10.0006C0.998413 4.47687 5.47626 -0.000976562 11 -0.000976562ZM10.9962 8.24961C10.4833 8.24994 10.0609 8.63626 10.0035 9.13363L9.99681 9.25026L10.0004 14.7519L10.0072 14.8685C10.0653 15.3658 10.4882 15.7515 11.0011 15.7512C11.5139 15.7509 11.9363 15.3645 11.9938 14.8672L12.0004 14.7505L11.9968 9.24895L11.99 9.13233C11.9319 8.63503 11.509 8.24927 10.9962 8.24961ZM11.0004 4.50006C10.3092 4.50006 9.74889 5.06038 9.74889 5.75158C9.74889 6.44277 10.3092 7.0031 11.0004 7.0031C11.6916 7.0031 12.2519 6.44277 12.2519 5.75158C12.2519 5.06038 11.6916 4.50006 11.0004 4.50006Z',
});

InfoIcon.displayName = 'InfoIcon';
