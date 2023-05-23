import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';
import type {Giphy} from './giphy.slice';

enum searchStatus {
  searching = 'searching',
  empty = 'empty',
}

enum searchingType {
  gifs = 'Gifs',
  sickers = 'Stickers',
}

export interface SearchInitialState {
  state: searchStatus;
  term: string | null;
  gifs: Giphy[] | [];
  stickers: Giphy[] | [];
  total_gifs: number | null;
  total_stickers: number | null;
  tags: string[] | [];
  searchingType: searchingType;
}

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
