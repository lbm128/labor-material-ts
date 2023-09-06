/* istanbul ignore file */
import { rest } from 'msw';
import { API_BASE } from 'common/constants/api';

const getLaborHistoryRespose = ['$123.00', '$456.00', '$5.00'];

const addLaborResponse = '$343.00';

const laborHistoryHandlers = [
  rest.get(`${API_BASE}/laborHistory`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(getLaborHistoryRespose));
  }),
  rest.post(`${API_BASE}/addLabor`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(addLaborResponse));
  }),
];

export default laborHistoryHandlers;
