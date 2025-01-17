import { useFocusRing } from '@react-native-aria/focus';
import React, { forwardRef, createContext } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import {
  useFocus,
  useHover,
  useIsPressed,
} from '@gluestack-ui/react-native-aria';
import type { InterfaceActionsheetItemProps } from './types';
export const ActionsheetContext = createContext<any>({});

export function ActionsheetItem<T>(
  StyledActionsheetItem: React.ComponentType<T>
) {
  return forwardRef(
    (
      {
        children,
        isDisabled,
        isHovered: isHoveredProp,
        isPressed: isPressedProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        ...props
      }: T & InterfaceActionsheetItemProps,
      ref?: any
    ) => {
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { pressableProps, isPressed } = useIsPressed();
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      return (
        <StyledActionsheetItem
          ref={ref}
          disabled={isDisabled}
          onPressIn={composeEventHandlers(
            props?.onPressIn,
            pressableProps.onPressIn
          )}
          onPressOut={composeEventHandlers(
            props?.onPressOut,
            pressableProps.onPressOut
          )}
          // @ts-ignore - web only
          onHoverIn={composeEventHandlers(
            props?.onHoverIn,
            hoverProps.onHoverIn
          )}
          // @ts-ignore - web only
          onHoverOut={composeEventHandlers(
            props?.onHoverOut,
            hoverProps.onHoverOut
          )}
          // @ts-ignore - web only
          onFocus={composeEventHandlers(
            composeEventHandlers(props?.onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          )}
          // @ts-ignore - web only
          onBlur={composeEventHandlers(
            composeEventHandlers(props?.onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          )}
          {...(props as T)}
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            // @ts-ignore
            active: isPressedProp || isPressed || props?.states?.active,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
        >
          {children}
        </StyledActionsheetItem>
      );
    }
  );
}
