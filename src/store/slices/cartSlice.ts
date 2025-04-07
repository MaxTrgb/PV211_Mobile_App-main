import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartState {
  products: number[];
  favorite: number[];
}

const initialState: CartState = {
  products: [],
  favorite: [],
};

export const cartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.products = [...state.products, action.payload];
    },
    addToFavorite: (state, action: PayloadAction<number>) => {
      state.favorite.includes(action.payload)
        ? (state.favorite = [
            ...state.favorite.filter(product => product !== action.payload),
          ])
        : (state.favorite = [...state.favorite, action.payload]);
    },
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      state.favorite = state.favorite.filter(id => id !== action.payload);
    },
    clearFavorites: (state) => {
      state.favorite = [];
    },
  },
});

export const {addToCart, addToFavorite, removeFromFavorite, clearFavorites} = cartSlice.actions;
export default cartSlice.reducer;
