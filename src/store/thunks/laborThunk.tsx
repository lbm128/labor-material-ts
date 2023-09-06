import { createAsyncThunk } from '@reduxjs/toolkit';

import { laborActions } from 'store/slices/laborSlice';
import { addLaborApi, loadLaborApi } from 'api/labor';

export const addLaborAsyncThunk = createAsyncThunk<any, string>(
  'labor/addLabor',
  (calculatedTotal, { dispatch, getState }) => {
    addLaborApi({ calculatedTotal }).then(({ data }) => {
      dispatch(laborActions.addLaborHistory(data));
    });
  }
);

export const loadLaborAsyncThunk = createAsyncThunk<any, undefined>(
  'labor/addLabor',
  (_, { dispatch, getState }) => {
    loadLaborApi().then(({ data }) => dispatch(laborActions.loadLaborHistory(data)));
  }
);
