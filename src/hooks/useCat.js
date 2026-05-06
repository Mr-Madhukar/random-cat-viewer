import { useState, useCallback } from "react";

export function useCat() {
  const [cat, setCat]       = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState(null);

  const fetchCat = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res  = await fetch("https://api.freeapi.app/api/v1/public/cats/cat/random");
      const json = await res.json();
      if (!json.success) throw new Error("API error");
      setCat(json.data);
    } catch {
      setError("😿 Couldn't fetch a cat. Please try again!");
    } finally {
      setLoading(false);
    }
  }, []);

  return { cat, loading, error, fetchCat };
}
