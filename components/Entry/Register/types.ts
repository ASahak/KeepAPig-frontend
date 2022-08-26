import { UseFormHandleSubmit, Control, SubmitHandler } from 'react-hook-form';

export type ComponentPropTypes = {
  onSignUp: SubmitHandler<any>;
  formState: {
    handleSubmit: UseFormHandleSubmit<Inputs>;
    control: Control<Inputs>;
    formLoading: boolean;
  };
  jss: { [key: string]: any };
};

export type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role: string;
};
