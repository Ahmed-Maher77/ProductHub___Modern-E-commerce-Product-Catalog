import useHandleAddToCart from "../utils/custom_hooks/useHandleAddToCart";

const Popup = ({
	data: { title, price, description, category, image, rating },
}) => {
	// Add to cart function
	const { addToCart } = useHandleAddToCart();

	// Add product to cart from modal
	const handleAddToCartClick = () => {
		addToCart({ title, price, description, category, image, rating });
	};

	return (
		<div
			className="modal fade"
			id="staticBackdrop"
			tabIndex="-1"
			aria-labelledby="staticBackdropLabel"
			aria-hidden="true"
			role="dialog"
			aria-modal="true"
		>
			<div className="modal-dialog modal-xl modal-dialog-scrollable">
				<div className="modal-content">
					<div className="modal-header">
						<h1
							className="fs-3 col-11 text-center mb-0"
							id="staticBackdropLabel"
						>
							Product Details
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close modal"
						></button>
					</div>
					<div className="modal-body px-4">
						<img
							className="pop-img d-block m-auto"
							src={image}
							alt={`Product image: ${title}`}
						/>
						<div className="table-responsive container mt-5">
							<table
								className="table text-center rounded overflow-hidden align-middle"
								role="table"
								aria-label="Product details"
							>
								<tbody>
									<tr>
										<th
											scope="row"
											className="p-2 fw-bold fs-5"
										>
											Product Name:
										</th>
										<td className="p-3 fs-101 c-light-black">
											{title}
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											className="p-2 fw-bold fs-5"
										>
											Description:
										</th>
										<td className="p-3 fs-101 c-light-black">
											{description}
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											className="p-2 fw-bold fs-5"
										>
											Category:
										</th>
										<td className="p-3 fs-101 c-light-black">
											{category}
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											className="p-2 fw-bold fs-5"
										>
											Price:
										</th>
										<td className="p-3 fs-101 c-light-black">
											{price} $
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											className="p-2 fw-bold fs-5"
										>
											Rating:
										</th>
										<td className="p-3 fs-101 c-light-black">
											{rating.rate} out of 5 stars
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											className="p-2 fw-bold fs-5"
										>
											Available Pieces:
										</th>
										<td className="p-3 fs-101 c-light-black">
											{rating.count}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
							aria-label="Close modal"
						>
							Close
						</button>
						<button
							type="button"
							className="btn btn-primary d-flex align-items-center gap-2"
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
			</div>
		</div>
	);
};

export default Popup;
