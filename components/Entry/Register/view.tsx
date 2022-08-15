import React from 'react';
import { Controller } from 'react-hook-form';
import Link from 'next/link';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField, Box, Typography, Chip } from '@mui/material';
import { ComponentPropTypes } from './types';

const View: React.FC<ComponentPropTypes> = ({ formState, jss, onSignUp }) => (
  <div className={jss['register-view']}>
    <h1 className={jss['register-view__title']}>Sign Up</h1>
    <form onSubmit={formState.handleSubmit(onSignUp)}>
      <Controller
        name="fullName"
        control={formState.control}
        render={({ fieldState: { error }, field: { onChange, value } }) => (
          <TextField error={!!error} helperText={error?.message} label="Full Name" size="small" onChange={onChange} value={value || ''} fullWidth variant="outlined" margin="normal" />
        )}
      />
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
      <Controller
        name="confirmPassword"
        control={formState.control}
        render={({ fieldState: { error }, field: { onChange, value } }) => (
          <TextField
            error={!!error}
            helperText={error?.message}
            type="password"
            label="Confirm password"
            size="small"
            onChange={onChange}
            value={value || ''}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        )}
      />
      <Box mt={2}>
        <LoadingButton loading={formState.formLoading} variant="contained" type="submit" fullWidth>
          Sign Up
        </LoadingButton>
      </Box>
      <Box mt={4} mb={3} className={jss['chip-container']}>
        <hr />
        <Chip label="OR" variant="outlined" />
      </Box>
      <Typography paragraph align="center" className={jss['need-account']}>
        Already user?
        <Link href="/login">SIGN IN</Link>
      </Typography>
    </form>
  </div>
);

export default View;
