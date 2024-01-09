import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { quantity = 1 } = action.payload;
      const productToAdd = action.payload;
      const existingProduct = state.items.find(item => item._id === productToAdd._id);

      if (!existingProduct) {
        state.items.push({ ...productToAdd, quantity });
        state.total += Number(productToAdd.price) * quantity;
      } else {
        state.total += Number(existingProduct.price) * quantity;
        existingProduct.quantity += quantity;
      }
    },
    removeFromCart: (state, action) => {
      const removedProductId = action.payload;
      const removedProduct = state.items.find(item => item._id === removedProductId);

      if (removedProduct) {
        state.total -= Number(removedProduct.price) * removedProduct.quantity;
        state.items = state.items.filter(item => item._id !== removedProductId);
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.items.find(item => item._id === itemId);

      if (itemToUpdate) {
        itemToUpdate.quantity++;
        state.total += Number(itemToUpdate.price);
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.items.find(item => item._id === itemId);

      if (itemToUpdate) {
        if (itemToUpdate.quantity > 1) {
          itemToUpdate.quantity--;
          state.total -= Number(itemToUpdate.price);
        } else {
          state.total -= Number(itemToUpdate.price);
          state.items = state.items.filter(item => item._id !== itemId);
        }
      }
    }
  }
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;