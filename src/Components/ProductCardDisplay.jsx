import { Link } from "react-router-dom";
import "../Styles/ProductCardDisplay.styles.css";

export default function ProductCardDisplay({ product }) {
	const { image, name, price, id } = product;

	return (
		<div style={{ margin: "20px" }}>
			<img width="198" height="198" alt="product" src={image} />
			<div className="productTileCard">{name}</div>
			<button className="btnPrice">{price}</button>
		</div>
	);
}
