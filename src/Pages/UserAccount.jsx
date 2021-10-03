import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import "../Styles/UserAccount.style.css";

export default function UserAccount() {
	const [user, setUser] = useState({});

	const { auth } = useContext(AuthContext);
	useEffect(() => {
		getData();
	}, []);

	function getData() {
		axios
			.get(`http://localhost:3555/users/${auth}`)
			.then((res) => res.data)
			.then((res) => setUser(res));
	}

	return auth === "" ? (
		<div>User Not Logged In</div>
	) : (
		<div>
			<Navbar />
			<div className="userAccountContainer">
				<div className="uaTitle">Account</div>
				<div>
					<div className="caSubText">My Account</div>
					<div className="caSubtitle">Order History</div>
					<div>
						{user.order_ids.length === 0 ? (
							<div>You have not placed any order yet</div>
						) : (
							<div>{/* {user.order_ids[0]} */}</div>
						)}
					</div>

					<div className="caSubtitle">Account Details</div>
					<div style={{ display: "flex" }}>
						<div className="caQuery">
							<div>Name</div>
							<div>E-Mail</div>
						</div>
						<div className="caQueryRes">
							<div>{user.first_name + " " + user.last_name}</div>
							<div>{user.email}</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
