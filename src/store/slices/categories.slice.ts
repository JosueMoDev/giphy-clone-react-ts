import {createSlice} from '@reduxjs/toolkit';
import {type CategoryInitialState} from '../interfaces';
// import type {PayloadAction} from '@reduxjs/toolkit';
const initialState: CategoryInitialState = {
  categories: [],
  subcategories: [],
  selected: null,
};
export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});
export const fa = categorySlice.actions;
