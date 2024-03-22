import styles from './SearchButton.module.css'
import searchIcon from "./../../../assets/search.svg";

const SearchButton = ({ onClick, className }) => {
    return (
        <button onClick={onClick || (() => {})} className={styles["search-button"] + ' ' + (className || '')}>
            <img src={searchIcon} alt="Search" />
        </button>
    )
}

export default SearchButton;