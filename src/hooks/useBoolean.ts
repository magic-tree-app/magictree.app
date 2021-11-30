import { useState } from 'react';

type UseBoolean = [
  boolean,
  {
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
  }
]

export const useBoolean = (initialValue: boolean): UseBoolean => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    {
      setTrue: () => setValue(true),
      setFalse: () => setValue(false),
      toggle: () => setValue((previousValue) => !previousValue),
    },
  ];
};
