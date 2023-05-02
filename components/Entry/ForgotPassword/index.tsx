import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';
import View from './view';
import { withLayout } from '@/hoc';
import { Inputs, PreviewTypes } from './types';
import ValidationSchemas from '@/utils/validators';
import { useSendEmailMutation } from '@/graphql/mail/mutations/index.graphql-gen';
import { useLazyFetchUserQuery, FetchUserResponse } from '@/graphql/user/queries/index.graphql-gen';
import { useChangePasswordMutation, ChangePasswordResponse } from '@/graphql/user/mutations/index.graphql-gen';
import { responseWrapper } from '@/utils/helpers';
import { showToast } from '@/hooks';
import { getError } from '@/utils/helpers';
import { JwtPayload } from '@/common/interfaces/user';
import { MESSAGES, ROUTES } from '@/common/constants';

const Container = () => {
  const router = useRouter();
  const [fetchUserQuery] = useLazyFetchUserQuery();
  const [changePassword, changePasswordResult] = useChangePasswordMutation();
  const [sendEmailMutation, sendEmailMutationResult] = useSendEmailMutation();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue,
    getValues
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(ValidationSchemas.FORGOT_PASSWORD_FORM),
    defaultValues: {
      mode: null,
      email: '',
      password: ''
    }
  });
  const formValues = getValues();

  const onSubmit: SubmitHandler<Inputs> = (formData: Inputs): void => {
    if (formValues.mode === PreviewTypes.SEND_EMAIL) {
      responseWrapper(sendEmailMutation({ email: formData.email as string, clientOrigin: (location.origin + location.pathname) as string }), {
        onSuccess: (payload: { sendEmail: boolean }) => {
          if (payload.sendEmail) {
            reset({ mode: formValues.mode });
            showToast({ type: 'success', message: MESSAGES.SEND_EMAIL.CHECK_EMAIL });
          }
        },
        onError: (error) => {
          getError(error).subscribe((value) => {
            showToast({ type: 'error', message: value });
          });
        }
      });
    } else {
      const { sub } = jwt_decode(router.query.token as string) as JwtPayload;
      responseWrapper(changePassword({ password: formData.password as string, _id: sub as string, token: router.query.token as string }), {
        onSuccess: async ({ changePassword }: { changePassword: ChangePasswordResponse }) => {
          if (changePassword.success) {
            reset({ mode: formValues.mode });
            showToast({ type: 'success', message: MESSAGES.USER.PASSWORD_CHANGED });
            await router.push(ROUTES.signIn);
          }
        },
        onError: (error) => {
          getError(error).subscribe((value) => {
            showToast({ type: 'error', message: value });
          });
        }
      });
    }
  };

  const checkIfTokenAvailable = () => {
    if (router.query.hasOwnProperty('token')) {
      const { exp, sub } = jwt_decode(router.query.token as string) as JwtPayload;
      const isExpired = Date.now() >= exp * 1000;
      if (isExpired) {
        setValue('mode', PreviewTypes.SEND_EMAIL, { shouldValidate: true });
        showToast({ type: 'error', message: MESSAGES.USER.TOKEN_EXPIRED });
      } else {
        setValue('mode', PreviewTypes.LOADING);
        responseWrapper(fetchUserQuery({ _id: sub }), {
          onSuccess: ({ fetchedUser: { user } }: { fetchedUser: FetchUserResponse }) => {
            if (user.resetPasswordToken === router.query.token) {
              setValue('mode', PreviewTypes.PASSWORD, { shouldValidate: true });
            } else {
              setValue('mode', PreviewTypes.SEND_EMAIL, { shouldValidate: true });
              showToast({ type: 'error', message: MESSAGES.USER.TOKEN_IS_NOT_CORRECT });
            }
          },
          onError: (err) => {
            console.error(err);
            setValue('mode', PreviewTypes.SEND_EMAIL, { shouldValidate: true });
          }
        });
      }
    } else {
      setValue('mode', PreviewTypes.SEND_EMAIL, { shouldValidate: true });
    }
  };

  useEffect(() => {
    checkIfTokenAvailable();
  }, []);

  return formValues.mode ? (
    <View previewType={formValues.mode} formState={{ formLoading: sendEmailMutationResult.isLoading || changePasswordResult.isLoading, handleSubmit, control, errors }} onSubmit={onSubmit} />
  ) : null;
};
Container.displayName = 'ForgotPasswordContainer';
export default withLayout('nude')(Container);
