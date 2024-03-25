import styles from "./ServicePerks.module.css";
import truckIcon from '../../../assets/truck.svg'
import tagIcon from '../../../assets/tag.svg'
import exchangeIcon from '../../../assets/exchange.svg'
import reviewsIcon from '../../../assets/reviews.svg'

const ServicePerks = () => {
	return (
		<div className={styles['wrapper']}>
            <div className={styles['service-perks']}>
                <div className={styles['free-shipping']}>
                    <img src={truckIcon} />
                    <h3>Free shipping</h3>
                    <p>Order today, receive in 12 Days MAX</p>
                </div>
                <div className={styles['price-match']}>
                    <img src={tagIcon} />
                    <h3>Price-match guarantee</h3>
                    <p>Safe money when ordering with us</p>
                </div>
                <div className={styles['hassle-free']}>
                    <img src={exchangeIcon} />
                    <h3>Hassle-free exchange</h3>
                    <p>Receive a slip for exchanges</p>
                </div>
                <div className={styles['reviews']}>
                    <img src={reviewsIcon} />
                    <h3>5.0 Reviews</h3>
                    <p>Customer satisfaction #1 priority</p>
                </div>
            </div>
		</div>
	);
};

export default ServicePerks;
