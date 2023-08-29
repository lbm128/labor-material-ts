import { rest } from 'msw';

const apiBase = 'http://localhost:4000';

const getLaborHistoryRespose = {
  laborHistory: ['$123.00', '$456.00', '$5.00'],
};

const laborHistoryHandlers = [
  rest.get(`${apiBase}/laborHistory`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...getLaborHistoryRespose }));
  }),
];
