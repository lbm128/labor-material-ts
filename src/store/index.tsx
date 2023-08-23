import { PreloadedState, combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { laborSlice } from './slices/laborSlice';
import { materialSlice } from './slices/materialSlice';

const isLocal = process.env.NODE_ENV === 'development';

export const rootReducer = combineReducers({
  labor: laborSlice.reducer,
  material: materialSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: isLocal,
    middleware: (getDefaultMiddleware) => {
      if (isLocal) return getDefaultMiddleware().concat(logger);
      return getDefaultMiddleware({
      //   serializableCheck: {
      //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      //   },
      });
    },
  });
  // const persistor = persistStore(store);
  return { store/*, persistor*/ };
};

export type AppStore = ReturnType<typeof setupStore>['store'];
export type AppDispatch = AppStore['dispatch'];

// export default configureStore({
//   reducer: {
//     labor: laborSlice.reducer,
//     material: materialSlice.reducer
//   },
//   middleware: [logger, thunk],
//   devTools: true
// });
