import {createSlice} from '@reduxjs/toolkit';
import {type FavoritesInitialState} from '../interfaces';
// import type {PayloadAction} from '@reduxjs/toolkit';
const initialState: FavoritesInitialState = {
  favorites: [],
};
export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
});
export const fav = favoriteSlice.actions;
