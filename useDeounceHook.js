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



uesage

import React, { useState } from "react";
import useDebounce from './components/UseDebounce';

const LetOut = ({ onChange }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  
  // Use the useDebounce hook to get debounced values
  const debouncedRange = {
    min: useDebounce(priceRange.min, 1000),
    max: useDebounce(priceRange.max, 1000),
  };

  // Notify parent component of the debounced values
  React.useEffect(() => {
    if (onChange) {
      onChange([debouncedRange.min, debouncedRange.max]);
    }
  }, [debouncedRange, onChange]);

  // Handle changes for both range and input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [id]: Number(value),
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <label>
        Min Price:
        <input
          id="min"
          type="range"
          min="0"
          max="10000"
          step="100"
          value={priceRange.min}
          onChange={handleChange}
        />
        <input
          id="min"
          type="number"
          min="0"
          max="10000"
          value={priceRange.min}
          onChange={handleChange}
        />
        ₹{priceRange.min}
      </label>
      <br />
      <label>
        Max Price:
        <input
          id="max"
          type="range"
          min="0"
          max="10000"
          step="100"
          value={priceRange.max}
          onChange={handleChange}
        />
        <input
          id="max"
          type="number"
          min="0"
          max="10000"
          value={priceRange.max}
          onChange={handleChange}
        />
        ₹{priceRange.max}
      </label>
      <br />
      <div>
        Selected Range: ₹{debouncedRange.min} - ₹{debouncedRange.max}
      </div>
    </div>
  );
};

export default LetOut;
