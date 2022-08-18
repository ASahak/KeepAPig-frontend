import React from 'react';
// import { Inputs } from './types';
import UseStyles from './styles';
import View from './view';
import { withLayout } from '@/hoc';
// import { useSignUpUserMutation } from '@graphql/user/mutations/index.graphql-gen';

const Container = () => {
  const classes = UseStyles();
  // const sigInMutation = useSignUpUserMutation(GQLInstance());

  const signIn = () => {
    // sigInMutation.mutate(formData,{
    //     onSuccess: () => {
    //     }
    // });
  };

  return (
    <div className={classes['login-container']}>
      <View onSignIn={signIn} />
    </div>
  );
};
Container.displayName = 'Login';
export default withLayout('nude')(Container);
