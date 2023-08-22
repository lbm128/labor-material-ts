import axios from "axios";

export const addMaterialApi = ({ calculatedTotal }) => {
  return axios.post('/addMaterial', { calculatedTotal });
};

export const loadMaterialApi = () => {
  return axios.get('/materialHistory');
}
