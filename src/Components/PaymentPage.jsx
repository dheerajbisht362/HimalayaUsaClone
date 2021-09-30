import "../Styles/PaymentPage.style.css";
import logo from "../Images/logoMain.png";

export default function PaymentPage() {
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
				<div className="accountInfoPay">
					<div>Yoon Hoo (yaanhoo61@gamil.com) </div>
					<div>Log Out</div>
				</div>
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
				<button className="btnPaymentGreen">
					Continue to shipping
				</button>
				<button className="btnPaymentWhite">Return to cart</button>
			</div>
			<div className="paymentCartSec">
				<div>Cart Item</div>
				<hr />

				<input type="text" placeholder="Discount code" />
				<button>Apply</button>
				<hr />
				<div>
					Subtotal <span style={{ float: "right" }}>Cart total </span>{" "}
				</div>
				<div>
					Shipping <span style={{ float: "right" }}>Cart total </span>{" "}
				</div>
				<hr />
				<div>
					Total <span style={{ float: "right" }}>Cart total </span>{" "}
				</div>
			</div>
		</div>
	);
}
