import React from 'react';
import { Button, Toast, useToast } from '../../../ui-components';
import { View } from 'react-native';
import Wrapper from '../../Wrapper';

export function DuplicateToastPrevent(props: any) {
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
  const idTest = 'test-id';
  return (
    <View
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
        {...props}
        onPress={() => {
          if (!toast.isActive(idTest)) {
            toast.show({
              id: idTest,
              placement: placement,
              render: ({ id }) => {
                return (
                  <Toast>
                    <Toast.Title>Hello World Toast {id}</Toast.Title>
                  </Toast>
                );
              },
            });
          }
        }}
      >
        <Button.Text>Press Me</Button.Text>
      </Button>
    </View>
  );
};
