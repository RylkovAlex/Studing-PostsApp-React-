import { useState } from 'react';

export const useFetching = (cb) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await cb();
    } catch (error) {
      console.log({ error });
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
