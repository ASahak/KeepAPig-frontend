import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';
import { useRTKDispatch } from '@/store/hooks';
import { setUser } from '@/store/slices/auth';
import { IUser, JwtPayload } from '@/common/interfaces/user';
import { Cookie } from '@/services';
import { ROUTES } from '@/common/constants';
import { useLazyFetchUserQuery, FetchUserResponse } from '@/graphql/user/queries/index.graphql-gen';
import { responseWrapper } from '@/utils/helpers';
import { getError } from '@/hooks';

export const useAuth = () => {
  const router = useRouter();
  const [fetchUserQuery] = useLazyFetchUserQuery();
  const rtkDispatch = useRTKDispatch();

  const signIn = (userPayload: { user: IUser; token: string }) => {
    rtkDispatch(setUser(userPayload));
  };

  const signOut = () => {
    rtkDispatch(setUser({ user: null, token: null }));
  };

  const checkLoggedUser = async () => {
    const token = Cookie.getToken;
    if (!!token) {
      const { exp, sub } = jwt_decode(token) as JwtPayload;
      const isExpired = Date.now() >= exp * 1000;
      if (isExpired) {
        signOut();
        await router.push(ROUTES.signIn);
      } else {
        responseWrapper(fetchUserQuery({ _id: sub }), {
          onSuccess(user: { fetchedUser: FetchUserResponse }) {
            signIn({ user: user.fetchedUser.user, token });
          },
          onError(err) {
            getError(err).subscribe((value) => {
              console.error(value);
              signOut();
            });
          }
        });
      }
    }
  };

  return {
    signIn,
    signOut,
    checkLoggedUser
  };
};
