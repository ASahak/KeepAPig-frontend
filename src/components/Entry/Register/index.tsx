import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Inputs } from './types';
import UseStyles from './styles';
import View from './view';
import { useSignUpUserMutation } from '@graphql/user/mutations/index.graphql-gen';
import GQLInstance from '@utils/GQLInstance';
import ValidationSchemas from '@utils/validators';
import { showToast, getError, ErrorResponse } from '@hooks';

const Container = () => {
    const classes = UseStyles();
    const sigUpMutation = useSignUpUserMutation(GQLInstance());
    const {
        handleSubmit,
        control,
        reset,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(ValidationSchemas.REGISTER_FORM),
    });

    const signUp: SubmitHandler<Inputs> = async (formData: Inputs) => {
        formData.role = 'USER';
        sigUpMutation.mutate(formData, {
            onSuccess: (v) => {
                console.log(v.createdUser); // todo
                reset();
            },
            onError: (error) => {
                getError(error as ErrorResponse, 0).subscribe(value => {
                   showToast({ type: 'error', message: value })
                })
            }
        });
    }

    return <div className={classes['register-container']}>
        <View
            formState={{ handleSubmit, control, formLoading: sigUpMutation.isLoading }}
            jss={classes}
            onSignUp={signUp}
        />
    </div>
}
export default Container;
