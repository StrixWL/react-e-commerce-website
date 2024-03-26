export const getProduct = async () => {
  const _api = "http://localhost:3000/products";
  const response = await fetch(_api);
  const data = await response.json();
  return data;
};

export const getProductById = async (id) => {
    const _api = `http://localhost:3000/products/${id}`;
    const response = await fetch(_api);
    const data = await response.json();
    return data;
}

export const getProductInfoByTitle = async (title) => {
    const _api = `http://localhost:3000/products?title=${title}`;
    const response = await fetch(_api);
    const data = await response.json();
    console.log(data);
    return data;
}
