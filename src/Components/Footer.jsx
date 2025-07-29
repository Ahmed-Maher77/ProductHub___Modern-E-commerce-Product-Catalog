import React from "react";
import "./Footer.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					{/* Copyright Section */}
					<div className="footer-section">
						<div className="copyright">
							<p>
								© {currentYear} Ahmed Maher. All rights
								reserved.
							</p>
							<p className="portfolio-link">
								Portfolio:{" "}
								<a
									href="https://ahmedmaher-portfolio.vercel.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									ahmedmaher-portfolio.vercel.app
								</a>
							</p>
						</div>
					</div>

					{/* Contact Links Section */}
					<div className="footer-section">
						<h4>Connect With Me</h4>
						<div className="social-links">
							<a
								href="https://ahmedmaher-portfolio.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link portfolio"
							>
								<i className="bx bx-globe"></i>
								<span>Portfolio</span>
							</a>

							<a
								href="https://www.linkedin.com/in/ahmed-maher-algohary"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link linkedin"
							>
								<i className="bx bxl-linkedin"></i>
								<span>LinkedIn</span>
							</a>

							<a
								href="https://github.com/Ahmed-Maher77"
								target="_blank"
								rel="noopener noreferrer"
								className="social-link github"
							>
								<i className="bx bxl-github"></i>
								<span>GitHub</span>
							</a>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p>
						Built with ❤️ using React.js and modern web technologies
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
