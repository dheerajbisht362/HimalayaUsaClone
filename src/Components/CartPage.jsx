import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import "../Styles/CartPage.style.css";
import CartSection from "../Components/CartSection";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function CartPage() {
	const { cart, updateCart, totalCartValue, deleteItem } =
		useContext(CartContext);
	let history = useHistory();
	function handleSubmit() {
		if (cart.length === 0) {
			alert("Nothing in cart");
		} else history.push("/user/payment");
	}
	return (
		<div style={{ minHeight: 300, textAlign: "center" }}>
			<div className="cartHead">Shopping Cart</div>
			{cart.length === 0 ? (
				<div className="cartEmpty">Cart is empty</div>
			) : (
				cart.map((el) => (
					<CartSection
						key={el.id}
						el={el}
						updateCart={updateCart}
						deleteItem={deleteItem}
					/>
				))
			)}
			<div className="proceedPayment">
				<div>Grand Total : ${totalCartValue()}</div>
				<button
					onClick={() => handleSubmit()}
					className="proceedPayButton"
				>
					PROCEED TO CHECKOUT
				</button>
			</div>
		</div>
	);
}
