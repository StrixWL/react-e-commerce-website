import styles from "./EmailSub.module.css";
import submitIcon from "../../assets/submit.svg";
import instagramLogo from "../../assets/instagram.svg";
import facebookLogo from "../../assets/facebook.svg";
import githubLogo from "../../assets/github.png";
import heartLogo from "../../assets/heart.svg";
import shopLogo from "../../assets/shop.svg";
import validLogo from "../../assets/valid.svg";
import errorLogo from "../../assets/error.svg";
import spinner from "../../assets/spinner.svg";
import { useState } from "react";

// 0 none
// 1 submitting
// 2 submitted
// 3 already submitted
const EmailSub = () => {
	const [state, setState] = useState(0);
	const submitMail = (e) => {
		e.preventDefault();
		setState(1)
		fetch("/api/submit-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: e.target[0].value,
			}),
		}).then((res) => setState(res.status == 200 ? 2 : res.status == 409 ? 3 : 4));
	};
	return (
		<section className={styles["email-sub-wrapper"]}>
			<div className={styles["email-sub"]}>
				<div className={styles["email-sub-content"]}>
					<h1>Subscribe to our emails</h1>
					<p>
						Be the first to know about new collections and exclusive
						offers.
					</p>
					<form
						onSubmit={submitMail}
						className={styles["email-sub-form"]}
					>
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
					<div
						style={{
							display: state ? "flex" : "none",
						}}
						className={styles["thanks-message"]}
					>
						{state == 1 && <img src={spinner}/>}
						{state == 2 && <><img src={validLogo}/><span>Thanks for subscribing!</span></>}
						{state == 3 && <><img src={validLogo}/><span>You have already submitted.</span></>}
						{state == 4 && <><img src={errorLogo}/><span>Error.</span></>}
					</div>
				</div>
			</div>
			<aside className={styles["links-wrapper"]}>
				<div className={styles["links"]}>
					<div className={styles["follow-shop"]}>
						<button className={styles["follow-shop-btn"]}>
							<img
								className={styles["heart-logo"]}
								src={heartLogo}
							/>{" "}
							Follow on{" "}
							<img
								src={shopLogo}
								className={styles["shop-logo"]}
							/>
						</button>
					</div>
					<div className={styles["socials-wrapper"]}>
						<div className={styles["socials"]}>
							<a
								href="https://github.com/StrixWL/react-e-commerce-website"
								target="_blank"
							>
								<img src={githubLogo}></img>
							</a>
							<a href="#">
								<img src={instagramLogo}></img>
							</a>
							<a href="#">
								<img src={facebookLogo}></img>
							</a>
						</div>
					</div>
				</div>
			</aside>
		</section>
	);
};

export default EmailSub;
