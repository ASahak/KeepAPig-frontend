import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import View from './view';
import { Inputs } from './types';
import ValidationSchemas from '@/utils/validators';
import { useLazyVerifyAuthCodeQuery } from '@/graphql/user/queries/index.graphql-gen';
import { responseWrapper } from '@/utils/helpers';
import { getError } from '@/utils/helpers';
import { selectUser } from '@/store/slices/auth';
import { showToast, useLiveStates } from '@/hooks';
import { ComponentPropTypes } from './types';

const Container: React.FC<ComponentPropTypes> = ({ onNext }) => {
  const { _id } = useSelector(selectUser) || {};
  const [verifyAuthCodeQuery, { isFetching }] = useLazyVerifyAuthCodeQuery();
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(ValidationSchemas.AUTH_CODE),
    defaultValues: {
      code: ''
    }
  });
  const liveState = useLiveStates({
    _id
  });

  const onSubmit = (data: Inputs) => {
    responseWrapper(verifyAuthCodeQuery({ _id: (liveState.current as any)._id, code: data.code }), {
      onSuccess() {
        onNext();
      },
      onError(err) {
        getError(err).subscribe(async (value) => {
          showToast({ type: 'error', message: value });
        });
      }
    });
  };

  return <View formState={{ handleSubmit, control, errors, formLoading: isFetching }} onSubmit={onSubmit} />;
};
Container.displayName = 'AuthCodeContainer';
export default React.memo(Container);
