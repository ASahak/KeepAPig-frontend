import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import View from './view';
import { useRTKDispatch } from '@/store/hooks';
import { showToast, useLiveStates } from '@/hooks';
import { useCreate2faSecretMutation } from '@/graphql/user/mutations/index.graphql-gen';
import { selectUser, updateUser } from '@/store/slices/auth';
import { getError, responseWrapper } from '@/utils/helpers';
import { setIsEnabled2factorAuth, setIsSaving } from '@/store/slices/settings';
import { useUpdateUserMutation } from '@/graphql/user/mutations/index.graphql-gen';
import { ComponentPropsType } from './types';

const Container: React.FC<ComponentPropsType> = ({ close }) => {
  const rtkDispatch = useRTKDispatch();
  const [create2faSecret, create2faSecretResult] = useCreate2faSecretMutation();
  const [updateUserMutation] = useUpdateUserMutation();
  const { _id } = useSelector(selectUser) || {};
  const liveState = useLiveStates({
    _id
  });

  const create2faSecretHandler = () => {
    const request = create2faSecret({ data: { _id: (liveState.current as any)._id ?? '' } });
    responseWrapper(request, {
      onError(err) {
        getError(err).subscribe((value) => {
          showToast({ type: 'error', message: value });
        });
      }
    });

    return request.abort;
  };

  const codeVerifiedCallback = () => {
    close();
    rtkDispatch(setIsSaving(true));
    rtkDispatch(setIsEnabled2factorAuth(true));
    responseWrapper(updateUserMutation({ data: { _id: (liveState.current as any)._id, payload: { isEnabledTwoFactorAuth: true } } }), {
      onSuccess() {
        rtkDispatch(updateUser({ isEnabledTwoFactorAuth: true }));
      },
      onError(err) {
        rtkDispatch(setIsEnabled2factorAuth(false));
        getError(err).subscribe((value) => {
          showToast({ type: 'error', message: value });
        });
      },
      onFinally() {
        rtkDispatch(setIsSaving(false));
      }
    });
  };

  useEffect(() => {
    const unsubscribe = create2faSecretHandler();

    return () => {
      unsubscribe();
    };
  }, []);

  return <View isFetching={create2faSecretResult.isLoading} qrCode={create2faSecretResult.data?.get2faSecret.otpAuthUrl || ''} onNextAuth={codeVerifiedCallback} />;
};
Container.displayName = 'EnableTwoFactorAuthContainer';
export default React.memo(Container);
