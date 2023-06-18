import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import View from './view';
import { Inputs } from './types';
import ValidationSchemas from '@/utils/validators';
import { useLazyVerifyUserByAuthCodeQuery, VerifyUserResponse } from '@/graphql/user/queries/index.graphql-gen';
import { responseWrapper } from '@/utils/helpers';
import { getError } from '@/utils/helpers';
import { selectUser } from '@/store/slices/auth';
import { showToast } from '@/hooks';
import { ComponentPropTypes } from './types';

const Container: React.FC<ComponentPropTypes> = ({ onNext, loggingUserEmail, returnUser }) => {
  const { email } = useSelector(selectUser) || {};
  const [verifyUserByAuthCodeQuery, { isFetching }] = useLazyVerifyUserByAuthCodeQuery();
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

  const onSubmit = (data: Inputs) => {
    responseWrapper(
      verifyUserByAuthCodeQuery({
        email: (email || loggingUserEmail) as string,
        code: data.code,
        returnUser
      }),
      {
        onSuccess(res: { verifiedUser: VerifyUserResponse }) {
          onNext(res.verifiedUser?.user?._id || '');
        },
        onError(err) {
          getError(err).subscribe((value) => {
            showToast({ type: 'error', message: value });
          });
        }
      }
    );
  };

  return <View formState={{ handleSubmit, control, errors, formLoading: isFetching }} onSubmit={onSubmit} />;
};
Container.displayName = 'AuthCodeContainer';
export default React.memo(Container);
