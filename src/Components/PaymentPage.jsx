import "../Styles/PaymentPage.style.css";
import logo from "../Images/logoMain.png";

export default function PaymentPage() {
	return (
		<div style={{ display: "flex" }}>
			<div>
				<img src={logo} alt="logo"></img>
				<div>Express checkout</div>
				<button>Shop pay</button>
				<button>Amazon pay</button>
				<button>G pay</button>
				<hr />
				<div>Contact information</div>
				<div>Yoon Hoo (yaanhoo61@gamil.com) </div>
				<div>Log Out</div>
				<input
					type="checkbox"
					value="Keep me up to data on news and offers"
				/>

				<div>Shipping address</div>
				<div style={{ display: "flex" }}>
					<div>
						<div>
							First Name (optional)
							<div>
								<input type="text" />
							</div>
						</div>
						<div>
							Last Name
							<div>
								<input type="text" />
							</div>
						</div>
					</div>
				</div>
				<div>
					<input type="text" placeholder="Address" />
				</div>
				<div>
					<input
						type="text"
						placeholder="Apartment, suite, etc. (optional)"
					/>
				</div>
				<div>
					<input type="text" placeholder="City" />
				</div>
				<div style={{ display: "flex" }}>
					<div>
						<div>
							Country/region
							<div>
								<input type="text" />
							</div>
						</div>
						<div>
							State
							<div>
								<input type="text" />
							</div>
						</div>
						<div>
							ZIP code
							<div>
								<input type="text" />
							</div>
						</div>
					</div>
				</div>
				<div>
					<input type="text" placeholder="Phone" />
				</div>
				<button>Continue to shipping</button>
				<button>Return to cart</button>
			</div>
			<div>
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
