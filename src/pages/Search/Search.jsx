import React, { useState, useContext, useEffect } from "react";
import ListItems from "../../components/search-page/MainPage/ItemsList/ListItems";
import SearchBar from "../../components/search-page/SearchBar/SearchBar";
import { ProductTitlesContext } from "../../store/searchContext/searchContext";

const Search = () => {
  const [matchedProducts, setMatchedProducts] = useState([]);
  const productTitles = useContext(ProductTitlesContext);

  const handleSearch = (searchTerm) => {
    const filteredProducts = productTitles.filter((product) =>
      product.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMatchedProducts(filteredProducts);
  };
  return (
    <section className="search-section">
      <header>
        {/* // SEARCH BAR */}
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        {/* // List of items */}
        <ListItems matchedProducts={matchedProducts} />
      </main>
      <footer>{/* footer */}</footer>
    </section>
  );
};

export default Search;
