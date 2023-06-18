import { Control, FieldErrorsImpl, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';

export interface Inputs {
  code: string;
}

export type ComponentPropTypes = {
  onNext: (...args: any) => void;
  loggingUserEmail?: string;
  returnUser?: boolean;
};
export type ComponentViewPropTypes = {
  onSubmit: SubmitHandler<any>;
  formState: {
    handleSubmit: UseFormHandleSubmit<Partial<Inputs>>;
    control: Control<Inputs>;
    formLoading: boolean;
    errors: FieldErrorsImpl;
  };
};
