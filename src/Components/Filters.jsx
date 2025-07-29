import SelectBox from "./SelectBox/SelectBox";

// Price filter options
const priceOptions = [
	{ option: "Select a Range", value: "default" },
	{ option: "< 100", value: "< 100" },
	{ option: "> 100", value: "> 100" },
	{ option: ">= 500", value: ">= 500" },
];

const Filters = ({ data, filterByCategory, filterByPrice }) => {
	if (!data) {
		return null;
	}

	// Get unique categories from data
	const uniqueCategories = Array.from(
		new Set(data.map((obj) => obj.category))
	);

	// Create dynamic category options
	const categoryOptions = [
		{ option: "Select a Category", value: "default" },
		...uniqueCategories.map((category) => ({
			option: category,
			value: category,
		})),
	];

	return (
		<aside className="filters" role="complementary" aria-label="Product filters">
			<div className="container d-flex flex-row gap-2 justify-content-between align-items-center">
				<h3 className="mb-0">Filter Products By:</h3>
				<nav className="d-flex flex-row gap-3 align-items-center" aria-label="Filter options">
					<div className="d-flex gap-2 align-items-center">
						<label htmlFor="category-filter">Category:</label>
						<SelectBox
							id="category-filter"
							options={categoryOptions}
							onChange={(e) => filterByCategory(e.target.value)}
							aria-label="Filter by category"
						/>
					</div>
					<div className="d-flex gap-2 align-items-center">
						<label htmlFor="price-filter">Price:</label>
						<SelectBox
							id="price-filter"
							options={priceOptions}
							onChange={(e) => filterByPrice(e.target.value)}
							aria-label="Filter by price"
						/>
					</div>
				</nav>
			</div>
		</aside>
	);
};

export default Filters;

// const Filters = ({ data }) => {
// 	// Ensure data is defined and not null
// 	if (!data || !Array.isArray(data)) {
// 		return null; // Or return a loading indicator or fallback UI
// 	}

// 	// Extract unique categories
// 	const uniqueCategories = Array.from(new Set(data.map(obj => obj.category)));

// 	return (
// 		<div className="filters">
// 			<div className="container">
// 				<h3>Filter Products By:</h3>
// 				<nav>
// 					<div>
// 						<label htmlFor="category">Category</label>
// 						<select id="category">
// 							<option value="">Select a category</option>
// 							{uniqueCategories.map((category, i) => (
// 								<option  value={category}>
// 									{category}
// 								</option>
// 							))}
// 						</select>
// 					</div>
// 				</nav>
// 			</div>
// 		</div>
// 	);
// };

// export default Filters;
