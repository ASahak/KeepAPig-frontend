export interface IResponseWrapperOptions {
  onSuccess?: (...args: any[]) => void;
  onError?: (...args: any[]) => void;
  onFinally?: () => void;
}

export type ErrorResponse = {
  message: string;
  name: string;
};
