import { rest } from 'msw';
import { API_BASE } from 'common/constants/api';

const getMaterialHistoryRespose = {
  materialHistory: ['0.33', '45.00', '9.87'],
};

const materialHistoryHandlers = [
  rest.get(`${API_BASE}/materialHistory`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...getMaterialHistoryRespose }));
  }),
];

export default materialHistoryHandlers;
