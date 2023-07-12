import { Dispatch, SetStateAction, useState } from "react";

type SetValue<T> = Dispatch<SetStateAction<T>>;

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  const getSavedValue = (key: string, initialValue: T) => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const savedValue = localStorage.getItem(key);
      return savedValue !== "undefined"
        ? (JSON.parse(savedValue ?? "") as T)
        : initialValue;
    } catch (error) {
      console.warn(`Error getting localStorage key "${key}"`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(() => {
    return getSavedValue(key, initialValue);
  });

  const setValueWrapper: SetValue<T> = (value) => {
    if (typeof window === "undefined") {
      console.warn("Localstorage doesn't Work.");
    }

    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(value);
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}"`, error);
    }
  };

  return [storedValue, setValueWrapper];
}
