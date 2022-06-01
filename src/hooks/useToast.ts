import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const TOAST_KEYS$ = from(['error', 'success', 'info', 'default', 'warning']);

type ToastProps = {
    [key: string]: string,
}
type Key = keyof ToastProps;

export const showToast = (props: { type: Key, message: string }) => {
    TOAST_KEYS$.pipe(
        filter(key => key === props.type),
        map((key: Key) => {
            // @ts-ignore
            return toast[key](props.message);
        })
    ).subscribe()
};

export default (toastTypes: ToastProps) => {
    useEffect(() => {
        TOAST_KEYS$.pipe(
            filter((key: string) => !!toastTypes[key]),
            map((key: Key) => {
                // @ts-ignore
                return toast[key](toastTypes[key])

            })
        ).subscribe()
    }, [toastTypes]);
}
