export interface IResponseWrapperOptions {
  onSuccess: (...args: any[]) => void;
  onError: (...args: any[]) => void;
}
