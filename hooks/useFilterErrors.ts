import { useEffect, useState } from 'react';
import { of, takeWhile } from 'rxjs';
import { ErrorResponse } from '@/common/interfaces/utils';

export const useFilterErrors = (isError: boolean, errorResponse: ErrorResponse) => {
  const [error, setError] = useState<string>('');

  useEffect(() => {
    of(isError)
      .pipe(takeWhile((v) => v))
      .subscribe(() => {
        setError(errorResponse.message);
      });
  }, [isError]);

  return {
    error
  };
};
