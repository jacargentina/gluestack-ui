import React, { useCallback } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import {
  useHover,
  useIsPressed,
  usePressed,
} from '@gluestack-ui/react-native-aria';
import { useFocusRing } from '@react-native-aria/focus';
import { useMenuItem } from '@react-native-aria/menu';
import { Platform } from 'react-native';

export function MenuItem({
  StyledMenuItem,
  item,
  state,
  onAction,
  onClose,
  closeOnSelect,
}: any) {
  // Get props for the menu item element
  const ref = React.useRef(null);
  const { menuItemProps } = useMenuItem(
    {
      key: item.key,
      onAction,
      onClose,
      closeOnSelect,
      ...item.props,
    },
    state,
    ref
  );

  // Handle focus events so we can apply highlighted
  // style to the focused menu item

  const toggleSelection = useCallback(() => {
    if (Platform.OS === 'web') {
      state.selectionManager.toggleSelection(item.key);
    }
  }, [state.selectionManager, item.key]);

  const { focusProps: focusRingProps, isFocusVisible }: any = useFocusRing();
  const { pressableProps, isPressed } = useIsPressed();
  const { isHovered, hoverProps }: any = useHover();
  const isFocused = state.selectionManager.focusedKey === item.key;
  const { children, ...rest } = item.props;

  const { pressEvents } = usePressed(
    // @ts-ignore
    composeEventHandlers(
      composeEventHandlers(rest?.onPressIn, pressableProps.onPressIn),
      composeEventHandlers(menuItemProps.onPressIn, toggleSelection)
    ),
    composeEventHandlers(
      composeEventHandlers(rest?.onPressOut, pressableProps.onPressOut),
      menuItemProps.onPressOut
    )
  );

  return (
    <StyledMenuItem
      {...menuItemProps}
      ref={ref}
      states={{
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        focusvisible: isFocusVisible,
        selected: state.selectionManager.isSelected(item.key),
      }}
      {...rest}
      {...pressEvents}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(rest?.onHoverIn, hoverProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(rest?.onHoverOut, hoverProps.onHoverOut)}
      // @ts-ignore - web only
      onFocus={composeEventHandlers(
        composeEventHandlers(rest?.onFocus, focusRingProps.onFocus),
        menuItemProps?.onFocus
      )}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(
        composeEventHandlers(rest?.onBlur, focusRingProps.onBlur),
        menuItemProps?.onBlur
      )}
    >
      {children}
    </StyledMenuItem>
  );
}
