import { useState } from "react";

export default function useLocalStorage(key:any, initialValue:any) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    }
  });


  const setValue = (value:any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export const getTruncatedAddress = (address: string | null | undefined) => {
  if (address && address.startsWith("0x")) {
    return address.substr(0, 6) + "..." + address.substr(address.length - 4);
  }
  return address;
};