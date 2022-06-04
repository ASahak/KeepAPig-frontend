import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { IUser } from '@common/interfaces/user';
import { LocalStorage } from '@services/localStorage';

type UserType<T> = T | null;
export interface AuthState {
    user: UserType<IUser>
}

export const initialState: AuthState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state: AuthState, { payload }: PayloadAction<{ user: IUser, token: string }>) => {
            LocalStorage.set('user', {
                access_token: payload.token,
                ...payload.user,
            });
            state.user = payload.user;
        }
    },
})

export const { setUser } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
