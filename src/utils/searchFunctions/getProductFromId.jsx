import { getProductById } from "../../service/ProductService";

const getProductFromId = async  (productId) => {
  const product = await  getProductById(productId);
  return product;
};
export default getProductFromId;
