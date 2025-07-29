import CountTimer from "./CountTimer";

const Purchase = () => {
	return (
		<div
			className="modal fade"
			id="staticBackdrop2"
			tabIndex="-1"
			aria-labelledby="staticBackdrop2Label"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header border-0">
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body text-center">
						<h3>We are comming soon</h3>
						{/* <CountTimer type='countDown' limitInDays={5.3} /> */}
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
