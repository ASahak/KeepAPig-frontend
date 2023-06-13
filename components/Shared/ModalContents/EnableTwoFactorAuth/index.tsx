import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import View from './view';
import { useRTKDispatch } from '@/store/hooks';
import { showToast, useLiveStates } from '@/hooks';
import { useCreate2faSecretMutation } from '@/graphql/user/mutations/index.graphql-gen';
import { selectUser, updateUser } from '@/store/slices/auth';
import { getError, responseWrapper } from '@/utils/helpers';

const Container = () => {
  const rtkDispatch = useRTKDispatch();
  const [create2faSecret, create2faSecretResult] = useCreate2faSecretMutation();
  const { _id } = useSelector(selectUser) || {};
  const liveState = useLiveStates({
    _id
  });

  const create2faSecretHandler = () => {
    const request = create2faSecret({ data: { _id: (liveState.current as any)._id ?? '' } });
    responseWrapper(request, {
      onSuccess() {},
      onError(err) {
        getError(err).subscribe((value) => {
          console.error(value);
          showToast({ type: 'error', message: value });
        });
      },
      onFinally() {}
    });

    return request.abort;
  };

  useEffect(() => {
    const unsubscribe = create2faSecretHandler();

    return () => {
      unsubscribe();
    };
  }, []);

  return <View isFetching={create2faSecretResult.isLoading} qrCode={create2faSecretResult.data?.get2faSecret.otpAuthUrl || ''} />;
};
Container.displayName = 'EnableTwoFactorAuthContainer';
export default React.memo(Container);
