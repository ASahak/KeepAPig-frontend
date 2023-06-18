import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Inputs } from './types';
import View from './view';
import { withLayout } from '@/hoc';
import { useLazySignInUserQuery, AuthUserResponse } from '@/graphql/user/queries/index.graphql-gen';
import { useUpdateUserMutation } from '@/graphql/user/mutations/index.graphql-gen';
import { responseWrapper } from '@/utils/helpers';
import ValidationSchemas from '@/utils/validators';
import { useAuth, showToast } from '@/hooks';
import { getError } from '@/utils/helpers';
import { IUser } from '@/common/interfaces/user';

const Container = () => {
  const [shouldVerify, setShouldVerify] = useState<boolean>(false);
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
  const [updateUserMutation, updateUserMutationResult] = useUpdateUserMutation();

  const onSignIn: SubmitHandler<Inputs> = (formData: Inputs): void => {
    responseWrapper(signInQuery(formData), {
      onSuccess(user: { loggedUser: AuthUserResponse }) {
        if (user.loggedUser.notVerified) {
          setShouldVerify(true);
          return;
        }
        reset();
        signIn(user.loggedUser as { user: IUser; token: string });
        router.push('/');
      },
      onError(err) {
        getError(err).subscribe((value) => {
          showToast({ type: 'error', message: value });
        });
      }
    });
  };

  const userVerifiedNext = (userId: string) => {
    responseWrapper(updateUserMutation({ data: { _id: userId, payload: { isVerifiedTwoFactorAuth: true } } }), {
      onSuccess() {
        const { email, password, rememberMe } = getValues();
        setShouldVerify(false);
        onSignIn({ email, password, rememberMe });
      },
      onError(err) {
        getError(err).subscribe((value) => {
          showToast({ type: 'error', message: value });
        });
      },
      onFinally() {}
    });
  };

  return (
    <View
      loggingUserEmail={getValues().email}
      onVerifiedNext={userVerifiedNext}
      shouldVerify={shouldVerify}
      onSignIn={onSignIn}
      formState={{ formLoading: isFetching, handleSubmit, control, errors }}
    />
  );
};
Container.displayName = 'LoginContainer';
export default withLayout('nude')(Container);
