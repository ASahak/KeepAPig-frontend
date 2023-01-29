import React from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Inputs } from './types';
import View from './view';
import { withLayout } from '@/hoc';
import { useLazySignInUserQuery, AuthUserResponse } from '@/graphql/user/queries/index.graphql-gen';
import { responseWrapper } from '@/utils/helpers';
import ValidationSchemas from '@/utils/validators';
import { getError, useAuth, showToast } from '@/hooks';

const Container = () => {
  const { signIn } = useAuth();
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(ValidationSchemas.LOGIN_FORM),
    defaultValues: {
      rememberMe: false,
      email: '',
      password: ''
    }
  });
  const router = useRouter();
  const [signInQuery, { isFetching }] = useLazySignInUserQuery();

  const onSignIn: SubmitHandler<Inputs> = (formData: Inputs): void => {
    responseWrapper(signInQuery(formData), {
      onSuccess(user: { loggedUser: AuthUserResponse }) {
        reset();
        signIn(user.loggedUser);
        router.push('/');
      },
      onError(err) {
        getError(err).subscribe((value) => {
          showToast({ type: 'error', message: value });
        });
      }
    });
  };

  return <View onSignIn={onSignIn} formState={{ formLoading: isFetching, handleSubmit, control, errors }} />;
};
Container.displayName = 'LoginContainer';
export default withLayout('nude')(Container);
