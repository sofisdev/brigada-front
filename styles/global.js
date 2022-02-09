// eslint-disable-next-line import/no-extraneous-dependencies
import { css, Global } from '@emotion/react';
import React from 'react';

import { getFontFacesStr } from '../utils/getFonts';

const defaultFonts = css`
  ${getFontFacesStr}
`;

const GlobalComponent = () => <Global styles={defaultFonts} />;

export default GlobalComponent;
