import { materialActions } from "../slices/materialSlice";
import { addMaterialApi, loadMaterialApi } from "../../api/material";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addMaterialAsyncThunk = createAsyncThunk<any, string>(
  'material/addLabor',
  (calculatedTotal, { dispatch, getState }) => {
    addMaterialApi({ calculatedTotal })
      .then(({ data }) => { dispatch(materialActions.addMaterialHistory(data)) });
  }
);

export const loadMaterialAsyncThunk = createAsyncThunk<any, undefined>(
  'material/addMaterial',
  (_, { dispatch, getState }) => {
    loadMaterialApi()
      .then(({ data }) => dispatch(materialActions.loadMaterialHistory(data)));
  }
);
