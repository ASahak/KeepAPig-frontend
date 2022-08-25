import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';
import { useRTKDispatch } from '@/store/hooks';
import { setUser } from '@/store/slices/auth';
import { IUser, JwtPayload } from '@/common/interfaces/user';
import { Cookie } from '@/services';
import { PAGE_ROUTES } from '@/utils/constants';

export const useAuth = () => {
  const router = useRouter();
  const rtkDispatch = useRTKDispatch();

  const signIn = (userPayload: { user: IUser; token: string }) => {
    rtkDispatch(setUser(userPayload));
  }

  const signOut = () => {
    rtkDispatch(setUser({ user: null, token: null }));
  }

  const checkLoggedUser = async () => {
    const token = Cookie.getToken;
    if (!!token) {
      const { exp } = jwt_decode(token) as JwtPayload;
      const isExpired = Date.now() >= exp * 1000;
      if (isExpired) {
        signOut();
        await router.push(PAGE_ROUTES.signIn);
      } else {

      }
    }
  }

  return {
    signIn,
    signOut,
    checkLoggedUser,
  }
}
