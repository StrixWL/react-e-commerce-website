import styles from "./ServiceShowCase.module.css";
import img from '../../assets/imazighenhh.webp'
import { Link } from "react-router-dom";

const ServiceShowCase = () => {
	return (
		<div className={styles['wrapper']}>
			<div className={styles["service-show-case"]}>
                <div className={styles['img']}>
                    <img src={img}/>
                </div>
                <div className={styles['content-wrapper']}>
                    <div className={styles['content']}>
                        <h2>Crafted with Precision, Embracing Tradition.</h2>
                        <p>Our clothing is the embodiment of precision and pride. Each piece is meticulously crafted to ensure you experience the very best in quality. Beyond being mere garments, they carry the rich essence of Amazigh and Rif culture. It's more than just clothing; it's a statement of tradition and craftsmanship that resonates with the spirit of these vibrant cultures.</p>
                        <Link to="/">Collections</Link>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default ServiceShowCase;
