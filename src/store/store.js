import { configureStore } from "@reduxjs/toolkit";
import xyz from "./slices/cartSlices";
import abc from "./slices/wishlistSlices";

const store = configureStore({
  reducer: {
    cart: xyz,
    wish: abc,
  },
});

export default store;
