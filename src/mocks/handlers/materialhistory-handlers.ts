import { rest } from 'msw';

const apiBase = 'http://localhost:4000';

const getMaterialHistoryRespose = {
  materialHistory: ['0.33', '45.00', '9.87'],
};

const materialHistoryHandlers = [
  rest.get(`${apiBase}/materialHistory`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...getMaterialHistoryRespose }));
  }),
];
