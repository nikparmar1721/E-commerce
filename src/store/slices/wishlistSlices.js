import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isWishOpen: false,
  wishItems: [],
};

const wishlistSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    toggleWish(state, action) {
      state.isWishOpen = action.payload;
    },

    addId(state, action) {
      const newItemId = action.payload.id;

      const existingItem = state.wishItems.find(
        (item) => item.id === newItemId
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.wishItems.push(action.payload);
      }
    },

    removeItem(state, action) {
      state.wishItems = state.wishItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { toggleWish, addId, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
