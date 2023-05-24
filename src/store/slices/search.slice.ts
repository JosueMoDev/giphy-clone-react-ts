import {createSlice} from '@reduxjs/toolkit';
import {
  type SearchInitialState,
  searchStatus,
  searchingType,
} from '../interfaces';
// import type {PayloadAction} from '@reduxjs/toolkit';
const initialState: SearchInitialState = {
  state: searchStatus.empty,
  term: null,
  gifs: [],
  stickers: [],
  total_gifs: 0,
  total_stickers: 0,
  tags: [],
  searchingType: searchingType.gifs,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
});
export const se = searchSlice.actions;
