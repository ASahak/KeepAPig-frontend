import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import View from './view';
import { withLayout } from '@/hoc';
import { Inputs } from './types';
import ValidationSchemas from '@/utils/validators';

const Container = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(ValidationSchemas.FORGOT_PASSWORD_FORM),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (formData: Inputs): void => {
    console.log(formData);
  };

  return <View formState={{ formLoading: false, handleSubmit, control, errors }} onSubmit={onSubmit} />;
};
Container.displayName = 'ForgotPasswordContainer';
export default withLayout('nude')(Container);
