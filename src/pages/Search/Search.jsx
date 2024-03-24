import ListItems from "../../components/search-page/MainPage/ItemsList/ListItems";
import SearchBar from "../../components/search-page/SearchBar/SearchBar";

const Search = () => {
  return (
	<section className="search-section">
		<header>
		{/* // SEARCH BAR */}
		<SearchBar />
		</header>
		<main>
		{/* // List of items */}
		<ListItems />
		</main>
		<footer>
			{/* footer */}
		</footer>
	</section>

  );
};

export default Search;
