import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LaborState {
  laborHistory: string[];
}

export const initialState: LaborState = {
  laborHistory: [],
};

export const laborSlice = createSlice({
  name: 'labor',
  initialState,
  reducers: {
    loadLaborHistory(state, action: PayloadAction<string[]>) {
      state.laborHistory = action.payload;
    },
    addLaborHistory(state, action: PayloadAction<string>) {
      console.log('add labor history action: ', action.payload);
      console.log('state.laborHistory: ', state.laborHistory);
      state.laborHistory.push(action.payload);
    },
  },
});

export const laborActions = laborSlice.actions;
