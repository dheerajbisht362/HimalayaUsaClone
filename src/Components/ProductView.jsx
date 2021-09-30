// import "../Styles/ProductView.style.css";
import "../Styles/ProductView.style.css";

export default function ProductView() {
	return (
		<div className="proContainer">
			<div className="flex1">
				<div>
					<img
						width="521"
						height="494"
						src="https://via.placeholder.com/503"
						alt="Product"
					/>
				</div>
				<div>
					<img
						width="88"
						height="88"
						src="https://via.placeholder.com/503"
						alt="Product"
					/>
					<img
						width="88"
						height="88"
						src="https://via.placeholder.com/503"
						alt="Product"
					/>
					<img
						width="88"
						height="88"
						src="https://via.placeholder.com/503"
						alt="Product"
					/>
				</div>
			</div>
			<div>
				<div className="pageHeading">Boswellia</div>
				<div className="priceProduct">$14.95</div>
				<div>Size: 60 Capsules</div>
				<div>
					{" "}
					<button className="btnCapsule">60 Capsules</button>
					<button className="btnCapsule">120 Capsules</button>
					<button className="btnCapsule">240 Capsules</button>
				</div>
				<div>
					<button className="btnQuantity">-</button>1
					<button className="btnQuantity">+</button>
					<button className="btnAddToCart">ADD TO CART</button>
				</div>
				<div>
					{" "}
					<button className="btnAmazon">
						Buy with amazon pay
					</button>{" "}
				</div>
				<div>Description</div>
				<div>Recommended Use</div>
				<div>
					<table>
						<tr>
							<td>Size(Caplets)</td>
							<td>60</td>
							<td>120</td>
							<td>240</td>
						</tr>
						<tr>
							<td>Supply</td>
							<td>15 Days</td>
							<td>1 Month</td>
							<td>2 Months</td>
						</tr>
					</table>
				</div>
				<div>Adults take 2 capsules twice daily with food</div>
				<div>What's in it?</div>
			</div>
		</div>
	);
}
