import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    function handleKey(event) {
      if (event.code === key) action();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [key, action]);
}
