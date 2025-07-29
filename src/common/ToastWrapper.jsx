import { ToastContainer } from "react-toastify";
const ToastWrapper = ({ children }) => {
	return (
		<>
			{children}
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
};
export default ToastWrapper;
