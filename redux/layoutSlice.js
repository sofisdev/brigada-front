/* eslint-disable no-param-reassign */
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

import { getLayout } from '../repository/platformApi'

export const fetchLayoutAsync = createAsyncThunk(
    'layout/fetchLayout',
    async () => {
      const response = await getLayout();
      return response.data;
    },
  );

export const layoutSlice = createSlice({
	name: 'layout',
	initialState: {
        value: [],
        status: 'idle',
      },
	reducers: {
		addLayout: (state, action) => {
			const newState = [...state.value, ...action.payload];
			state.push(newState);
		},

	},
    extraReducers: builder => {
        builder
          .addCase(fetchLayoutAsync.pending, state => {
            state.status = 'loading';
          })
          .addCase(fetchLayoutAsync.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.value = action.payload;
          });
      },
});


export const { addLayout } = layoutSlice.actions;

// Selectors
export const selectLayout = state => state?.layout?.value;

export default layoutSlice.reducer;