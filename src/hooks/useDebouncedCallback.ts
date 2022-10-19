import { DependencyList, useCallback } from 'react';
import { debounce as debounceBase } from '../helpers/debounce';

// eslint-disable-next-line @typescript-eslint/ban-types
export function useDebouncedCallback<T extends Function>(
  callback: T,
  deps: DependencyList,
  waitMilliseconds = 500
) {
  const debounce = debounceBase;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(debounce(callback, waitMilliseconds), deps);
}
