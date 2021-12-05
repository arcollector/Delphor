import { ChakraProvider } from '@chakra-ui/react'
import { Main } from './Navigation';
import { theme } from './lib/theme';

export function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Main />
    </ChakraProvider>
  );
}
