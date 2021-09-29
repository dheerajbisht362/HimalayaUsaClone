import "../Styles/Login.style.css";

export default function LogIn() {
	return (
		<div className="login-container">
			<div className="pageHeading">Already Registered?</div>
			<div className="form-title loginMargin">Login</div>
			<div className="bodyText">
				E-mail <span className="floatRight">Required Fields</span>{" "}
			</div>
			<input
				className="inputText"
				type="text"
				placeHolder="Enter Email"
			/>
			<div className="bodyText">Password</div>
			<input
				type="password"
				className="inputText"
				placeholder="Enter Password"
			/>
			<br />
			<button className="btnGreen">LOGIN</button>
			<div className="forgetLogin">Lost your Password</div>
			<div className="form-title marginTop44 ">New Customer</div>
			<div className="newAccountInfo">
				By creating an account with our store, you will be able to move
				through the checkout process faster, store multiple shipping
				addresses, view and track your orders in your account and more
			</div>
			<button className="btnGreen">CREATE AN ACCOUNT</button>
		</div>
	);
}
