import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "services",
  initialState: {
    qoutations: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newQoute = action.payload;
      state.qoutations.push({
        id: newQoute.id,
        price: newQoute.price,
        quantity: 1,
        name: newQoute.title,
      });
      state.totalQuantity = state.qoutations.length;
    },

    clearCart(state) {
      state.qoutations.length = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
