import {configureStore} from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
