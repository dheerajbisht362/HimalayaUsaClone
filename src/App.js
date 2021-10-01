import "./App.css";
import Supplements from "./Pages/SupplementsCategory";
import LogInPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ProductsIdPage from "./Pages/ProductsIdPage";
import PaymentPage from "./Pages/PaymentPage";
import { Route, Switch } from "react-router-dom";
import AuthContext from "./Context/AuthContext";

function App() {
	return (
		<AuthContext>
			<div style={{ position: "relative", minHeight: "100vh" }}>
				<Switch>
					<Route exact path="/">
						homepage{" "}
					</Route>
					<Route path="/products">
						{" "}
						<Supplements />{" "}
					</Route>
					<Route path="/product/:id">
						<ProductsIdPage />{" "}
					</Route>
					<Route path="/user/login">
						<LogInPage />{" "}
					</Route>
					<Route path="/user/signup">
						<SignUpPage />{" "}
					</Route>
					<Route path="/user/payment">
						<PaymentPage />
					</Route>
					<Route path="user/cart">Cart User</Route>
					<Route>404 Page Not found</Route>
				</Switch>
			</div>
		</AuthContext>
	);
}

export default App;

//  Home, Products, products/id,user/login, user/signup , payment, cart
