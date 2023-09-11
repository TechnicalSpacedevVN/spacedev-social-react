import { useRef, useState } from "react";

type UseDebounceRes<T> = ReturnType<typeof useState<T>>;
type UseDebounceDispatch<T> = UseDebounceRes<T>[1];

export const useDebounce = <T>(
  defaultValue: T,
  delay = 300
): [...UseDebounceRes<T>, UseDebounceRes<T>[1]] => {
  const [value, _setValue] = useState(defaultValue);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const setValue: UseDebounceDispatch<T> = (value: any) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      _setValue(value);
    }, delay);
  };

  const setImmediately = (value: any) => {
    clearTimeout(timeoutRef.current);
    _setValue(value);
  };

  return [value, setValue, setImmediately];
};
