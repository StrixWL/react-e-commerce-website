import styles from "./Home.module.css";
import introVid from "../../assets/introVid.webp";
import ScrollDown1 from "../../components/ui/ScrollDown1/ScrollDown1";
import ScrollDown2 from "../../components/ui/ScrollDown2/ScrollDown2";
import ServiceShowCase from "../../components/ServiceShowCase/ServiceShowCase";
import ServicePerks from "../../components/ServicePerks/ServicePerks";
import BestProducts from "../../components/BestProducts/BestProducts";
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
} from "react-scroll";

const Home = () => {
	return (
		<main>
			<section className={styles["intro"]}>
				<img src={introVid} />
				<Link
					spy={true}
					smooth={true}
					offset={-10}
					duration={700}
					to="products"
					className={styles["scroll"]}
				>
					<ScrollDown1 className={styles["scroll-btn"]} />
					{/* <ScrollDown2 className={styles['scroll-animation1']} />
					<ScrollDown2 className={styles['scroll-animation2']} /> */}

					{/* spent so much time on this but ended up not looking so good : ( */}
				</Link>
			</section>
			<Element>
				<h1 name="products" className={styles["products-header"]}>
					Best products
				</h1>
			</Element>
			<BestProducts />
			<ServicePerks />
			<ServiceShowCase />
		</main>
	);
};

export default Home;
