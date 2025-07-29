import "./Products.css";
import "boxicons/css/boxicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Popup from "./Popup";
import { useEffect, useState } from "react";
import useHandleAddToCart from "../utils/custom_hooks/useHandleAddToCart";

const Product_Card = ({
	data: { title, price, description, category, image, rating },
	classFlex,
}) => {
	const [larger500, setLarger500] = useState(false);
	const { addToCart } = useHandleAddToCart();

	// Handle responsive behavior
	useEffect(() => {
		const handleScreen = () => {
			window.innerWidth > 500 ? setLarger500(true) : setLarger500(false);
		};
		window.addEventListener("resize", handleScreen);
		return () => window.removeEventListener("resize", handleScreen);
	}, []);

	// Add product to cart
	const handleAddToCartClick = () => {
		addToCart({ title, price, description, category, image, rating });
	};

	return (
		<article
			className={`product-card card ${classFlex} position-relative`}
			role="article"
		>
			<figure className="pt-user-2 px-5 mb-1 text-center">
				<img
					className="card-img-top dimension-200"
					src={image}
					alt={`Product image: ${title}`}
					loading="lazy"
				/>
			</figure>
			<div className="card-body">
				<h3 className="card-title text-over title-over fs-101 mb-1">
					{title}
				</h3>
				{larger500 && (
					<p className="card-text text-over mb-1">{description}</p>
				)}
				<p
					className="category fw-bold d-flex align-items-center gap-2"
					aria-label={`Category: ${category}`}
				>
					<i className="bx bxs-bookmarks" aria-hidden="true"></i>{" "}
					{category}
				</p>
				<div className="price d-flex justify-content-between pt-2">
					<span className="fw-bold" aria-label={`Price: $${price}`}>
						{price}$
					</span>
					<span aria-label={`Rating: ${rating.rate} stars`}>
						Rate: {rating.rate}
					</span>
				</div>

				{/* Action Buttons */}
				<div className="btns d-flex justify-content-between pt-3 flex-column flex-sm-row gap-2 flex-wrap">
					<button
						className="btn btn-outline-primary rounded py-2 px-3 d-flex align-items-center gap-2  justify-content-center w-100"
						data-bs-toggle="modal"
						data-bs-target="#staticBackdrop"
						aria-label={`View details for ${title}`}
					>
						Show Details{" "}
						<i className="bx bxs-show fs-5" aria-hidden="true"></i>
					</button>

					{/* Product details modal */}
					<Popup
						data={{
							title,
							price,
							description,
							category,
							image,
							rating,
						}}
					/>
					<button
						className="btn btn-success rounded py-2 px-4 d-flex align-items-center gap-2  justify-content-center w-100"
						onClick={handleAddToCartClick}
						aria-label={`Add ${title} to cart`}
					>
						Buy Now{" "}
						<i
							className="bx bx-cart-add fs-5"
							aria-hidden="true"
						></i>
					</button>
				</div>
			</div>
		</article>
	);
};

export default Product_Card;
