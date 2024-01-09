export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const products = await response.json();

    return products;
  } catch (error) {
    throw error;
  }
};
