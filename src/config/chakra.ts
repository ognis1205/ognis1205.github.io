/**
 * @fileoverview Defines ChakraUI config.
 * @copyright Shingo OKAWA 2022
 */
import * as Chakra from '@chakra-ui/react';
import * as ChakraThemeTools from '@chakra-ui/theme-tools';

const breakpoints = ChakraThemeTools.createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

const styles = {
  global: (props) => ({
    body: {
      bg: ChakraThemeTools.mode('#d6d8da', '#202023')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: ChakraThemeTools.mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: '#88ccca',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = Chakra.extendTheme({
  breakpoints,
  config,
  styles,
  components,
  fonts,
  colors,
});
