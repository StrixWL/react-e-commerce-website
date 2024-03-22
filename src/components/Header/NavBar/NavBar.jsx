import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = ({ className }) => {
    const location = useLocation();
    return (
        <nav className={className}>
            <ul className={styles['nav-items']}>
                <li>
                    <Link to="/" className={location.pathname === "/" ? styles.active : ""}>Home</Link>
                </li>
                <li>
                    <Link to="/product" className={location.pathname === "/product" ? styles.active : ""}>Product</Link>
                </li>
                <li>
                    <Link to="/search" className={location.pathname === "/search" ? styles.active : ""}>Search</Link>
                </li>
                <li>
                    <Link to="/catalog" className={location.pathname === "/catalog" ? styles.active : ""}>Catalog</Link>
                </li>
                <li>
                    <Link to="/tracking" className={location.pathname === "/tracking" ? styles.active : ""}>Tracking</Link>
                </li>
                <li>
                    <Link to="/blog" className={location.pathname === "/blog" ? styles.active : ""}>Blog</Link>
                </li>
                <li>
                    <Link to="/contact" className={location.pathname === "/contact" ? styles.active : ""}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
