import { Outlet, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from './Layout.module.css'

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<Outlet />
			<div className="p-[500px]">

			</div>
		</div>

	);
};



export default Layout;
