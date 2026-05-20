import React from "react";

// Generic hook that syncs a state value with localStorage.
// T is the type of the value being stored (inferred from initialValue).
export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = React.useState<T>(() => {
    // Lazy initializer: runs once on mount to hydrate state from localStorage.
    try {
      const item = window.localStorage.getItem(key);
      // If a stored value exists, parse it back from JSON; otherwise use initialValue.
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      // Handles cases where localStorage is unavailable (SSR, private mode, etc.)
      // or the stored value is malformed JSON.
      return initialValue;
    }
  });

  React.useEffect(() => {
    // Keeps localStorage in sync whenever `key` or `value` changes.
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Silently ignores write failures (e.g. storage quota exceeded).
    }
  }, [key, value]);

  // Returns the same [state, setter] tuple as useState, so callers use it identically.
  return [value, setValue] as const;
}
