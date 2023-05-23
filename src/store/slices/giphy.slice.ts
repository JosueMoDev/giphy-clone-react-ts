import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

export interface GiphySelectedInitialState {
  giphy?: Giphy;
  giphy_id?: string;
  giphyRelatedTags?: GiphyRelatedtag | GiphyRelatedtag[];
  giphisRelated?: Giphy[];
  user?: GiphyUser;
  giphyTags?: string[] | string;
}
interface GiphyUser {
  name: string;
  socialMedia: string;
}
export interface Giphy {
  name: string;
  image: string;
}
interface GiphyRelatedtag {
  name: string;
  id: string;
}
const initialState: GiphySelectedInitialState = {};
export const giphySelectedSlice = createSlice({
  name: 'giphySelected',
  initialState,
  reducers: {},
});
export const {} = giphySelectedSlice.actions;
