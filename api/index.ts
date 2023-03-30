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

function fetchProductById(id: number): Promise<Product> {
  return instance.get(`/products/${id}`);
}

export { fetchProductById };
