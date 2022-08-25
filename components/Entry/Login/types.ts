import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';

export type ComponentPropTypes = {
  onSignIn: SubmitHandler<any>;
  formState: {
    handleSubmit: UseFormHandleSubmit<{ [key: string]: any }>;
    control: Control;
    formLoading: boolean;
  };
  jss: { [key: string]: any };
};

export type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};
