import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import ToastWrapper from "./common/ToastWrapper";
import CartContextProvider from "./utils/context/CartContext";
import TestComponent from "./Components/TestComponent";

function App() {
	console.log("App component rendering...");
	return (
		<div className="App">
			<TestComponent />
			<CartContextProvider>
				<ToastWrapper>
					<Products />
					<Footer />
				</ToastWrapper>
			</CartContextProvider>
		</div>
	);
}

export default App;
