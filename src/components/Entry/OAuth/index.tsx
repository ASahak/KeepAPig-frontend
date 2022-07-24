import React from 'react';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import UseStyles from './styles';

const OAuth = () => {
    const classes = UseStyles();

    const googleAuth = () => {
        window.open('http://localhost:5000/v1/auth/google', '_self');
    };

    return (
        <Box className={classes['oauth-container']}>
            <GoogleIcon color="error" fontSize="large" onClick={googleAuth} />
            <LinkedInIcon color="info" fontSize="large" />
            <FacebookIcon color="primary" fontSize="large" />
        </Box>
    );
};
export default React.memo(OAuth);
