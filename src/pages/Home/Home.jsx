import styles from './Home.module.css'
import introVid from '../../assets/introVid.webp'
import ScrollDown1 from '../../components/ui/ScrollDown1/ScrollDown1';
import ScrollDown2 from '../../components/ui/ScrollDown2/ScrollDown2';
import ServiceShowCase from './ServiceShowCase/ServiceShowCase';
import ServicePerks from './ServicePerks/ServicePerks';

const Home = () => {
	return (
		<main>
			<section className={styles['intro']}>
				<img src={introVid} />
				<aside className={styles['scroll']}>
					<ScrollDown1 className={styles['scroll-btn']}/>
					{/* <ScrollDown2 className={styles['scroll-animation1']} />
					<ScrollDown2 className={styles['scroll-animation2']} /> */}
					
					{/* spent so much time on this but ended up not looking so good : ( */}
				</aside>
			</section>
			<ServicePerks />
			<ServiceShowCase />

		</main>
	);
};

export default Home;
