import { getProductById } from "../../services/ProductService";

const getProductFromId = async  (productId) => {
  const product = await  getProductById(productId);
  return product;
};
export default getProductFromId;
