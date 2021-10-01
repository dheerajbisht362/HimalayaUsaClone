import { Link } from "react-router-dom";

export default function Submenu() {
	return (
		<div className="nav__submenu">
			<div style={{ display: "flex" }} className="nav__submenu-item ">
				<div>
					<div
						className="subMenuDropDown"
						style={{ display: "flex" }}
					>
						<div>
							<li class="navdropHead">Herbal Supplements</li>
							<li>
								<Link to="/products">
									Single Herb Supplements
								</Link>
							</li>
							<li>
								<Link to="/products">
									Multi-Ingredient Supplements
								</Link>
							</li>
						</div>
						<div>
							<li class="navdropHead">Oral Care</li>
							<li>
								<Link to="/products">Adult Toothpaste</Link>
							</li>
							<li>
								<Link to="/products">Kids Toothpaste</Link>
							</li>
						</div>
						<div>
							<li class="navdropHead">Personal Care</li>
							<li>
								<Link to="/products">Face Care</Link>
							</li>
							<li>
								<Link to="/products">Cleansing Bars</Link>
							</li>
							<li>
								<Link to="/products">Balm</Link>
							</li>
						</div>
					</div>
					<hr />
					<div
						className="subMenuDropDown"
						style={{ display: "flex" }}
					>
						<div className="navdropHead margin5">
							Health Interests
						</div>
					</div>
					<div
						style={{ display: "flex" }}
						className="subMenuDropDown"
					>
						<div>
							<li>
								<Link to="/products">Blood Sugar</Link>
							</li>
							<li>
								<Link to="/products">Brain & Cognitive</Link>
							</li>
							<li>
								<Link to="/products">Digestion</Link>
							</li>
							<li>
								<Link to="/products">Energy & Vitality</Link>
							</li>
							<li>
								<Link to="/products">Hair, Skin & Nails</Link>
							</li>
							<li>
								<Link to="/products">Heart & Cardio</Link>
							</li>
						</div>
						<div>
							<li>
								<Link to="/products">Immune Support</Link>
							</li>
							<li>
								<Link to="/products">Join & Mobility</Link>
							</li>
							<li>
								<Link to="/products">Liver & Cleanse</Link>
							</li>
							<li>
								<Link to="/products">Men's Wellness</Link>
							</li>
							<li>
								<Link to="/products">Respiratory</Link>
							</li>
							<li>
								<Link to="/products">Sleep</Link>
							</li>
						</div>
						<div>
							<li>
								<Link to="/products">Stress & Mood</Link>
							</li>
							<li>
								<Link to="/products">Urinary</Link>
							</li>
							<li>
								<Link to="/products">Weight Management</Link>
							</li>
							<li>
								<Link to="/products">Women's Wellness</Link>
							</li>
						</div>
					</div>
				</div>
				<div className="dropDownImage">
					<div>
						<img
							width="312"
							height="303"
							src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA_Ashwagandha_90ct_Carton_Bottle_410x.jpg?v=1603142607"
							alt=""
						/>
					</div>
					<div style={{ textAlign: "center" }}>
						<button className="btnDropFeatured">
							Featured Product
						</button>
						<div>Find out why everyone loves bestselling</div>
						<div>Organic Ashwagandha</div>
					</div>
				</div>
			</div>
		</div>
	);
}
