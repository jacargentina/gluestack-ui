import React from 'react';
import {
  Button,
  Pressable,
  Text,
  Toast,
  useToast,
} from '../../../ui-components';
import { View } from 'react-native';
import Wrapper from '../../Wrapper';

export function Basic(props: any) {
  return (
    <>
      <Wrapper>
        <ToastWithHook {...props} />
      </Wrapper>
    </>
  );
}

const ToastWithHook = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        onPress={() => {
          toast.show({
            placement: placement,
            render: ({ id }) => {
              return (
                <>
                  <Toast nativeID={id} {...props}>
                    <Toast.Title>Hello World Toast {id}</Toast.Title>
                    <Pressable onPress={() => toast.close(id)} px="$4">
                      <Text>x</Text>
                    </Pressable>
                  </Toast>
                </>
              );
            },
          });
        }}
      >
        <Button.Text>Press Me</Button.Text>
      </Button>
    </View>
  );
};

export { Toast, useToast };
