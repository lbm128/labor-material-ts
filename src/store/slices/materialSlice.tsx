import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MaterialState {
  materialHistory: string[]
};

export const initialState: MaterialState = {
  materialHistory: []
}

export const materialSlice = createSlice({
    name: 'material',
    initialState,
    reducers: {
      loadMaterialHistory (state, action: PayloadAction<string[]>) {
        // const { materialHistory } = action.payload;
        state.materialHistory = action.payload;//materialHistory;
      },
      addMaterialHistory (state, action: PayloadAction<string>) {
        state.materialHistory.push(action.payload);
      }
    }
  });
  
  export const materialActions = materialSlice.actions;
  