import { createSlice } from '@reduxjs/toolkit';
import {
  getConvert,
} from '../api/queriesApiLayer';


const initialState = {
  resultConvert: {},
  isLoading: false,
  error: null
};

export const queriesApiLayerSlice = createSlice({
  name: 'queriesApiLayer',
  initialState,
  reducers: {},
  extraReducers: {
    [getConvert.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      const { response } = action.payload;
      state.resultConvert = response;
    },
    [getConvert.pending.type]: (state) => {
      state.error = '';
      state.isLoading = true;
    },
    [getConvert.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default queriesApiLayerSlice.reducer;
