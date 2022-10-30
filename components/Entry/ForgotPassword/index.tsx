import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import View from './view';
import { withLayout } from '@/hoc';
import { Inputs } from './types';
import ValidationSchemas from '@/utils/validators';
import { useSendEmailMutation } from '@/graphql/mail/mutations/index.graphql-gen';
import { responseWrapper } from '@/utils/helpers';
import { showToast, getError } from '@/hooks';
import { MESSAGES } from '@/common/enums';

const Container = () => {
  const [sendEmailMutation, sendEmailMutationResult] = useSendEmailMutation();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(ValidationSchemas.FORGOT_PASSWORD_FORM),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (formData: Inputs): void => {
    responseWrapper(sendEmailMutation({ email: formData.email as string, clientOrigin: location.href as string }), {
      onSuccess: (payload: { sendEmail: boolean }) => {
        if(payload.sendEmail) {
          reset();
          showToast({ type: 'success', message: MESSAGES.SEND_EMAIL.CHECK_EMAIL });
        }
      },
      onError: (error) => {
        getError(error).subscribe((value) => {
          showToast({ type: 'error', message: value });
        });
      }
    });
  };

  return <View formState={{ formLoading: sendEmailMutationResult.isLoading, handleSubmit, control, errors }} onSubmit={onSubmit} />;
};
Container.displayName = 'ForgotPasswordContainer';
export default withLayout('nude')(Container);
