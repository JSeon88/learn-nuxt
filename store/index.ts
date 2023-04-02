interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface State {
  cartItems: Product[];
}

export const state = (): State => ({
  cartItems: [],
});

export const mutations = {
  addCartItem(state: State, cartItem: Product) {
    state.cartItems.push({
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    });
  },
};
