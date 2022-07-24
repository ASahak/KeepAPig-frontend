import React from 'react';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import UseStyles from './styles';

const OAuth = () => {
    const classes = UseStyles();

    return (
        <Box className={classes['oauth-container']}>
            <GoogleIcon color="error" fontSize="large" />
            <LinkedInIcon color="info" fontSize="large" />
            <FacebookIcon color="primary" fontSize="large" />
        </Box>
    );
};
export default React.memo(OAuth);
