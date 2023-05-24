import {createSlice} from '@reduxjs/toolkit';
import {type GiphySelectedInitialState} from '../interfaces';
// import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: GiphySelectedInitialState = {};
export const giphySelectedSlice = createSlice({
  name: 'giphySelected',
  initialState,
  reducers: {},
});
export const gif = giphySelectedSlice.actions;
