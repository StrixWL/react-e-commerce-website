import styles from "./Footer.module.css";
import { locations } from "../../data/locations";
import useLocation from "../../hooks/useLocation";
import DropDownMenu from "../ui/DropDownMenu/DropDownMenu";
import aExpressIcon from '../../assets/americanExpress.svg'
import appleIcon from '../../assets/apple.svg'
import googleIcon from '../../assets/google.svg'
import maestroIcon from '../../assets/maestro.svg'
import mastercardIcon from '../../assets/mastercard.svg'
import paypalIcon from '../../assets/paypal.svg'
import shopIcon from '../../assets/shopPay.svg'
import unionIcon from '../../assets/unionPay.svg'
import visaIcon from '../../assets/visa.svg'

const Footer = () => {
	const { currentLocation, changeLocation } = useLocation();

	return (
		<footer className={styles["page-footer"]}>
			<div className={styles["footer-wrapper"]}>
				<div className={styles["country-region"]}>
					<div className={styles["country-region-items"]}>
						<h2>Country/region</h2>
						<div className={styles["dropdown-menu-wrapper"]}>
							<DropDownMenu
								items={locations}
								current={currentLocation}
								onChange={changeLocation}
								className={styles["dropdown-menu"]}
							/>
						</div>
					</div>
				</div>
				<div className={styles["payment-methods"]}>
					<div className={styles['payment-methods-content']}>
						<img src={aExpressIcon}/>
						<img src={appleIcon}/>
						<img src={googleIcon}/>
						<img src={maestroIcon}/>
						<img src={mastercardIcon}/>
						<img src={paypalIcon}/>
						<img src={shopIcon}/>
						<img src={unionIcon}/>
						<img src={visaIcon}/>
					</div>
				</div>
				<div className={styles["footer-credit"]}>
					<p>Done by Brahim, Oualid, Asmaa @ SQLI Oujda ッ</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
