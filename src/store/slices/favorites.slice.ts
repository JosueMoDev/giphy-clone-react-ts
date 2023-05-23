import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface FavoritesInitialState {
  favorites: [];
}
const initialState: FavoritesInitialState = {
  favorites: [],
};
export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
});
export const {} = favoriteSlice.actions;
