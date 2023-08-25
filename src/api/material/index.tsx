import axios from 'axios';

export const addMaterialApi = ({ calculatedTotal }: any) => {
  return axios.post('/addMaterial', { calculatedTotal });
};

export const loadMaterialApi = () => {
  return axios.get('/materialHistory');
};
