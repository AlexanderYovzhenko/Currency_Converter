import { createSlice } from '@reduxjs/toolkit';
import {
  getConvert,
} from '../api/queriesApiLayer';


const initialState = {
  resultConvert: {},
  isLoading: false,
  error: null,
  placeholder: '15 usd in rub' 
};

export const queriesApiLayerSlice = createSlice({
  name: 'queriesApiLayer',
  initialState,
  reducers: {
    changePlaceholder(state, action) {
      state.placeholder = action.payload;
    },
    changeError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [getConvert.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      const { response } = action.payload;
      state.resultConvert = response;
    },
    [getConvert.pending.type]: (state) => {
      state.resultConvert = {};
      state.error = '';
      state.isLoading = true;
    },
    [getConvert.rejected.type]: (state, action) => {
      state.resultConvert = {};
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { changePlaceholder, changeError } = queriesApiLayerSlice.actions;

export default queriesApiLayerSlice.reducer;
