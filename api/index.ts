import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

function fetchProducts(): Promise<Product[]> {
  return instance.get(`/products`);
}

function fetchProductById(id: number): Promise<Product> {
  return instance.get(`/products/${id}`);
}

function fetchProductsByKeyword(keyword: string): Promise<Product[]> {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  });
}

function createCartItem(cartItem: Product): Promise<Product> {
  return instance.post(`/carts`, cartItem);
}

export {
  fetchProducts,
  fetchProductById,
  fetchProductsByKeyword,
  createCartItem,
};
