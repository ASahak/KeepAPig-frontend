import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/store/slices/auth';
import settingsReducer from '@/store/slices/settings';
import { api } from '@/graphql/user/mutations/index.graphql-gen';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [authReducer.name]: authReducer.reducer,
  [settingsReducer.name]: settingsReducer.reducer
});

export default rootReducer;
