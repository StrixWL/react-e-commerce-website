import productDetailItem from "../../data/data";

const getProductFromId = (productId) => {
  const product = productDetailItem.find((item) => item.id === productId);

  return product;
};
export default getProductFromId;
