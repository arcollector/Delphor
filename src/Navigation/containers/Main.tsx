import { Navbar } from '../components/Navbar'
import { Box, Container } from '@chakra-ui/react'
import { Footer } from '../components/Footer'
import { Home } from '../../Home';

export function Main() {
  return (
    <Box as="main" pb={8}>
      <Navbar path="" />

      <Container maxW="container.md" pt={14}>
        <Home />

        <Footer />
      </Container>
    </Box>
  )
}
