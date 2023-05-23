import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { IUser } from '@/common/interfaces/user';

type UserType<T> = T | null;
export interface AuthState {
  user: UserType<IUser>;
}

export const initialState: AuthState = {
  user: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthState, { payload }: PayloadAction<{ user: IUser | null; token: string | null }>) => {
      // token is here for middleware
      state.user = payload.user;
    },
    updateUser: (state: AuthState, { payload }: PayloadAction<Partial<UserType<IUser>>>) => {
      state.user = {
        ...state.user,
        ...payload
      } as UserType<IUser>;
    }
  }
});

export const { setUser, updateUser } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoggedUser = (state: RootState) => !!state.auth.user;
export default authSlice;
