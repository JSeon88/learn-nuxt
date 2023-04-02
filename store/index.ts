import { fetchCartItems } from '~/api';

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface State {
  cartItems: Product[];
}

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

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
  setCartItems(state: State, cartItems: Product[]) {
    state.cartItems = cartItems.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }));
  },
};

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }: any) {
    const { data }: any = await fetchCartItems();
    commit('setCartItems', data);
  },
  async nuxtServerInit(storeContext: any) {
    await storeContext.dispatch(FETCH_CART_ITEMS);
  },
};
