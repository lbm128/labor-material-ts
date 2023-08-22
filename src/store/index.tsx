import { configureStore, createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { laborSlice } from './slices/laborSlice';
import { materialSlice } from './slices/materialSlice';

export default configureStore({
  reducer: {
    labor: laborSlice.reducer,
    material: materialSlice.reducer
  },
  middleware: [logger, thunk],
  devTools: true
});
