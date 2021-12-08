import { Button as ButtonChakra } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
  size: React.ComponentProps<typeof ButtonChakra>['size'];
};

export function Button(props: Props) {
  return (
    <ButtonChakra bg="#ccc" borderRadius="full" size={props.size}>
      {props.children}
    </ButtonChakra>
  );
}
