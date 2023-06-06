import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authSlice } from '@/store/slices/auth';
import { setIsEnabled2factorAuth } from '@/store/slices/settings';
import { LocalStorage, Cookie } from '@/services';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: authSlice.actions.setUser,
  effect: async (action, listenerApi) => {
    if (!action.payload.token) {
      Cookie.removeCookieByKey('token');
      LocalStorage.remove('user');
    } else {
      Cookie.setToken(action.payload.token);
      LocalStorage.set('user', {
        access_token: action.payload.token,
        ...action.payload.user
      });
      listenerApi.dispatch(setIsEnabled2factorAuth(!!action.payload.user!.isEnabledTwoFactorAuth));
    }
    listenerApi.cancelActiveListeners();
  }
});

export default listenerMiddleware;
