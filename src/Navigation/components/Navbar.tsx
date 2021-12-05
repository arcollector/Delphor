import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { Logo } from './Logo';
import { LinkItem } from './LinkItem';
import { HamburgerIcon } from '@chakra-ui/icons'
import { ThemeToggleButton } from './ThemeToggleButton';

type Props = {
  path: string,
};

export function Navbar(props: Props) {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/exchange" path={path}>
            Exchange
          </LinkItem>
          <LinkItem href="/pools" path={path}>
            Pools
          </LinkItem>
          <LinkItem href="/staking" path={path}>
            Staking
          </LinkItem>
          <LinkItem href="/info" path={path}>
            Info
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <Link href="/exchange">
                  <MenuItem as={Link}>Exchange</MenuItem>
                </Link>
                <Link href="/pools">
                  <MenuItem as={Link}>Pools</MenuItem>
                </Link>
                <Link href="/staking">
                  <MenuItem as={Link}>Staking</MenuItem>
                </Link>
                <Link href="/info">
                  <MenuItem as={Link}>Info</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
