import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@store/slices/auth';

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;
