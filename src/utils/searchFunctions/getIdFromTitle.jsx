import productDetailItem from "../../data/data";

const productNameToIdMap = {};
productDetailItem.forEach(product => {
  productNameToIdMap[product.title] = product.id;
});

const getProductIdByName = productName => {
  return productNameToIdMap[productName];
};

export default getProductIdByName;