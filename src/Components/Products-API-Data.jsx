import { useEffect } from "react";

const Products_API_Data = ({ onDataFetch, onError }) => {
	useEffect(() => {
		(async function () {
			try {
				console.log("Fetching products from API...");
				const res = await fetch("https://fakestoreapi.com/products");
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const jsonRes = await res.json();
				console.log("API Response:", jsonRes);
				onDataFetch(jsonRes);
			} catch (error) {
				console.error("Error fetching products:", error);
				if (onError) {
					onError(error);
				} else {
					onDataFetch([]);
				}
			}
		})();
	}, [onDataFetch, onError]);
	return <div></div>;
};

export default Products_API_Data;
