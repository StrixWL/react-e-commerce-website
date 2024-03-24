import styles from "./ScrollDown1.module.css";

const ScrollDown1 = ({ className }) => {
	return (
		<div className={className}>
			<div className={styles["center-con"]}>
				<div className={styles["round"]}>
					<div className={styles["cta"]}>
						<span
							className={
								styles["arrow"] +
								" " +
								styles["primera"] +
								" " +
								styles["next"]
							}
						></span>
						<span
							className={
								styles["arrow"] +
								" " +
								styles["segunda"] +
								" " +
								styles["next"]
							}
						></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollDown1;
