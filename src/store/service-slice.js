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
      const newArray = state.qoutations.splice(0, state.qoutations.length);
      state.qoutations = newArray;
      state.totalQuantity = state.qoutations.length;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
