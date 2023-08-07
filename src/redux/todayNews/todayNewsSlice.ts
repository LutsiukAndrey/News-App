import { createSlice } from '@reduxjs/toolkit';
import { fetchAllNews } from './todayNewsSThunks';

const initialState = {
  allNews: [],
  isLoading: false,
};

const allNewsSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchAllNews.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchAllNews.fulfilled, (state, { payload }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        state.allNews = payload.data;
        state.isLoading = false;
      })
      .addCase(fetchAllNews.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});

export const allNewsReducer = allNewsSlice.reducer;
