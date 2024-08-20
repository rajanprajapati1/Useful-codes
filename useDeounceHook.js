import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

/**
 * Custom hook for debouncing a value.
 *
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns The debounced value.
 */
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const debouncedSetValue = useCallback(
    debounce((newValue) => {
      setDebouncedValue(newValue);
    }, delay),
    [delay]
  );

  useEffect(() => {
    debouncedSetValue(value);
  }, [value, debouncedSetValue]);

  return debouncedValue;
};

export default useDebounce;
