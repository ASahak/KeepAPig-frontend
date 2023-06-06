import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface SettingsState {
  isEnabled2factorAuth: boolean;
  isSaving: boolean;
}

export const initialState: SettingsState = {
  isEnabled2factorAuth: false,
  isSaving: false
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setIsSaving: (state: SettingsState, { payload }: PayloadAction<boolean>) => {
      state.isSaving = payload;
    },
    setIsEnabled2factorAuth: (state: SettingsState, { payload }: PayloadAction<boolean>) => {
      state.isEnabled2factorAuth = payload;
    }
  }
});

export const { setIsSaving, setIsEnabled2factorAuth } = settingsSlice.actions;
export const selectSettings = (state: RootState) => state.settings;
export default settingsSlice;
