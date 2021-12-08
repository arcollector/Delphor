import {
  Box,
  Flex,
  Text,
  Input,
  Spacer,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

type Props = {
  text: string;
  coin: string;
};

export function Pair(props: Props) {
  return (
    <Flex p={5} direction="row" alignItems="flex-end">
      <Flex flex={1} direction="column">
        <Text color="white" fontStyle="italic">
          {props.text}
        </Text>
        <Input
          bg={useColorModeValue('blue.800', 'blue.50')}
          color="white"
          placeholder={props.coin}
        />
      </Flex>
      <Spacer flex={0.1} />
      <Flex flex={1}>
        <Input
          bg={useColorModeValue('blue.800', 'blue.50')}
          placeholder="Value"
          textAlign="right"
          color="white"
        />
      </Flex>
    </Flex>
  );
}
