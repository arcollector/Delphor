import { ChakraProvider } from '@chakra-ui/react'
import { Main, Guest } from './Navigation';
import { AnimatePresence } from 'framer-motion'
import { theme } from './lib/theme';

export function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Main>
        <AnimatePresence exitBeforeEnter initial>
          <Guest />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}
