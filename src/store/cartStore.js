import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addDish(dish) {
      this.items.push(dish);
    },
    removeDish(index) {
      this.items.splice(index, 1);
    },
    clearCart() {
      this.items = [];
    },
  },
});
