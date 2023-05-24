import {type Giphy} from '.';

export enum searchStatus {
  searching = 'searching',
  empty = 'empty',
}

export enum searchingType {
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
