import React, { SyntheticEvent, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/slices/auth';
import View from './view';
import { useUploadAvatarMutation, UploadAvatarResponse, useDeleteAvatarMutation } from '@/graphql/user/mutations/index.graphql-gen';
import { getError, responseWrapper } from '@/utils/helpers';
import { showToast } from '@/hooks';
import { useRTKDispatch } from '@/store/hooks';
import { updateUser } from '@/store/slices/auth';

const Container = () => {
  const [uploadAvatarMutation, uploadAvatarMutationResult] = useUploadAvatarMutation();
  const [deleteAvatarMutation, deleteAvatarMutationResult] = useDeleteAvatarMutation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const rtkDispatch = useRTKDispatch();
  const { avatar = '' } = useSelector(selectUser) || {};

  const triggerOnFile = useCallback(() => fileInputRef.current?.click(), []);

  const fileChange = useCallback((file: SyntheticEvent) => {
    const { files } = file.target as HTMLInputElement;
    responseWrapper(uploadAvatarMutation({ file: files?.[0] }), {
      onSuccess({ uploadedAvatar: { avatarSrc } }: { uploadedAvatar: UploadAvatarResponse }) {
        rtkDispatch(updateUser({ avatar: avatarSrc }));
      },
      onError(err) {
        getError(err).subscribe((value) => {
          console.error(value);
          showToast({ type: 'error', message: value });
        });
      }
    });
  }, []);

  const deleteAvatar = useCallback(() => {
    responseWrapper(deleteAvatarMutation(), {
      onSuccess() {
        rtkDispatch(updateUser({ avatar: '' }));
      },
      onError(err) {
        getError(err).subscribe((value) => {
          console.error(value);
          showToast({ type: 'error', message: value });
        });
      }
    });
  }, []);

  return (
    <View
      isDeleting={deleteAvatarMutationResult.isLoading}
      deleteAvatar={deleteAvatar}
      key={avatar}
      avatar={avatar}
      fileInputRef={fileInputRef}
      triggerOnFile={triggerOnFile}
      fileChange={fileChange}
      isUploading={uploadAvatarMutationResult.isLoading || deleteAvatarMutationResult.isLoading}
    />
  );
};
Container.displayName = 'MySettingAvatarWrapperContainer';
export default React.memo(Container);
