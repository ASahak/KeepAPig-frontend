import { UseFormHandleSubmit, Control, SubmitHandler } from 'react-hook-form';

export type ComponentPropTypes = {
  onSignUp: SubmitHandler<any>;
  formState: {
    handleSubmit: UseFormHandleSubmit<{ [key: string]: any }>;
    control: Control;
    formLoading: boolean;
  };
  jss: { [key: string]: string };
};

export type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role: string;
};
