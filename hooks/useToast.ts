import { toast, ToastOptions, useToast } from 'react-toastify';
import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

enum ToastKeys {
  error = 'error',
  success = 'success',
  info = 'info',
  warning = 'warning'
}
const TOAST_KEYS$ = from(Object.values(ToastKeys));

type Key = keyof typeof ToastKeys;

export const showToast = (props: { type: Key; message: string; options?: ToastOptions }) => {
  TOAST_KEYS$.pipe(
    filter((key) => key === props.type),
    map((key) => toast[key as Key](props.message, props.options || {}))
  ).subscribe();
};

export default useToast;
