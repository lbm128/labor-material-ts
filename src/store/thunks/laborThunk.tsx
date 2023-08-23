import { laborActions } from "../slices/laborSlice";
import { addLaborApi, loadLaborApi } from "../../api/labor";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const addLaborAsyncThunk = createAsyncThunk<any, undefined,

export const addLabor = ({ calculatedTotal }: any) => (dispatch: any) => {
  addLaborApi({ calculatedTotal })
    .then(({ data }) => { dispatch(laborActions.addLaborHistory(data)) });
};

export const loadLabor = () => (dispatch: any) => {
  loadLaborApi()
    .then(({ data }) => dispatch(laborActions.loadLaborHistory({ laborHistory: data })));
};
