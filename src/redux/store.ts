import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from './theme/themeSlice';
import { allNewsReducer } from './todayNews/todayNewsSlice';

const themePersistConfig = {
  key: 'theme',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  storage,
};
const allNewsConfig = {
  key: 'news',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, no-undef
    theme: persistReducer(themePersistConfig, themeReducer),
    allNews: persistReducer(allNewsConfig, allNewsReducer),
  },
  middleware,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const persistor = persistStore(store);
