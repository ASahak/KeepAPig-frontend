import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Inputs } from './types';
import View from './view';
import { AuthUserResponse, useSignUpUserMutation } from '@/graphql/user/mutations/index.graphql-gen';
import { responseWrapper } from '@/utils/helpers';
import ValidationSchemas from '@/utils/validators';
import { USER_ROLES } from '@/common/enums';
import { MESSAGES } from '@/common/constants';
import { showToast, useAuth } from '@/hooks';
import { getError } from '@/utils/helpers';
import { withLayout } from '@/hoc';
import { IUser } from '@/common/interfaces/user';

const Container = () => {
  const { signIn } = useAuth();
  const [sigUpUserMutation, sigUpUserMutationResult] = useSignUpUserMutation();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(ValidationSchemas.REGISTER_FORM),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });
  const router = useRouter();
  const signUp: SubmitHandler<Inputs> = async (formData: Inputs) => {
    formData.role = USER_ROLES.USER;
    responseWrapper(sigUpUserMutation(formData), {
      onSuccess: (payload: { createdUser: AuthUserResponse }) => {
        reset();
        showToast({
          type: 'success',
          message: MESSAGES.USER.REGISTERED_SUCCESSFULLY,
          options: { autoClose: 2000 }
        });
        signIn(payload.createdUser as { user: IUser; token: string });
        router.push('/');
      },
      onError: (error) => {
        getError(error).subscribe((value) => {
          showToast({ type: 'error', message: value });
        });
      }
    });
  };

  return <View formState={{ handleSubmit, control, formLoading: sigUpUserMutationResult.isLoading, errors }} onSignUp={signUp} />;
};
Container.diplayName = 'RegisterContainer';
export default withLayout('nude')(Container);
