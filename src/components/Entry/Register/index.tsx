import React, {useState} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Inputs } from './types';
import UseStyles from './styles';
import View from './view';
import { useSignUpUserMutation } from '@graphql/user/mutations/index.graphql-gen';
import GQLInstance from '@utils/GQLInstance';
import ValidationSchemas from '@utils/validators';
import { USER_ROLES, USER_MESSAGES } from '@common/enum/users';
import { showToast, getError, ErrorResponse } from '@hooks';
import { setUser } from '@store/slices/auth';
import { useRTKDispatch } from '@store/hooks';

const Container = () => {
    const classes = UseStyles();
    const sigUpMutation = useSignUpUserMutation(GQLInstance());
    const { handleSubmit, control, reset } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(ValidationSchemas.REGISTER_FORM)
    });
    const navigate = useNavigate();
    const rtkDispatch = useRTKDispatch();

    const signUp: SubmitHandler<Inputs> = async (formData: Inputs) => {
        formData.role = USER_ROLES.USER;
        sigUpMutation.mutate(formData, {
            onSuccess: (v) => {
                showToast({
                    type: 'success',
                    message: USER_MESSAGES.REGISTERED_SUCCESSFULLY,
                    options: { autoClose: 2000 }
                });
                rtkDispatch(setUser(v.createdUser));
                reset();
                navigate('/');
            },
            onError: (error) => {
                getError(error as ErrorResponse, 0).subscribe((value) => {
                    showToast({ type: 'error', message: value });
                });
            }
        });
    };

    return (
        <div className={classes['register-container']}>
            <View formState={{ handleSubmit, control, formLoading: sigUpMutation.isLoading }} jss={classes} onSignUp={signUp} />
        </div>
    );
};
export default Container;
