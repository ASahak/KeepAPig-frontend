import { UseFormHandleSubmit, Control, SubmitHandler, FieldErrorsImpl } from 'react-hook-form';

export type ComponentPropTypes = {
  onSignUp: SubmitHandler<any>;
  formState: {
    handleSubmit: UseFormHandleSubmit<Inputs>;
    control: Control<Inputs>;
    formLoading: boolean;
    errors: FieldErrorsImpl,
  };
};

export type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role: string;
};
