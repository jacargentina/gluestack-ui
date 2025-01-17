import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { Button, VStack, AddIcon, Center } from '../../../ui-components';

import Wrapper from '../../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;

export const ButtonSizesExample: MyButtonStory = ({}) => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  return (
    <Wrapper>
      <Center>
        <VStack space="md" justifyContent="center" alignItems="center">
          {sizes.map((size: any) => {
            return (
              <Button mt="$4" size={size} key={size}>
                <Button.Text>Button</Button.Text>
                <Button.Icon as={AddIcon} color="$white" ml="$2" />
              </Button>
            );
          })}
        </VStack>
      </Center>
    </Wrapper>
  );
};
