import UnivaProRegularWoff from './UniviaPro-Regular.woff';
import UnivaProRegularItalicWoff from './UniviaPro-Italic.woff';

import UnivaProThinWoff from './UniviaPro-Thin.woff';
import UnivaProThinItalicWoff from './UniviaPro-ThinItalic.woff';

import UnivaProUltraLightWoff from './UniviaPro-UltraLight.woff';
import UnivaProUltraLightItalicWoff from './UniviaPro-UltraLightItalic.woff';

import UnivaProLightWoff from './UniviaPro-Light.woff';
import UnivaProLightItalicWoff from './UniviaPro-LightItalic.woff';

import UnivaProMediumWoff from './UniviaPro-Medium.woff';
import UnivaProMediumItalicWoff from './UniviaPro-MediumItalic.woff';

import UnivaProBoldWoff from './UniviaPro-Bold.woff';
import UnivaProBoldItalicWoff from './UniviaPro-BoldItalic.woff';

export default [
  {
    // regular
    fontFamily: 'Univia Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `
    local('Univia Pro Regular'),
    url(${UnivaProRegularWoff}) format('woff')
  `,
  },
  {
    // regular italic
    fontFamily: 'Univia Pro',
    fontStyle: 'italic',
    fontWeight: 400,
    src: `
    local('Univia Pro Regular Italic'),
    url(${UnivaProRegularItalicWoff}) format('woff')
  `,
  },
  {
    // thin
    fontFamily: 'Univia Pro',
    fontStyle: 'normal',
    fontWeight: 100,
    src: `
    local('Univia Pro Thin'),
    url(${UnivaProThinWoff}) format('woff')
  `,
  },
  {
    // thin italic
    fontFamily: 'Univia Pro',
    fontStyle: 'italic',
    fontWeight: 100,
    src: `
    local('Univia Pro Thin Italic'),
    url(${UnivaProThinItalicWoff}) format('woff')
  `,
  },
  {
    // ultra light
    fontFamily: 'Univia Pro',
    fontStyle: 'normal',
    fontWeight: 200,
    src: `
    local('Univia Pro Ultra Light'),
    url(${UnivaProUltraLightWoff}) format('woff')
  `,
  },
  {
    // ultra light
    fontFamily: 'Univia Pro',
    fontStyle: 'italic',
    fontWeight: 200,
    src: `
    local('Univia Pro Ultra Light Italic'),
    url(${UnivaProUltraLightItalicWoff}) format('woff')
  `,
  },
  {
    // light
    fontFamily: 'Univia Pro',
    fontStyle: 'normal',
    fontWeight: 300,
    src: `
    local('Univia Pro Light'),
    url(${UnivaProLightWoff}) format('woff')
  `,
  },
  {
    // light
    fontFamily: 'Univia Pro',
    fontStyle: 'italic',
    fontWeight: 300,
    src: `
    local('Univia Pro Light Italic'),
    url(${UnivaProLightItalicWoff}) format('woff')
  `,
  },
  {
    // medium
    fontFamily: 'Univia Pro',
    fontStyle: 'normal',
    fontWeight: 500,
    src: `
    local('Univia Pro Medium'),
    url(${UnivaProMediumWoff}) format('woff')
  `,
  },
  {
    // medium
    fontFamily: 'Univia Pro',
    fontStyle: 'italic',
    fontWeight: 500,
    src: `
    local('Univia Pro Medium Italic'),
    url(${UnivaProMediumItalicWoff}) format('woff')
  `,
  },
  {
    // bold
    fontFamily: 'Univia Pro',
    fontStyle: 'normal',
    fontWeight: 700,
    src: `
    local('Univia Pro Bold'),
    url(${UnivaProBoldWoff}) format('woff')
  `,
  },
  {
    // bold
    fontFamily: 'Univia Pro',
    fontStyle: 'italic',
    fontWeight: 700,
    src: `
    local('Univia Pro Bold Italic'),
    url(${UnivaProBoldItalicWoff}) format('woff')
  `,
  },
];
