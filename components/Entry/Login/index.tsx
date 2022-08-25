import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Inputs } from './types';
import UseStyles from './styles';
import View from './view';
import { withLayout } from '@/hoc';
import { useLazySignInUserQuery, AuthUserResponse } from '@/graphql/user/queries/index.graphql-gen';
import { responseWrapper } from '@/utils/helpers';
import ValidationSchemas from '@/utils/validators';

const Container = () => {
  const { handleSubmit, control, reset } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(ValidationSchemas.LOGIN_FORM),
    defaultValues: {
      rememberMe: false
    }
  });
  const classes = UseStyles();
  const [signInQuery, { isFetching }] = useLazySignInUserQuery();

  const signIn: SubmitHandler<Inputs> = (formData: Inputs): void => {
    responseWrapper(signInQuery(formData), {
      onSuccess(user: { loggedUser: AuthUserResponse }) {
        reset();
        console.log(user);
      },
      onError(err) {
        console.log(err);
      }
    });
  };

  return (
    <div className={classes['login-container']}>
      <View onSignIn={signIn} jss={classes} formState={{ formLoading: isFetching, handleSubmit, control }} />
    </div>
  );
};
Container.displayName = 'LoginContainer';
export default withLayout('nude')(Container);
