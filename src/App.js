import "./App.css";
import Footer from "./Components/Footer";
// import Product from "./Components/ProductView";
import Login from "./Components/LogIn";
import PaymentPage from "./Components/PaymentPage";
import { Signup } from "./Components/Signup";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* <Product /> */}
      {/* <Login /> */}
      {/* <PaymentPage /> */}
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
