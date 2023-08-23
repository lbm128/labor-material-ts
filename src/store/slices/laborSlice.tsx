import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LaborState {
  laborHistory: string[]
};

export const initialState: LaborState = {
  laborHistory: []
}

export const laborSlice = createSlice({
    name: 'labor',
    initialState,
    reducers: {
      loadLaborHistory (state, action: PayloadAction<string[]>) {
        // const { laborHistory } = action.payload;
        state.laborHistory = action.payload;//laborHistory;
      },
      addLaborHistory (state, action: PayloadAction<string>) {
        state.laborHistory.push(action.payload);
      }
    }
  });
  
  export const laborActions = laborSlice.actions;
