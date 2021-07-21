const madeEvolveSansEvoFontFamily = 'MADE Evolve Sans EVO';
const univaProFontFamily = 'Univia Pro';

const TYPOGRAPHY = {
  OVERLINE: {
    fontFamily: univaProFontFamily,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  P: {
    fontFamily: univaProFontFamily,
    fontWeight: '400',
  },
};

export default {
  h1: {
    fontFamily: madeEvolveSansEvoFontFamily,
    fontSize: 64,
    lineHeight: '72px',
    fontWeight: '700',
  },
  h2: {
    fontFamily: madeEvolveSansEvoFontFamily,
    fontSize: 56,
    lineHeight: '64px',
    fontWeight: '700',
  },
  h3: {
    fontFamily: madeEvolveSansEvoFontFamily,
    fontSize: 48,
    lineHeight: '56px',
    fontWeight: '700',
  },
  h4: {
    fontFamily: madeEvolveSansEvoFontFamily,
    fontSize: 40,
    lineHeight: '48px',
    fontWeight: '700',
  },
  h5: {
    fontFamily: madeEvolveSansEvoFontFamily,
    fontSize: 32,
    lineHeight: '40px',
    fontWeight: '700',
  },
  h6: {
    fontFamily: madeEvolveSansEvoFontFamily,
    fontSize: 24,
    lineHeight: '32px',
    fontWeight: '700',
  },

  p1: {
    ...TYPOGRAPHY.P,
    fontSize: 20,
    lineHeight: '32px',
  },
  p2: {
    ...TYPOGRAPHY.P,
    fontSize: 18,
    lineHeight: '28px',
  },
  p3: {
    ...TYPOGRAPHY.P,
    fontSize: 16,
    lineHeight: '24px',
  },
  p4: {
    ...TYPOGRAPHY.P,
    fontSize: 14,
    lineHeight: '20px',
  },
  p5: {
    ...TYPOGRAPHY.P,
    fontSize: 12,
    lineHeight: '16px',
  },

  overline1: {
    fontSize: 24,
    lineHeight: '32px',
    ...TYPOGRAPHY,

    OVERLINE: {},
  },
  overline2: {
    fontSize: 20,
    lineHeight: '28px',
    ...TYPOGRAPHY.OVERLINE,

    OVERLINE: {},
  },
  overline3: {
    fontSize: 16,
    lineHeight: '24px',
    ...TYPOGRAPHY.OVERLINE,

    OVERLINE: {},
  },
  overline4: {
    fontSize: 14,
    lineHeight: '20px',
    ...TYPOGRAPHY.OVERLINE,

    OVERLINE: {},
  },
  overline5: {
    fontSize: 12,
    lineHeight: '16px',
    ...TYPOGRAPHY.OVERLINE,

    OVERLINE: {},
  },
  overline6: {
    fontSize: 10,
    lineHeight: '12px',
    ...TYPOGRAPHY.OVERLINE,

    OVERLINE: {},
  },
};
