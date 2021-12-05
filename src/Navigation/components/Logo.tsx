import { Link, Image, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Link as RouteLink } from "react-router-dom";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

export function Logo() {
  const footPrintImg = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
      <Link as={RouteLink} to="/">
        <LogoBox>
          <Image src={footPrintImg} style={{ height: 20 }} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            ml={3}
          >
            Delphor DeFi
          </Text>
        </LogoBox>
      </Link>
  )
}
