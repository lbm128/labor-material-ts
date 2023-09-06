/* istanbul ignore file */
import laborHistoryHandlers from './laborhistory-handlers';
import materialHistoryHandlers from './materialhistory-handlers';

export const handlers = [...laborHistoryHandlers, ...materialHistoryHandlers];
