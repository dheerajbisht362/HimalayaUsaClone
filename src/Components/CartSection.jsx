import { useState } from "react";

export default function CartSection({ el, updateCart }) {
	const [counter, setCounter] = useState(el.quantity);

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<img width="198" height="136" src={el.image} alt="" />
			<div className="cartProTitle">{el.name} </div>
			<div className="cartProTitle">$ {el.price} </div>
			<div className="cartProCounter">
				<button
					disabled={counter === 0}
					onClick={() => {
						setCounter((prev) => prev - 1);
						updateCart(el, counter);
					}}
					className="btnQuantity"
				>
					-
				</button>
				{counter}
				<button
					onClick={() => {
						setCounter((prev) => prev + 1);
						updateCart(el, counter);
					}}
					className="btnQuantity"
				>
					+
				</button>
			</div>
			<div className="cartProTitle wid80 ">
				{(el.price * counter).toFixed(2)}{" "}
			</div>
		</div>
	);
}
