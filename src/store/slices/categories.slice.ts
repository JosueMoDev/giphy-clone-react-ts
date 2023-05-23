import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

export interface CategoryInitialState {
  categories: Category[];
  subcategories: Subcategory[];
  selected: any;
}
interface Category {
  name: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  name: string;
}
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
