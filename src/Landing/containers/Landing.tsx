import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { Button } from '../../shared/components/Button';
import { Swap } from '../../shared/components/Swap';

export function Landing() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Heading size="lg">Welcome to Delphor,</Heading>
        <Heading size="lg">a revolutionary way of</Heading>
        <Heading size="lg">smart investing</Heading>

        <Button size="lg">Launch App</Button>

        <Swap />
      </Box>
    </Container>
  );
}
