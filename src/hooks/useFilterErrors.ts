import { useEffect, useState } from 'react';
import { of, takeWhile, switchMap } from 'rxjs';

export type ErrorResponse = {
    response: {
        errors: Array<{ message: string }>;
    };
};

export const useFilterErrors = (isError: boolean, error: ErrorResponse) => {
    const [errors, setErrors] = useState<Array<string>>([]);

    useEffect(() => {
        of(isError)
            .pipe(takeWhile((v) => v))
            .subscribe(() => {
                setErrors(error.response.errors.map((e: { message: string }) => e.message));
            });
    }, [isError]);

    return {
        errors
    };
};
export const getError = (error: ErrorResponse, errorIndex = 0) => {
    return of(!!error.response.errors).pipe(switchMap(() => of(error.response.errors[errorIndex].message)));
};
