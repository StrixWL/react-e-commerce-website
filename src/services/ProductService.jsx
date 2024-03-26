export const getProduct = async () => {
  const response = await fetch('/api/products');
  const data = await response.json();
  return data;
};

export const getProductById = async (id) => {
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    return data;
}
