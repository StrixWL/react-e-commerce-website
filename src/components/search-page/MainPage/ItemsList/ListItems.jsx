import ProductItem from "../ProductItem/ProductItem";
import "./ListItems.css";
const ListItems = () => {
  return (
    <section className="list-items-section">
      <section className="product-list">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </section>
    </section>
  );
};

export default ListItems;
