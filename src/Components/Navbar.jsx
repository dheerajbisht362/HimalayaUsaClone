import logo from "../Images/logoMain.png";
import cart from "../Images/cart.png";
import search from "../Images/searchIcon.svg";
import profile from "../Images/profile.png";
import "../Styles/Navbar.style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "./Submenu";

export default function Navbar() {
	const [account, setAccount] = useState(false);

	function toggleDropdown() {
		setAccount(!account);
	}

	return (
		<div>
		    
			<div className="navbar">
				<div>
					<img src={logo} alt="logo"></img>
				</div>
				<div className="navlinks">
					<div className="nav__menu-item">
						<Link to="/products">Shop</Link>
						<Submenu />
					</div>
				</div>
				<div className="navlinks">About</div>
				<div className="navlinks">Store Locator</div>
			</div>
			<div style={{ float: "right" }}>
			   <img className="navIcon" style={{border:"1px solid red"}} src={search} alt="cart" />
				<img
					onClick={() => {
						toggleDropdown();
					}}
					className="navIcon"
					src={profile}
					alt="profile"
				/>
				{account ? (
					<span className="NavDropDown">
						<Link to="/user/login">
							{" "}
							<div>Sign In</div>
						</Link>
						<Link to="/user/signup">
							{" "}
							<div>Register</div>
						</Link>
						<Link>
							{" "}
							<div>Checkout</div>
						</Link>{" "}
					</span>
				) : null}

				<img className="navIcon" src={cart} alt="cart" />
				
			</div>
			<div style={{ clear: "both" }}></div>
		</div>
	);
}
