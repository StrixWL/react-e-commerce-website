import { Outlet, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from './Layout.module.css'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import EmailSub from "../../components/EmailSub/EmailSub";
import Aos from "aos";
import 'aos/dist/aos.css'

const Layout = () => {
	const location = useLocation()
	useEffect(() => {
		Aos.init({duration: 500})
	}, [])
	useEffect(() => window.scrollTo(0, 0), [location])
	return (
		<div className={styles.layout}>
			<Header />
			<Outlet />
			<div data-aos-once="true" data-aos="fade-up">
				<EmailSub />
				<Footer />
			</div>
		</div>
	);
};



export default Layout;
