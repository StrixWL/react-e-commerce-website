import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { locations } from "../data/locations";

const useLocation = () => {
	const [cookies, setCookie] = useCookies(["location"]);
	const [currentLocation, setCurrentLocation] = useState(cookies.location);
	useEffect(() => {
		if (!currentLocation || !locations.includes(currentLocation)) {
			setCookie("location", "EUR € | France");
			setCurrentLocation("EUR € | France");
		}
	}, []);
	const changeLocation = (newLocation) => {
		setCookie("location", newLocation);
		window.location.reload();
	};
	return { currentLocation, changeLocation };
};

export default useLocation;
