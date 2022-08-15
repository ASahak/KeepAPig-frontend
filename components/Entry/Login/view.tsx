import React from 'react';
import { InferProps } from 'prop-types';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { ComponentPropTypes, DefaultComponentPropTypes, Inputs } from './types';
import { TextField, Checkbox, FormControlLabel, Box, Button, Typography, Chip } from '@mui/material';
import UseStyles from './styles';
import OAuth from '../OAuth';
import ValidationSchemas from '@/utils/validators';

const View: React.FC<InferProps<typeof ComponentPropTypes>> = ({ onSignIn }) => {
  const { handleSubmit, control } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(ValidationSchemas.LOGIN_FORM),
    defaultValues: {
      rememberMe: false
    }
  });
  const classes = UseStyles();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onSignIn(data);
  };

  return (
    <div className={classes['login-view']}>
      <h1 className={classes['login-view__title']}>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ fieldState: { error }, field: { onChange, value } }) => (
            <TextField error={!!error} helperText={error?.message} type="email" label="Email" size="small" onChange={onChange} value={value || ''} fullWidth variant="outlined" margin="normal" />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ fieldState: { error }, field: { onChange, value } }) => (
            <TextField error={!!error} helperText={error?.message} type="password" label="Password" size="small" onChange={onChange} value={value || ''} fullWidth variant="outlined" margin="normal" />
          )}
        />
        <Controller name="rememberMe" control={control} render={({ field: { onChange } }) => <FormControlLabel control={<Checkbox onChange={onChange} />} label="Remember me" />} />
        <Box mt={1}>
          <Button variant="contained" type="submit" fullWidth>
            Sign In
          </Button>
        </Box>
        <Typography paragraph align="right" className={classes['forgot-password']}>
          Forgot password?
        </Typography>
        <Box mt={3} mb={3} className={classes['chip-container']}>
          <hr />
          <Chip label="OR" variant="outlined" />
        </Box>
        <OAuth />
        <Typography paragraph align="center" className={classes['need-account']}>
          Need an account?
          <Link href="/register">SIGN UP</Link>
        </Typography>
      </form>
    </div>
  );
};
View.propTypes = ComponentPropTypes;
View.defaultProps = DefaultComponentPropTypes;
export default View;
