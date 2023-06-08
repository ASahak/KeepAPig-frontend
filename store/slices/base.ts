import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { ROUTER_ANIMATION_STATUS } from '@/common/enums';

export interface BaseState {
  routerAnimationStatus: ROUTER_ANIMATION_STATUS;
}

export const initialState: BaseState = {
  routerAnimationStatus: ROUTER_ANIMATION_STATUS.NOT_STARTED
};

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setRouterAnimating: (state: BaseState, { payload }: PayloadAction<ROUTER_ANIMATION_STATUS>) => {
      state.routerAnimationStatus = payload;
    }
  }
});

export const { setRouterAnimating } = baseSlice.actions;
export const selectBase = (state: RootState) => state.base;
export const selectRouterAnimationCompleted = (state: RootState) => state.base.routerAnimationStatus === ROUTER_ANIMATION_STATUS.COMPLETED;
export default baseSlice;
