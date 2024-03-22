import { useEffect, useState } from "react";

function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState("up");

	useEffect(() => {
		let y = window.scrollY;
		let direction = "up";
		const handleScroll = () => {
			if (y < window.scrollY - 1 && direction === "up") {
				direction = "down";
				setScrollDirection(direction);
			} else if (
				y > window.scrollY + 1 &&
				direction === "down" &&
				window.scrollY > 151
			) {
				direction = "up";
				setScrollDirection(direction);
			}
			y = window.scrollY;
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return scrollDirection;
}

export default useScrollDirection;