import { Box, useColorModeValue, Flex } from '@chakra-ui/react';
import { Pair } from './Pair';
import { Button } from '../Button';

export function Swap() {
  return (
    <Box
      py={5}
      borderRadius={10}
      w={{ sm: 300, md: 500, lg: 600 }}
      bg={useColorModeValue('teal.500', 'teal.50')}
    >
      <Pair text="Swap" coin="SOL" />
      <Pair text="For" coin="MNADE" />
      <Button size="lg">Exchange</Button>
    </Box>
  );
}
