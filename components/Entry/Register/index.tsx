import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Inputs } from './types';
import UseStyles from './styles';
import View from './view';
import { useSignUpUserMutation } from '@/graphql/user/mutations/index.graphql-gen';
import ValidationSchemas from '@/utils/validators';
import { USER_ROLES, USER_MESSAGES } from '@/common/enum/users';
import { showToast, getError, ErrorResponse } from '@/hooks';
import { setUser } from '@/store/slices/auth';
import { useRTKDispatch } from '@/store/hooks';

const Container = () => {
  const classes = UseStyles();
  const [sigUpMutation, sigUpMutationResult] = useSignUpUserMutation();
  const { handleSubmit, control, reset } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(ValidationSchemas.REGISTER_FORM)
  });
  const router = useRouter();
  const rtkDispatch = useRTKDispatch();

  const signUp: SubmitHandler<Inputs> = async (formData: Inputs) => {
    formData.role = USER_ROLES.USER;
    sigUpMutation(
      formData
      // {
      // onSuccess: (v) => {
      //     showToast({
      //         type: 'success',
      //         message: USER_MESSAGES.REGISTERED_SUCCESSFULLY,
      //         options: { autoClose: 2000 }
      //     });
      //     rtkDispatch(setUser(v.createdUser));
      //     reset();
      //     router('/');
      // },
      // onError: (error) => {
      //     getError(error as ErrorResponse, 0).subscribe((value) => {
      //         showToast({ type: 'error', message: value });
      //     });
      // }
      // }
    );
  };

  return (
    <div className={classes['register-container']}>
      <View formState={{ handleSubmit, control, formLoading: sigUpMutationResult.isLoading }} jss={classes} onSignUp={signUp} />
    </div>
  );
};
export default Container;
