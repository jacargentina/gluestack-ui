import { Root, Spacer } from './styled-component';
import { createVStack } from '@universa11y/vstack';
import { Wrapper } from '../Wrapper';
import React from 'react';
import { View } from 'react-native';

const VStackTemp = createVStack({
  Root,
  Spacer,
});

export const VStack = () => {
  return (
    <Wrapper>
      <VStackTemp
        space="md"
        //@ts-ignore
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue300' } }}
        />
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue400' } }}
        />
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue500' } }}
        />
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue600' } }}
        />
      </VStackTemp>
    </Wrapper>
  );
};

export default VStack;