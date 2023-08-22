import { materialActions } from "../slices/materialSlice";
import { addMaterialApi, loadMaterialApi } from "../../api/material";

export const addMaterial = ({ calculatedTotal }: any) => (dispatch: any) => {
  addMaterialApi({ calculatedTotal })
    .then(({ data }) => { dispatch(materialActions.addMaterialHistory(data)) });
};

export const loadMaterial = () => (dispatch: any) => {
  loadMaterialApi()
    .then(({ data }) => dispatch(materialActions.loadMaterialHistory({ materialHistory: data })));
};
