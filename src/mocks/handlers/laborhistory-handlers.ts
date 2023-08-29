import { rest } from 'msw';
import { API_BASE } from 'common/constants/api';

const getLaborHistoryRespose = {
  laborHistory: ['$123.00', '$456.00', '$5.00'],
};

const laborHistoryHandlers = [
  rest.get(`${API_BASE}/laborHistory`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...getLaborHistoryRespose }));
  }),
];

export default laborHistoryHandlers;
