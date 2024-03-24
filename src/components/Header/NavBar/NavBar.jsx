import styles from "./NavBar.module.css";
import NavBarLink from "./NavBarLink/NavBarLink";
import DropDownMenu from "../../ui/DropDownMenu/DropDownMenu";
import { locations } from "../../../data/locations";
import useLocationHook from "../../../hooks/useLocation";
import { useLocation } from "react-router-dom";
import githubLogo from '../../../assets/github.png'
import instagramLogo from '../../../assets/instagram.svg'
import facebookLogo from '../../../assets/facebook.svg'
import loginIcon from '../../../assets/login.svg'
import { Link } from "react-router-dom";

const NavBar = ({showNav, setShowNav}) => {
    const location = useLocation();
	const { currentLocation, changeLocation } = useLocationHook();
    const routes = ["product", "search", "catalog", "tracking", "blog", "contact"]
    return (
        <nav className={styles['nav-bar'] + (showNav ? (' ' + styles['active']) : '')}>
            <ul className={styles['nav-items']}>
                <NavBarLink path="" name="Home" location={location} setShowNav={setShowNav} />
                {routes.map((route, key) => <NavBarLink key={key} path={route} name={route[0].toUpperCase() + route.split('').slice(1).join('')} location={location} setShowNav={setShowNav} />)}
            </ul>
            <footer>
                <div className={styles['login-wrapper']}>
                    <Link onClick={() => setShowNav(false)} className={styles['login']} to="/login">
                        <img src={loginIcon}></img>
                        Log in
                    </Link>
                </div>
                <DropDownMenu
                    items={locations}
                    current={currentLocation}
                    onChange={changeLocation}
                    className={styles['dropdown-menu']}
                />
                <div className={styles['socials-wrapper']}>
                    <div className={styles['socials']}>
                        <a href="https://github.com/StrixWL/react-e-commerce-website" target="_blank"><img src={githubLogo}></img></a>
                        <a href="#"><img src={instagramLogo}></img></a>
                        <a href="#"><img src={facebookLogo}></img></a>
                    </div>
                </div>
            </footer>
        </nav>
    );
};

export default NavBar;
