import { useState, useEffect } from "react";
import _debounce from "lodash/debounce";

export const useDebouncedValue = ({ initValue, delay = 500 }) => {
  const [debouncedValue, setDebouncedValue] = useState({});
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    const debouncedFunction = _debounce((newValue) => {
      setDebouncedValue(newValue);
    }, delay);

    debouncedFunction(value);

    return () => debouncedFunction.cancel;
  }, [value, delay]);

  return [debouncedValue, setValue];
};
