import { Outlet, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from './Layout.module.css'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
	const location = useLocation()

	useEffect(() => window.scrollTo(0, 0), [location])
	return (
		<div className={styles.layout}>
			<Header />
			<Outlet />
			<div className="pb-[500px]">

			</div>
		</div>

	);
};



export default Layout;
