import React from 'react';
import { useSelector } from 'react-redux';
import { useRTKDispatch } from '@/store/hooks';
import View from './view';
import { useUpdateUserMutation } from '@/graphql/user/mutations/index.graphql-gen';
import { selectSettings } from '@/store/slices/settings';
import { selectUser, updateUser } from '@/store/slices/auth';
import { setIsEnabled2factorAuth, setIsSaving } from '@/store/slices/settings';
import { getError, responseWrapper } from '@/utils/helpers';
import { showToast } from '@/hooks';

const Container = () => {
  const rtkDispatch = useRTKDispatch();
  const { isEnabled2factorAuth } = useSelector(selectSettings);
  const { _id } = useSelector(selectUser) || {};
  const [updateUserMutation, updateUserMutationResult] = useUpdateUserMutation();

  const onChange = () => {
    const _prevValue: boolean = isEnabled2factorAuth;
    const _value: boolean = !_prevValue;
    rtkDispatch(setIsSaving(true));
    rtkDispatch(setIsEnabled2factorAuth(_value));
    responseWrapper(updateUserMutation({ data: { _id, payload: { isEnabledTwoFactorAuth: _value } } }), {
      onSuccess() {
        rtkDispatch(updateUser({ isEnabledTwoFactorAuth: _value }));
      },
      onError(err) {
        rtkDispatch(setIsEnabled2factorAuth(_prevValue));
        getError(err).subscribe((value) => {
          console.error(value);
          showToast({ type: 'error', message: value });
        });
      },
      onFinally() {
        rtkDispatch(setIsSaving(false));
      }
    });
  };

  return <View isEnabled={isEnabled2factorAuth} isChangingOnServer={updateUserMutationResult.isLoading} onChange={onChange} />;
};
Container.displayName = 'MySettingsTwoFactorContainer';
export default React.memo(Container);
