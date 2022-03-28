import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./service-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export default store;
