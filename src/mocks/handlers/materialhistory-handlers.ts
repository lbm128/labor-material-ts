import { rest } from 'msw';
import { API_BASE } from 'common/constants/api';

const getMaterialHistoryRespose = ['0.33', '45.00', '9.87', '99.87'];

const addMaterialResponse = '343.00';

const materialHistoryHandlers = [
  rest.get(`${API_BASE}/materialHistory`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(getMaterialHistoryRespose));
  }),
  rest.post(`${API_BASE}/addMaterial`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(addMaterialResponse));
  }),
];

export default materialHistoryHandlers;
