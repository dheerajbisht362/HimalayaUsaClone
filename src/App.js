import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductPage from "./Components/ProductView";
import Login from "./Components/LogIn";
import PaymentPage from "./Components/PaymentPage";
import { Signup } from "./Components/Signup";
import Supplements from "./Pages/SupplementsCategory";
import {Textplant} from "./Components/Textplant"
import { TextCards } from "./Components/TextCards";
import { TextCardPrent } from "./Components/TextCardPrent";
import {InstaReels} from "./Components/InstaReels"
import {HeroComp} from "./Components/HeroComp"
import {BestSeller} from "./Components/BestSeller"
import { Shopbycatg } from "./Components/ShopbyCatg";
function App() {
	return (
		<div style={{ position: "relative", minHeight: "100vh" }}>
			<Navbar />
            <HeroComp/>
			<Shopbycatg/>

				
			
			
			<Textplant/>
			<TextCardPrent/>
			<InstaReels/>
			<BestSeller/>
			{/* <ProductPage /> */}
			{/* <Login /> */}
			<PaymentPage />
			{/* <Signup /> */}
			<Footer />
		</div>
	);
}

export default App;
