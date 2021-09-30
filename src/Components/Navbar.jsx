import logo from "../Images/logoMain.png";
import cart from "../Images/cart.png";
import profile from "../Images/profile.png";
import "../Styles/Navbar.style.css";

export default function Navbar() {
	return (
		<div>
			<div className="navbar">
				<div>
					<img src={logo} alt="logo"></img>
				</div>
				<div className="navlinks">
					<div>Shop</div>
				</div>
				<div className="navlinks">About</div>
				<div className="navlinks">Store Locator</div>
			</div>
			<div style={{ float: "right" }}>
				<img className="navIcon" src={profile} alt="profile" />
				<img className="navIcon" src={cart} alt="cart" />
			</div>
			<div style={{ clear: "both" }}></div>
		</div>
	);
}
