import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authSlice } from '@/store/slices/auth';
import { LocalStorage, Cookie } from '@/services';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: authSlice.actions.setUser,
  effect: async (action, listenerApi) => {
    console.log(action.payload.token);
    Cookie.setToken(action.payload.token);
    LocalStorage.set('user', {
      access_token: action.payload.token,
      ...action.payload.user
    });
    listenerApi.cancelActiveListeners();
  }
});

export default listenerMiddleware;
