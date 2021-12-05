import { Navbar } from '../components/Navbar'
import { Box, Container } from '@chakra-ui/react'
import { Footer } from '../components/Footer'

type Props = {
  children: React.ReactNode,
}

export function Main({ children }: Props) {
  return (
    <Box as="main" pb={8}>
      <Navbar path="" />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
