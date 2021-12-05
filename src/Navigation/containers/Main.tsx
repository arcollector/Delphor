import { Box, Container } from '@chakra-ui/react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Home } from '../../Home';
import { Exchange } from '../../Exchange';

export function Main() {
  return (
    <Box as="main" pb={8}>
      <Navbar path="" />

      <Container maxW="container.md" pt={14}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/pools" element={<Exchange />} />
            <Route path="/staking" element={<Exchange />} />
            <Route path="/info" element={<Exchange />} />
          </Routes>
        <Footer />
      </Container>
    </Box>
  )
}
