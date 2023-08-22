import { materialActions } from "../slices/materialSlice";
import { addMaterialApi, loadMaterialApi } from "../../api/material";

export const addMaterial = ({ calculatedTotal }) => (dispatch) => {
  addMaterialApi({ calculatedTotal })
    .then(({ data }) => { dispatch(materialActions.addMaterialHistory(data)) });
};

export const loadMaterial = () => (dispatch) => {
  loadMaterialApi()
    .then(({ data }) => dispatch(materialActions.loadMaterialHistory({ materialHistory: data })));
};
