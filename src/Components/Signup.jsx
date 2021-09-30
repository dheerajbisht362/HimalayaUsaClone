import "../Styles/Signup.style.css";

export default function Signup() {
	return (
		<div className="signup-container">
			<div className="pageHeading">Create an Account</div>
			<div className="form-title signupMargin">Personal Information</div>
			<div className="bodyText">
				First Name <span className="floatRight">Required Fields</span>{" "}
			</div>
			<input
				className="inputText"
				type="text"
				placeHolder="Enter First Name"
			/>
			<div className="bodyText">Last Name </div>
			<input
				className="inputText"
				type="text"
				placeHolder="Enter Last Name"
			/>
			<div className="bodyText">E-mail </div>
			<input
				className="inputText"
				type="email"
				placeHolder="Enter Email"
			/>
			<div className="bodyText">Password</div>
			<input
				type="password"
				className="inputText"
				placeholder="Enter Password"
			/>
			<br />
			<button className="btnGreen">CREATE</button>
			<div className="returnStore">or Return to Store</div>
		</div>
	);
}
