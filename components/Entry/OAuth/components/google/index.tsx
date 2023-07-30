import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';
import { Box, Button } from '@chakra-ui/react';
import { responseWrapper } from '@/utils/helpers';
import { showToast, useScript } from '@/hooks';
import { getError } from '@/utils/helpers';
import { GlobalConstants } from '@/common/constants';
import { useSignUpGoogleUserMutation, AuthUserResponse } from '@/graphql/user/mutations/index.graphql-gen';
import { useAuth } from '@/hooks';
import { USER_ROLES } from '@/common/enums/user';
import { IUser, GoogleUserCredential } from '@/common/interfaces/user';

const GoogleAuth = () => {
  const [sigUpGoogleMutation, sigUpGoogleMutationResult] = useSignUpGoogleUserMutation();
  const router = useRouter();
  const { signIn } = useAuth();

  const googleBtnRef = useRef<HTMLDivElement>(null);
  useScript(GlobalConstants.GOOGLE.AUTH_SRC, () => {
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
            signIn(v.googleCreatedUser as { user: IUser; token: string });
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
  return (
    <Box display="inline-block" position="relative">
      {sigUpGoogleMutationResult.isLoading ? <Button isLoading variant="google-auth-btn" /> : null}
      <Box ref={googleBtnRef} opacity={sigUpGoogleMutationResult.isLoading ? 0 : 1}></Box>
    </Box>
  );
};

export default React.memo(GoogleAuth);
