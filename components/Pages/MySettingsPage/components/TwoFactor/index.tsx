import React from 'react';
import { useSelector } from 'react-redux';
import { useRTKDispatch } from '@/store/hooks';
import View from './view';
import { useUpdateUserMutation } from '@/graphql/user/mutations/index.graphql-gen';
import { selectSettings } from '@/store/slices/settings';
import { selectUser, updateUser } from '@/store/slices/auth';
import { setIsEnabled2factorAuth, setIsSaving } from '@/store/slices/settings';
import { getError, responseWrapper } from '@/utils/helpers';
import { showToast, useModalState } from '@/hooks';
import { Modal, MODAL_KEYS } from '@/components/Shared/UI';

const Container = () => {
  const rtkDispatch = useRTKDispatch();
  const { isEnabled2factorAuth } = useSelector(selectSettings);
  const { _id } = useSelector(selectUser) || {};
  const [updateUserMutation, updateUserMutationResult] = useUpdateUserMutation();
  const { onClose, isOpen, activeKey, onOpen, contentProps } = useModalState();

  const onChange = () => {
    const _prevValue: boolean = isEnabled2factorAuth;
    const _value: boolean = !_prevValue;
    if (_value) {
      onOpen(MODAL_KEYS.SHOW_TWO_FACTOR_AUTH, { close: onClose });
      return;
    } else {
      rtkDispatch(setIsSaving(true));
      rtkDispatch(setIsEnabled2factorAuth(_value));
      responseWrapper(updateUserMutation({ data: { _id: _id as string, payload: { isEnabledTwoFactorAuth: _value } } }), {
        onSuccess() {
          rtkDispatch(updateUser({ isEnabledTwoFactorAuth: _value }));
        },
        onError(err) {
          rtkDispatch(setIsEnabled2factorAuth(_prevValue));
          getError(err).subscribe((value) => {
            showToast({ type: 'error', message: value });
          });
        },
        onFinally() {
          rtkDispatch(setIsSaving(false));
        }
      });
    }
  };

  return (
    <>
      <View isEnabled={isEnabled2factorAuth} isChangingOnServer={updateUserMutationResult.isLoading} onChange={onChange} />
      <Modal activeKey={activeKey} close={onClose} isOpen={isOpen} contentProps={contentProps} />
    </>
  );
};
Container.displayName = 'MySettingsTwoFactorContainer';
export default React.memo(Container);
