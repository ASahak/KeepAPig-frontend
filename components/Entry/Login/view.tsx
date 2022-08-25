import React from 'react';
import { Controller } from 'react-hook-form';
import Link from 'next/link';
import { ComponentPropTypes } from './types';
import { TextField, Checkbox, FormControlLabel, Box, Button, Typography, Chip } from '@mui/material';
import OAuth from '@/components/Entry/OAuth';
import LoadingButton from '@mui/lab/LoadingButton';

const View: React.FC<ComponentPropTypes> = ({ onSignIn, formState, jss }) => (
  <Box className={jss['login-view']}>
    <h1 className={jss['login-view__title']}>Sign In</h1>
    <form onSubmit={formState.handleSubmit(onSignIn)}>
      <Controller
        name="email"
        control={formState.control}
        render={({ fieldState: { error }, field: { onChange, value } }) => (
          <TextField error={!!error} helperText={error?.message} type="email" label="Email" size="small" onChange={onChange} value={value || ''} fullWidth variant="outlined" margin="normal" />
        )}
      />
      <Controller
        name="password"
        control={formState.control}
        render={({ fieldState: { error }, field: { onChange, value } }) => (
          <TextField error={!!error} helperText={error?.message} type="password" label="Password" size="small" onChange={onChange} value={value || ''} fullWidth variant="outlined" margin="normal" />
        )}
      />
      <Controller name="rememberMe" control={formState.control} render={({ field: { onChange } }) => <FormControlLabel control={<Checkbox onChange={onChange} />} label="Remember me" />} />
      <Box mt={1}>
        <LoadingButton loading={formState.formLoading} variant="contained" type="submit" fullWidth>
          Sign In
        </LoadingButton>
      </Box>
      <Typography paragraph align="right" className={jss['forgot-password']}>
        Forgot password?
      </Typography>
      <Box mt={3} mb={3} className={jss['chip-container']}>
        <hr />
        <Chip label="OR" variant="outlined" />
      </Box>
      <OAuth />
      <Typography paragraph align="center" className={jss['need-account']}>
        Need an account?
        <Link href="/register">SIGN UP</Link>
      </Typography>
    </form>
  </Box>
);
View.displayName = 'LoginView';
export default View;
