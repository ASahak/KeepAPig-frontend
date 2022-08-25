import React, { useRef } from 'react';
import { getError, showToast, useScript } from '@/hooks';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';
import { Box } from '@mui/material';
import { responseWrapper } from '@/utils/helpers';
import { GOOGLE } from '@/utils/constants';
import { useSignUpGoogleUserMutation, AuthUserResponse } from '@/graphql/user/mutations/index.graphql-gen';
import { useAuth } from '@/hooks';
import { USER_ROLES } from '@/common/enum/user';
import { GoogleUserCredential } from '@/common/interfaces/user';

const GoogleAuth = () => {
  const [sigUpGoogleMutation] = useSignUpGoogleUserMutation();
  const router = useRouter();
  const { signIn } = useAuth();

  const googleBtnRef = useRef<HTMLElement>();
  useScript(GOOGLE.AUTH_SRC, () => {
    const _googleInstance = window.google;
    _googleInstance.accounts.id.initialize({
      client_id: process.env.GOOGLE_AUTH_CLIENT_ID as string,
      callback: handleLogin,
      auto_select: false,
      context: 'signin'
    });
    _googleInstance.accounts.id.renderButton(googleBtnRef.current as HTMLElement, {
      type: 'standard',
      size: 'medium'
    });
  });

  const handleLogin = async (user: any) => {
    try {
      const { email, name, picture, sub } = jwt_decode(user.credential) as GoogleUserCredential;
      responseWrapper(
        sigUpGoogleMutation({
          id: sub,
          email,
          fullName: name,
          avatar: picture,
          role: USER_ROLES.USER
        }),
        {
          onSuccess: (v: { googleCreatedUser: AuthUserResponse }) => {
            signIn(v.googleCreatedUser);
            router.push('/');
          },
          onError: (error) => {
            getError(error).subscribe((value) => {
              showToast({ type: 'error', message: value });
            });
          }
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return <Box ref={googleBtnRef}></Box>;
};

export default React.memo(GoogleAuth);
