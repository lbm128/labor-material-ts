import { createSlice } from '@reduxjs/toolkit';

export const laborSlice = createSlice({
    name: 'labor',
    initialState: { laborHistory: [] },
    reducers: {
      loadLaborHistory (state, action) {
        const { laborHistory } = action.payload;
        state.laborHistory = laborHistory;
      },
      addLaborHistory (state, action) {
        state.laborHistory.push(action.payload);
      }
    }
  });
  
  export const laborActions = laborSlice.actions;
