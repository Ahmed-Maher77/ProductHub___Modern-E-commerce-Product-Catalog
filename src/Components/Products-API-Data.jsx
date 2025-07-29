import { useEffect } from "react";

const Products_API_Data = ({ onDataFetch }) => {
	useEffect(() => {
		(async function () {
			try {
				const res = await fetch("https://fakestoreapi.com/products");
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const jsonRes = await res.json();
				console.log("API Response:", jsonRes);
				onDataFetch(jsonRes);
			} catch (error) {
				console.error("Error fetching products:", error);
				onDataFetch([]);
			}
		})();
	}, []);
	return <div></div>;
};

export default Products_API_Data;
