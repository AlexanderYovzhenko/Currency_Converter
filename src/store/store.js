import { configureStore } from '@reduxjs/toolkit';
import queriesApiLayer from './queriesApiLayerSlice';

export const store = configureStore({
  reducer: {
    queriesApiLayer,
  },
});
