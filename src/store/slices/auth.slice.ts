import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';
import {type AuthInitialState, Status} from '../interfaces';
const initialState: AuthInitialState = {
  status: Status.notAuthenticated,
  isLogginFormActive: true,
  passwordVisibility: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});
export const auth = authSlice.actions;
