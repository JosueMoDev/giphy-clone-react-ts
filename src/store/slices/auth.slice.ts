import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

enum Status {
  authenticated = 'authenticated',
  cheking = 'checking',
  notAuthenticated = 'not-authenticated',
}
export interface AuthInitialState {
  status: Status;
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string | null;
  errorMessage?: string | null;
  isLogginFormActive: boolean;
  passwordVisibility: boolean;
}
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
export const {} = authSlice.actions;
