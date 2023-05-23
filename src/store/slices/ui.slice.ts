import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

export interface UiInitialState {
  alertMessage?: string;
  statusAlert?: boolean;
}

const initialState: UiInitialState = {};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
});
export const a = uiSlice.actions;
