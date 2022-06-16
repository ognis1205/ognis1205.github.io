/**
 * @fileoverview Defines React hook utilities.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';

const useUnmountRef = (): ReturnType<typeof React.useRef> => {
  const isUnmounted = React.useRef(false);

  React.useEffect(
    () => () => {
      isUnmounted.current = true;
    },
    []
  );

  return isUnmounted;
};

export const useSafeState = <T>(
  defaultValue: T
): [T, ReturnType<typeof React.useCallback>] => {
  const isUnmounted = useUnmountRef();

  const [state, setState] = React.useState<T>(defaultValue);

  const wrapper = React.useCallback(
    (v: T) => {
      if (!isUnmounted.current) {
        setState(v);
      }
    },
    [setState, isUnmounted]
  );

  return [state, wrapper];
};
