import { useEffect, useState } from 'react';
import { of, takeWhile, switchMap } from 'rxjs';

export type ErrorResponse = {
  message: string;
  name: string;
};

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
export const getError = (errorResponse: ErrorResponse) => {
  return of(!!errorResponse.message).pipe(switchMap(() => of(errorResponse.message)));
};
