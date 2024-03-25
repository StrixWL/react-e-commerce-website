import styles from './SearchButton.module.css'
import searchIcon from "./../../../assets/search.svg";
import { useNavigate } from 'react-router';

const SearchButton = ({ onClick, className, setShowNav }) => {
    const navigate = useNavigate();
    return (
        <button onClick={onClick || (() => (navigate('/search'), setShowNav(false)))} className={styles["search-button"] + ' ' + (className || '')}>
            <img src={searchIcon} alt="Search" />
        </button>
    )
}

export default SearchButton;