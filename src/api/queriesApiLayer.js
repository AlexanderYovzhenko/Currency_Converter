import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { API_KEY, BadRequest, OK, URL_SERVER } from '../constants/queryVariables';

const getConvert = createAsyncThunk(
  'queriesApiLayer/getConvert',
  async (queryParams, thunkAPI) => {
    try {
      const response = await axios({
        method: 'get',
        headers: {
          'apikey': API_KEY
        },
        url: `${URL_SERVER}${queryParams}`,
      });

      if (response.status === OK) {
        return { response: response.data };
      } 
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data) {
        if (error.response.status === BadRequest) {
          return thunkAPI.rejectWithValue(error.response?.data.error.message);
        } else {
          return thunkAPI.rejectWithValue(error.response?.data.message);
        }
      }
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export {
  getConvert,
};
