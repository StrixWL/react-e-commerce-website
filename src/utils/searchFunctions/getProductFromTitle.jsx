import productDetailItem from "../../data/data";

const getProductInfoByTitle = (title) => {
    const product = productDetailItem.find((product) => product.title === title);
  
    if (product) {
      const { images, price, previousPrice } = product;
      const firstImage = images[0];
      const { original, thumbnail } = firstImage;
      return {
        title: title,
        originalImage: original,
        thumbnailImage: thumbnail,
        price,
        previousPrice,
      };
    } else {
      return null;
    }
  };
  
  export default getProductInfoByTitle;
  