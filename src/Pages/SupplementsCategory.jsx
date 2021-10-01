import { useEffect, useState } from "react";
import ProductCardDisplay from "../Components/ProductCardDisplay";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function SupplementsCategory() {
	const [products, setProducts] = useState([]);
	const [sortAsc, setSortAsc] = useState(false);
	const [sortName, setSortName] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);
	function fetchData() {
		axios
			.get("http://localhost:3555/products")
			.then((res) => res.data)
			.then((res) => setProducts(res));
	}

	return (
		<div>
			<Navbar />
			<div style={{ display: "flex" }}>
				<div>Herbal Supplements</div>
				<div style={{ display: "flex" }}>
					<div>
						<ul className="categoryLeftSec">
							<li>Health Interests</li>
							<li>Blood Sugar</li>
							<li>Brain & Cognitive</li>
							<li>Digestion</li>
							<li>Energy & Vitality</li>
							<li>Respiratory</li>
							<hr />
							<li>Herbal Supplements</li>
							<li>All</li>
							<li>Single Herbs</li>
							<li>Formula</li>
							<li>Product From</li>
							<li>Herbs</li>
						</ul>
					</div>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							width: "952px",
						}}
					>
						{products.map((el) => (
							<ProductCardDisplay key={el.id} product={el} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
