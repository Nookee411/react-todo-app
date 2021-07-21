import MadeEvolveSansEvoMediumWoff2 from './Madeevolvesansevomedium.woff2';
import MadeEvolveSansEvoMediumWoff from './Madeevolvesansevomedium.woff';
import MadeEvolveSansEvoMediumTtf from './Madeevolvesansevomedium.ttf';

import MadeEvolveSansEvoThinWoff2 from './Madeevolvesansevothin.woff2';
import MadeEvolveSansEvoThinWoff from './Madeevolvesansevothin.woff';
import MadeEvolveSansEvoThinTtf from './Madeevolvesansevothin.ttf';

import MadeEvolveSansEvoLightWoff2 from './Madeevolvesansevolight.woff2';
import MadeEvolveSansEvoLightWoff from './Madeevolvesansevolight.woff';
import MadeEvolveSansEvoLightTtf from './Madeevolvesansevolight.ttf';

import MadeEvolveSansEvoWoff2 from './Madeevolvesansevo.woff2';
import MadeEvolveSansEvoWoff from './Madeevolvesansevo.woff';
import MadeEvolveSansEvoTtf from './Madeevolvesansevo.ttf';

import MadeEvolveSansEvoBoldWoff2 from './Madeevolvesansevobold.woff2';
import MadeEvolveSansEvoBoldWoff from './Madeevolvesansevobold.woff';
import MadeEvolveSansEvoBoldTtf from './Madeevolvesansevobold.ttf';

export default [
  {
    // medium
    fontFamily: 'MADE Evolve Sans EVO',
    fontWeight: 500,
    fontStyle: 'normal',
    src: `
    local('MADE Evolve Sans EVO Medium'),
    local('MADEEvolveSansEVO-Medium'),
    url(${MadeEvolveSansEvoMediumWoff2}) format('woff2'),
    url(${MadeEvolveSansEvoMediumWoff}) format('woff'),
    url(${MadeEvolveSansEvoMediumTtf}) format('truetype')
  `,
  },
  {
    // thin
    fontFamily: 'MADE Evolve Sans EVO',
    fontWeight: 200,
    fontStyle: 'normal',
    src: `
    local('MADE Evolve Sans EVO Thin'),
    local('MADEEvolveSansEVO-Thin'),
    url(${MadeEvolveSansEvoThinWoff2}) format('woff2'),
    url(${MadeEvolveSansEvoThinWoff}) format('woff'),
    url(${MadeEvolveSansEvoThinTtf}) format('truetype')
  `,
  },
  {
    // light
    fontFamily: 'MADE Evolve Sans EVO',
    fontWeight: 300,
    fontStyle: 'normal',
    src: `
    local('MADE Evolve Sans EVO Light'),
    local('MADEEvolveSansEVO-Light'),
    url(${MadeEvolveSansEvoLightWoff2}) format('woff2'),
    url(${MadeEvolveSansEvoLightWoff}) format('woff'),
    url(${MadeEvolveSansEvoLightTtf}) format('truetype')
  `,
  },
  {
    // regular
    fontFamily: 'MADE Evolve Sans EVO',
    fontWeight: 400,
    fontStyle: 'normal',
    src: `
    local('MADE Evolve Sans EVO'),
    local('MADEEvolveSansEVO'),
    url(${MadeEvolveSansEvoWoff2}) format('woff2'),
    url(${MadeEvolveSansEvoWoff}) format('woff'),
    url(${MadeEvolveSansEvoTtf}) format('truetype')
  `,
  },
  {
    // bold
    fontFamily: 'MADE Evolve Sans EVO',
    fontWeight: 700,
    fontStyle: 'normal',
    src: `
    local('MADE Evolve Sans EVO Bold'),
    local('MADEEvolveSansEVO-Bold'),
    url(${MadeEvolveSansEvoBoldWoff2}) format('woff2'),
    url(${MadeEvolveSansEvoBoldWoff}) format('woff'),
    url(${MadeEvolveSansEvoBoldTtf}) format('truetype')
  `,
  },
];
