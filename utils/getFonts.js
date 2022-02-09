import React from 'react';

import allFonts from './allFonts';

const getFonts = (fonts) =>
  fonts.map((font) => (
    <link
      key={font?.name}
      rel="prefetch"
      href={`/static/assets/fonts/${font.name}.${font.type}`}
      as="font"
      crossOrigin="anonymous"
    />
  ));

const getFontFaces = (fonts) =>
  fonts
    .map(
      (font) => `@font-face {
    font-family: ${font.name};
    font-display: swap;
    src: url('/static/assets/fonts/${font.name}.${font.type}') format('${font.type}');
  }`,
    )
    .join('\n');

// Create component with all <link> for all fonts
export const FontLinks = () => getFonts(allFonts);

// Create all font faces in one single string
export const getFontFacesStr = getFontFaces(allFonts);
