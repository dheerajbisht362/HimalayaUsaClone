import { useState, createContext } from "react";

export const AuthContext = createContext({ auth: false, toggleAuth: () => {} });

export default function AuthContextProvider({ children }) {
	const [auth, setAuth] = useState(false);

	const toggleAuth = () => {
		setAuth(!auth);
	};

	return (
		<AuthContext.Provider value={{ auth, toggleAuth }}>
			{children}
		</AuthContext.Provider>
	);
}
