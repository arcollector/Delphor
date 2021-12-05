import { Box } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Delphor DeFI. All Rights Reserved.
    </Box>
  );
}
