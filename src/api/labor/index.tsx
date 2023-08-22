import axios from "axios";

export const addLaborApi = ({ calculatedTotal }) => {
  return axios.post('/addLabor', { calculatedTotal });
};

export const loadLaborApi = () => {
  return axios.get('/laborHistory');
}
