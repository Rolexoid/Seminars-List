import { configureStore } from '@reduxjs/toolkit';
import { seminarsApi } from '../api/SeminarsApi';

//создаем хранилище
export default configureStore({
  reducer: {
    [seminarsApi.reducerPath]: seminarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(seminarsApi.middleware),
});