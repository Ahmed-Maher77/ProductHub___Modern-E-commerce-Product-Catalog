import { useEffect, useState, useCallback, useRef } from "react";
import Products_API_Data from "./Products-API-Data";
import Product_Card from "./Product-Card";
import Filters from "./Filters";

const Products = () => {
	// State management
	const [products, setProducts] = useState([]); // All products from API
	const [filterCategoryValue, setFilterCategoryValue] = useState(null);
	const [filterPriceValue, setFilterPriceValue] = useState(null);
	const [filterData, setFilterData] = useState([]); // Filtered products to display
	const [isLoading, setIsLoading] = useState(true);
	const productsContainerRef = useRef(null);

	// Handle API data response
	const handleApiData = useCallback((jsonRes) => {
		setProducts(jsonRes);
		setFilterData(jsonRes);
		setIsLoading(false);
	}, []);

	// Add error handling for API failures
	const handleApiError = useCallback((error) => {
		console.error("API Error:", error);
		setIsLoading(false);
		// Set some fallback data for testing
		setProducts([
			{
				id: 1,
				title: "Test Product",
				price: 99.99,
				category: "electronics",
				image: "https://via.placeholder.com/200x200?text=Test+Product"
			}
		]);
		setFilterData([
			{
				id: 1,
				title: "Test Product",
				price: 99.99,
				category: "electronics",
				image: "https://via.placeholder.com/200x200?text=Test+Product"
			}
		]);
	}, []);

	// Filter handlers
	const filterByCategory = (value) => {
		setFilterCategoryValue(value === "default" ? null : value);
	};

	const filterByPrice = (value) => {
		setFilterPriceValue(value === "default" ? null : value);
	};

	// Render products with loading/empty states
	const showProducts = () => {
		console.log(
			"showProducts called - isLoading:",
			isLoading,
			"products:",
			products.length,
			"filterData:",
			filterData.length
		);

		if (isLoading) {
			return (
				<div className="d-flex justify-content-center align-items-center w-100 h-100">
					<div
						className="loading-state"
						role="status"
						aria-live="polite"
					>
						Loading amazing products...
					</div>
				</div>
			);
		}

		const displayedProducts = filterData.length > 0 ? filterData : products;

		if (displayedProducts.length === 0) {
			return (
				<div className="empty-state" role="status" aria-live="polite">
					No products found. Try adjusting your filters!
				</div>
			);
		}

		return displayedProducts.map((obj) => (
			<Product_Card key={obj.id} data={obj} classFlex="product-flex" />
		));
	};

	// Apply filters to products
	useEffect(() => {
		let filteredArr = [...products];

		// Filter by category
		if (filterCategoryValue) {
			filteredArr = products.filter(
				(el) => el.category === filterCategoryValue
			);
		}

		// Filter by price range
		if (filterPriceValue) {
			if (filterPriceValue === "< 100") {
				filteredArr = filteredArr.filter((el) => el.price < 100);
			} else if (filterPriceValue === "> 100") {
				filteredArr = filteredArr.filter((el) => el.price > 100);
			} else if (filterPriceValue === ">= 500") {
				filteredArr = filteredArr.filter((el) => el.price >= 500);
			}
		}
		setFilterData(filteredArr);
	}, [filterCategoryValue, filterPriceValue, products]);

	// Scroll animation for product cards
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate");
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -20px 0px",
			}
		);

		const productCards = document.querySelectorAll(".product-card");
		productCards.forEach((card) => {
			observer.observe(card);
		});

		return () => {
			productCards.forEach((card) => {
				observer.unobserve(card);
			});
		};
	}, [filterData]); // Re-run when filter data changes

	// useEffect(() => {
	// 	if (filterValue) {
	// 		const { value } = filterValue;
	// 		let filteredArr;
	// 		// if (filterBy === "category") {
	// 			filteredArr = products.filter((ele) => ele.category === value);
	// 		// }
	// 		setFilterData(filteredArr)
	// 	} else {
	// 		setFilterData(products)
	// 	}
	// }, [filterValue]);

	// useEffect(() => {
	// 	if (filterPriceValue) {
	// 		const { value } = filterPriceValue;
	// 		let filteredArr = [];
	// 		if (filterValue) {
	// 			if (value === '< 100') {
	// 				filteredArr = filterValue.filter(el => el.price < 100);
	// 			} else if (value === '> 100') {
	// 				filteredArr = filterValue.filter(el => el.price > 100);
	// 			} else if (value === '>= 500') {
	// 				filteredArr = filterValue.filter(el => el.price >= 500);
	// 			}
	// 		} else {

	// 			if (value === '< 100') {
	// 				filteredArr = products.filter(el => el.price < 100);
	// 			} else if (value === '> 100') {
	// 				filteredArr = products.filter(el => el.price > 100);
	// 			} else if (value === '>= 500') {
	// 				filteredArr = products.filter(el => el.price >= 500);
	// 			}
	// 		}
	// 		// if (filterBy === "category") {
	// 			// filteredArr = products.filter((ele) => ele.category === value);
	// 			// else if (filterBy === "price") {
	// 				// else
	// 				//  {  // default
	// 				// 	filteredArr = [...products];
	// 				// }
	// 		// }
	// 		setFilterData(filteredArr)
	// 	} else {
	// 		setFilterData(products)
	// 	}
	// }, [filterPriceValue]);

	// console.log();

	return (
		<div className="products bg-gray sec-height" role="main">
			<Filters
				data={products}
				filterByCategory={filterByCategory}
				filterByPrice={filterByPrice}
			/>
			<Products_API_Data onDataFetch={handleApiData} onError={handleApiError} />
			<section aria-label="Products grid">
				<div className="container py-4 d-flex flex-wrap product-parent-flex">
					{showProducts()}
				</div>
			</section>
		</div>
	);
};
export default Products;
