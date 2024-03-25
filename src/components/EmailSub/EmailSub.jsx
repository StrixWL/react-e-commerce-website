import styles from "./EmailSub.module.css";
import submitIcon from "../../assets/submit.svg";
import instagramLogo from '../../assets/instagram.svg'
import facebookLogo from '../../assets/facebook.svg'
import githubLogo from '../../assets/github.png'
import heartLogo from '../../assets/heart.svg'
import shopLogo from '../../assets/shop.svg'

const EmailSub = () => {
	return (
		<section className={styles["email-sub-wrapper"]}>
			<div className={styles["email-sub"]}>
				<div className={styles["email-sub-content"]}>
					<h1>Subscribe to our emails</h1>
					<p>
						Be the first to know about new collections and exclusive
						offers.
					</p>
					<form className={styles["email-sub-form"]}>
						<label htmlFor="email">
							<input
								type="text"
								id="email"
								name="email"
								placeholder="Email"
								required
							/>
							<span>Email</span>
						</label>
						<button type="submit">
							<img src={submitIcon}></img>
						</button>
					</form>
				</div>
			</div>
			<aside className={styles["links-wrapper"]}>
				<div className={styles["links"]}>
					<div className={styles["follow-shop"]}>
                        <button className={styles['follow-shop-btn']}>
                            <img className={styles['heart-logo']} src={heartLogo}/> Follow on <img src={shopLogo} className={styles['shop-logo']} />
                        </button>
                    </div>
					<div className={styles["socials-wrapper"]}>
                        <div className={styles['socials']}>
                            <a href="https://github.com/StrixWL/react-e-commerce-website" target="_blank"><img src={githubLogo}></img></a>
                            <a href="#"><img src={instagramLogo}></img></a>
                            <a href="#"><img src={facebookLogo}></img></a>
                        </div>
                    </div>
				</div>
			</aside>
		</section>
	);
};

export default EmailSub;
