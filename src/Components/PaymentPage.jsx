import "../Styles/PaymentPage.style.css";
import logo from "../Images/logoMain.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function PaymentPage() {
	const { cart, totalCartValue } = useContext(CartContext);

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div className="paymentAddressSec">
				<img src={logo} alt="logo"></img>
				<div className="expressCheckout">Express checkout</div>
				<button className="btnPay purple">Shop pay</button>
				<button className="btnPay yellow">Amazon pay</button>
				<button className="btnPay black">G pay</button>
				<hr />
				<div className="paymentSubHead">Contact information</div>
				{/* <div className="accountInfoPay">
					<div>Yoon Hoo (yaanhoo61@gamil.com) </div>
					<div>Log Out</div>
				</div> */}
				<div>
					<input type="checkbox" />
					<span>Keep me up to data on news and offers</span>
				</div>

				<div className="paymentSubHead">Shipping address</div>
				<div style={{ display: "flex" }}>
					<div className="borderInput">
						First Name (optional)
						<input className="inputForm" type="text" />
					</div>
					<div className="borderInput">
						Last Name
						<input className="inputForm" type="text" />
					</div>
				</div>
				<div className="borderInput">
					<input
						className="inputForm"
						type="text"
						placeholder="Address"
					/>
				</div>
				<div className="borderInput">
					<input
						className="inputForm"
						type="text"
						placeholder="Apartment, suite, etc. (optional)"
					/>
				</div>
				<div className="borderInput">
					<input
						className="inputForm"
						type="text"
						placeholder="City"
					/>
				</div>
				<div style={{ display: "flex" }}>
					<div className="borderInput">
						Country/region
						<div>
							<input className="inputForm threeDiv" type="text" />
						</div>
					</div>
					<div className="borderInput">
						State
						<div>
							<input className="inputForm threeDiv" type="text" />
						</div>
					</div>
					<div className="borderInput">
						ZIP code
						<div>
							<input className="inputForm threeDiv" type="text" />
						</div>
					</div>
				</div>
				<div className="borderInput">
					<input
						type="text"
						className="inputForm"
						placeholder="Phone"
					/>
				</div>
				<Link to="/products">
					{" "}
					<button className="btnPaymentGreen">
						Continue to shipping
					</button>
				</Link>
				<Link to="/cart">
					<button className="btnPaymentWhite">Return to cart</button>
				</Link>
			</div>
			<div className="paymentCartSec">
				<div>
					{cart.map((el) => (
						<div key={el.id} style={{ margin: "10px" }}>
							<img widht="70" height="48" src={el.image} alt="" />{" "}
							<span style={{ marginLeft: 50 }}>{el.name}</span>
							<span
								style={{
									marginLeft: 50,
									paddingTop: 20,
									float: "right",
								}}
							>
								{" "}
								$ {(el.price * el.quantity).toFixed(2)}
							</span>
						</div>
					))}
				</div>
				<hr />

				<input type="text" placeholder="Discount code" />
				<button>Apply</button>
				<hr />
				<div>
					Subtotal{" "}
					<span style={{ float: "right" }}>
						$ {totalCartValue()}{" "}
					</span>{" "}
				</div>
				<div>
					Shipping{" "}
					<span style={{ float: "right" }}>
						$ {totalCartValue()}{" "}
					</span>{" "}
				</div>
				<hr />
				<div>
					Total{" "}
					<span style={{ float: "right" }}>$ {totalCartValue()}</span>{" "}
				</div>
			</div>
		</div>
	);
}
