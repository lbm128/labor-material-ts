import { createSlice } from '@reduxjs/toolkit';

export const materialSlice = createSlice({
    name: 'material',
    initialState: { materialHistory: [] },
    reducers: {
      loadMaterialHistory (state, action) {
        const { materialHistory } = action.payload;
        state.materialHistory = materialHistory;
      },
      addMaterialHistory (state, action) {
        state.materialHistory.push(action.payload);
      }
    }
  });
  
  export const materialActions = materialSlice.actions;
  