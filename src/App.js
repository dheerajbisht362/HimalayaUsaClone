import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductPage from "./Components/ProductView";
import Login from "./Components/LogIn";
import PaymentPage from "./Components/PaymentPage";
import { Signup } from "./Components/Signup";
import Supplements from "./Pages/SupplementsCategory";

function App() {
	return (
		<div style={{ position: "relative", minHeight: "100vh" }}>
			<Navbar />
			{/* <ProductPage /> */}
			{/* <Login /> */}
			<PaymentPage />
			{/* <Signup /> */}
			<Footer />
		</div>
	);
}

export default App;
