import {configureStore} from '@reduxjs/toolkit';
import {
  authSlice,
  categorySlice,
  favoriteSlice,
  giphySelectedSlice,
  searchSlice,
} from './slices';
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    categories: categorySlice.reducer,
    favorites: favoriteSlice.reducer,
    giphySelected: giphySelectedSlice.reducer,
    search: searchSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
