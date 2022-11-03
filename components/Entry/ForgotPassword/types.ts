import { Control, SubmitHandler, UseFormHandleSubmit, FieldErrorsImpl } from 'react-hook-form';

export type ComponentPropTypes = {
  onSubmit: SubmitHandler<any>;
  formState: {
    handleSubmit: UseFormHandleSubmit<Partial<Inputs>>;
    control: Control<Inputs>;
    formLoading: boolean;
    errors: FieldErrorsImpl;
  };
  previewType: PreviewType
};

export type Inputs = {
  mode: PreviewType;
  email?: string;
  password?: string;
};

export const enum PreviewTypes {
  LOADING = 'LOADING',
  SEND_EMAIL = 'SEND_EMAIL',
  PASSWORD = 'PASSWORD'
}
export type PreviewType = keyof typeof PreviewTypes | null;
