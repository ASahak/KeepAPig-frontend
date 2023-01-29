import React, { SyntheticEvent, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/slices/auth';
import View from './view';
import { useUploadAvatarMutation } from '@/graphql/user/mutations/index.graphql-gen';

const Container = () => {
  const [uploadAvatarMutation, uploadAvatarMutationResult] = useUploadAvatarMutation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { avatar = '' } = useSelector(selectUser)!;

  const triggerOnFile = useCallback(() => fileInputRef.current?.click(), []);

  const fileChange = useCallback((file: SyntheticEvent) => {
    const { files } = file.target as HTMLInputElement;
    uploadAvatarMutation({ file: files?.[0] });
  }, []);
  // console.log(uploadAvatarMutationResult);
  return <View avatar={avatar} fileInputRef={fileInputRef} triggerOnFile={triggerOnFile} fileChange={fileChange} />;
};
Container.displayName = 'MySettingAvatarWrapperContainer';
export default React.memo(Container);
