import { IResponseWrapperOptions } from '@/common/interfaces/utils';
import jwt_decode from 'jwt-decode';
import { Cookie } from '@/services';
import { JwtPayload } from '@/common/interfaces/user';
import { of, switchMap, fromEvent } from 'rxjs';
import { ErrorResponse } from '@/common/interfaces/utils';

export const responseWrapper = async (promiseResult: Promise<any>, { onSuccess, onError, onFinally }: IResponseWrapperOptions) => {
  const result = await promiseResult;
  if ('data' in result) {
    onSuccess?.(result.data);
  }
  if ('error' in result && result.error.name !== 'AbortError') {
    onError?.(result.error);
  }
  onFinally?.();
};

export const isAuthenticated = (token?: string) => {
  const _token = token || Cookie.getToken;

  if (!_token) return false;
  const { exp } = jwt_decode(_token) as JwtPayload;
  return Date.now() <= exp * 1000;
};

export const getError = (errorResponse: ErrorResponse) => {
  return of(!!errorResponse.message).pipe(switchMap(() => of(errorResponse.message)));
};
