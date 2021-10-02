import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import "../Styles/CartPage.style.css";
import CartSection from "../Components/CartSection";
import { Link } from "react-router-dom";

export default function CartPage() {
	const { cart, updateCart, totalCartValue, deleteItem } =
		useContext(CartContext);
     const checkPrice=totalCartValue();
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
				{checkPrice>0?
				  <Link to="/user/payment">
					<button className="proceedPayButton">
						PROCEED TO CHECKOUT
					</button>
				</Link>:
				<Link to="/products/:category">
					<button className="proceedPayButton">
						Go To Shopping Page
					</button>
				</Link>
				}
				
			</div>
		</div>
	);
}
