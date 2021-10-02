import { useEffect, useState } from "react";
import ProductCardDisplay from "../Components/ProductCardDisplay";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Products.style.css";
import { useParams } from "react-router-dom";

export default function SupplementsCategory() {
	const [products, setProducts] = useState([]);
	const [sortAsc, setSortAsc] = useState(false);
	const [sortName, setSortName] = useState(false);

	const { category } = useParams();
	useEffect(() => {
		fetchData();
	}, [sortAsc, sortName]);
	function fetchData() {
		axios
			.get("http://localhost:3555/products")
			.then((res) => res.data)
			.then((res) => {
				return sortAsc === 1
					? setProducts(res.sort((a, b) => a.price - b.price))
					: sortAsc === 2
					? setProducts(res.sort((a, b) => b.price - a.price))
					: sortName === 1
					? setProducts(
							res.sort((a, b) => {
								if (a.name < b.name) {
									return -1;
								}
								if (a.name > b.name) {
									return 1;
								}
								return 0;
							})
					  )
					: sortName === 2
					? setProducts(
							res.sort((a, b) => {
								if (a.name < b.name) {
									return 1;
								}
								if (a.name > b.name) {
									return -1;
								}
								return 0;
							})
					  )
					: setProducts(res);
			});
	}

	return (
		<div>
			<Navbar />
			<div className="productPageTitle">{category.toUpperCase()}</div>
			<div className="textAlignProduct">
				<button
					style={{
						backgroundColor: sortName === 1 ? "#66765F" : "#A3B49B",
					}}
					onClick={() => {
						setSortName(1);
						// setSortAsc(0);
					}}
				>
					Sort by Name Asc
				</button>
				<button
					style={{
						backgroundColor: sortName === 2 ? "#66765F" : "#A3B49B",
					}}
					onClick={() => {
						setSortName(2);
						// setSortAsc(0);
					}}
				>
					Sort by Name Desc
				</button>
				<button
					style={{
						backgroundColor: sortAsc === 1 ? "#66765F" : "#A3B49B",
					}}
					onClick={() => {
						setSortAsc(1);
						// setSortName(0);
					}}
				>
					Sort by Price Asc
				</button>
				<button
					style={{
						backgroundColor: sortAsc === 2 ? "#66765F" : "#A3B49B",
					}}
					onClick={() => {
						setSortAsc(2);
						// setSortName(0);
					}}
				>
					Sort by Price Desc
				</button>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div style={{ width: "270px" }}>
					<ul className="categoryLeftSec">
						<li className="active">Health Interests</li>
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
			<Footer />
		</div>
	);
}
