import { createSlice } from '@reduxjs/toolkit';
import {
  getConvert, getConvertRub, getConvertUsd,
} from '../api/queriesApiLayer';


const initialState = {
  resultConvert: {},
  isLoading: false,
  error: null,
  placeholder: '15 usd in rub',
  defaultCurrency: '',
  courses: []
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
    changeCurrency(state, action) {
      state.defaultCurrency = action.payload;
    }
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
    [getConvertRub.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      const { response } = action.payload;
      state.courses = response;
    },
    [getConvertRub.pending.type]: (state) => {
      state.courses = [];
      state.error = '';
      state.isLoading = true;
    },
    [getConvertRub.rejected.type]: (state, action) => {
      state.courses = [];
      state.isLoading = false;
      state.error = action.payload;
    },
    [getConvertUsd.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      const { response } = action.payload;
      state.courses = response;
    },
    [getConvertUsd.pending.type]: (state) => {
      state.courses = [];
      state.error = '';
      state.isLoading = true;
    },
    [getConvertUsd.rejected.type]: (state, action) => {
      state.courses = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { changePlaceholder, changeError, changeCurrency } = queriesApiLayerSlice.actions;

export default queriesApiLayerSlice.reducer;
