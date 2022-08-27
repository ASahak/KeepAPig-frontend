import React from 'react';
import { Box } from '@mui/material';
import GoogleAuth from './components/google';
import UseStyles from './styles';

const OAuth = () => {
  const classes = UseStyles();

  return (
    <Box className={classes['oauth-container']}>
      <GoogleAuth />
    </Box>
  );
};
export default React.memo(OAuth);
