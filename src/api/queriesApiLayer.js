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

const getConvertRub = createAsyncThunk(
  'queriesApiLayer/getConvertRub',
  async (_, thunkAPI) => {
    try {
      const responseUSD = await axios({
        method: 'get',
        headers: {
          'apikey': API_KEY
        },
        url: `${URL_SERVER}?to=RUB&from=USD&amount=1`,
      });

      const responseEUR = await axios({
        method: 'get',
        headers: {
          'apikey': API_KEY
        },
        url: `${URL_SERVER}?to=RUB&from=EUR&amount=1`,
      });

      const joinResponse = [responseUSD.data, responseEUR.data];

      return { response: joinResponse };
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

const getConvertUsd = createAsyncThunk(
  'queriesApiLayer/getConvertUsd',
  async (_, thunkAPI) => {
    try {
      const responseUSD = await axios({
        method: 'get',
        headers: {
          'apikey': API_KEY
        },
        url: `${URL_SERVER}?to=USD&from=RUB&amount=100`,
      });

      const responseEUR = await axios({
        method: 'get',
        headers: {
          'apikey': API_KEY
        },
        url: `${URL_SERVER}?to=USD&from=EUR&amount=1`,
      });

      const joinResponse = [responseUSD.data, responseEUR.data];

      return { response: joinResponse };
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
  getConvertRub,
  getConvertUsd
};
