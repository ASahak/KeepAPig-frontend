import { Control, SubmitHandler, UseFormHandleSubmit, FieldErrorsImpl } from 'react-hook-form';

export type ComponentPropTypes = {
  shouldVerify: boolean;
  onVerifiedNext: () => void;
  onSignIn: SubmitHandler<any>;
  formState: {
    handleSubmit: UseFormHandleSubmit<Partial<Inputs>>;
    control: Control<Inputs>;
    formLoading: boolean;
    errors: FieldErrorsImpl;
  };
};

export type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};
