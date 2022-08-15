import { IResponseWrapperOptions } from '@/common/interfaces/utils';

export const responseWrapper = async (promiseResult: Promise<any>, { onSuccess, onError }: IResponseWrapperOptions) => {
  const result = await promiseResult;
  if ('data' in result) {
    onSuccess(result.data);
  }
  if ('error' in result) {
    onError(result.error);
  }
};
