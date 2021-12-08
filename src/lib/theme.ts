import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: ReturnType<typeof mode>) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    },
  }),
};

const components = {
  Heading: {
    baseStyle: (props: ReturnType<typeof mode>) => ({
      color: mode('#333', '#fff')(props),
    }),
  },
  Text: {
    baseStyle: (props: ReturnType<typeof mode>) => ({
      textAlign: 'left',
    }),
  },
  Link: {
    baseStyle: (props: ReturnType<typeof mode>) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {};

const colors = {
  grassTeal: '#88ccca',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  ...config,
  styles,
  components,
  fonts,
  colors,
});
