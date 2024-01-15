import { savePersistData, clearPersistData, getPersistData } from "./persist-data";

const getUser = () => Promise.resolve({
  id: '1',
  name: 'John',
  token: 'd83jD63UdZ6RS6f70D0'
});

export const login = async () => {
  const userData = await getUser();
  savePersistData('userData', userData);

  const event = new Event('app-chage:user-login')
  window.dispatchEvent(event);

  return userData;
}

export const logout = () => {
  clearPersistData();

  const event = new Event('app-chage:user-login')
  window.dispatchEvent(event);
}

export const getLoginUser = () => {
  return getPersistData('userData');
}

export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=10");
    const products = await response.json();

    return products;
  } catch (error) {
    throw error;
  }
};

export const fetchButchProducts = async ({ limit = 10 }) => {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    const products = await response.json();

    return products;
  } catch (error) {
    throw error;
  }
};

export const fetchProduct = async ({ id }) => {
  if (id === undefined || id === null) {
    return null
  }

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const products = await response.json();

    return products;
  } catch (error) {
    throw error;
  }
};