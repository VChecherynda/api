import { savePersistData, clearPersistData, getPersistData } from "./persist-data";

export const login = async () => {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR'
      })
    });
    const userData = await response.json();

    savePersistData('userData', userData);

    const event = new Event('app-chage:user-login')
    window.dispatchEvent(event);

    return userData;
  } catch (error) {
    throw error;
  }
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