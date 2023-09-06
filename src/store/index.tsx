/* istanbul ignore file */
import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { laborSlice } from 'store/slices/laborSlice';
import { materialSlice } from 'store/slices/materialSlice';

const isLocal = process.env.NODE_ENV === 'development';

export const rootReducer = combineReducers({
  labor: laborSlice.reducer,
  material: materialSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: isLocal,
    middleware: (getDefaultMiddleware) => {
      if (isLocal) return getDefaultMiddleware().concat(logger);
      return getDefaultMiddleware();
    },
  });
  return { store };
};

export type AppStore = ReturnType<typeof setupStore>['store'];
export type AppDispatch = AppStore['dispatch'];
