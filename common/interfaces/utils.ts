export interface IResponseWrapperOptions {
  onSuccess: (...args: any[]) => void;
  onError: (...args: any[]) => void;
}

export type ErrorResponse = {
  message: string;
  name: string;
};
