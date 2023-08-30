import { initialState } from 'store/slices/laborSlice';

const preloadedState = {
  ...initialState,
  laborHistory: ['$123.00', '$55.32'],
};

export default preloadedState;
