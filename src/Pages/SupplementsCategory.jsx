


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
	}, [sortAsc,sortName]);
	function fetchData() {
		axios
			.get("http://localhost:3555/products")
			.then((res) => res.data)
			.then((res) =>{
				return sortAsc===1?setProducts(res.sort((a,b)=>a.price-b.price)):sortAsc===2?setProducts(res.sort((a,b)=>b.price-a.price)):sortName===1?setProducts(res.sort((a, b)=>{
					if(a.name < b.name) { return -1; }
					if(a.name > b.name) { return 1; }
					return 0;
				})):sortName===2?setProducts(res.sort((a, b)=>{
					if(a.name < b.name) { return 1; }
					if(a.name > b.name) { return -1; }
					return 0;
				})):setProducts(res)

				
			})
			// .then((res) =>{
			// 	return sortAsc===1?setProducts(res.sort((a,b)=>a.price-b.price)):sortAsc===2?setProducts(res.sort((a,b)=>b.price-a.price)):sortName===1?setProducts(res.sort((a,b)=>a.name-b.name)):sortName===2?setProducts(res.sort((a,b)=>b.name-a.name)):setProducts(res.data)
			// setProducts(res)
			// });
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
					<button style={{height:"60px"}} onClick={()=>{
						setSortName(1);
						setSortAsc(0)
					}}>Sort by Name Asc</button>
					<button style={{height:"60px"}} onClick={()=>{
						setSortName(2)
						setSortAsc(0)
					}}>Sort by Name Desc</button>
					<button style={{height:"60px"}}  onClick={()=>{
						setSortAsc(1)
						setSortName(0)
					}}>Sort by Price Asc</button>
					<button style={{height:"60px"}} onClick={()=>{
						setSortAsc(2)
						setSortName(0)
					}}>Sort by Price Desc</button>

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
