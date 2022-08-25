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
      state.user = payload.user;
    },
  }
});

export const { setUser } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice;
