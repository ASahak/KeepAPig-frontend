import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/store/slices/auth';

const rootReducer = combineReducers({
  [authReducer.name]: authReducer.reducer
});

export default rootReducer;
