import { useState, useEffect } from "react";
import { API_URL } from "../Utils/api";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.length < 4) {
      setMovies([]);
      setError(null);
      return;
    }

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(`${API_URL}&s=${query}`);
        const data = await res.json();

        if (data.Response === "False") {
          setError(data.Error);
          setMovies([]);
        } else {
          setMovies(data.Search);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  return { movies, isLoading, error };
}
