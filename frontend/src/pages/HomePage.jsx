import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	console.log("products", products);

	return (
		<div className="container">
			<h1 className="title">Current Products 🚀</h1>

			<div className="grid">
				{products.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>

			{products.length === 0 && (
				<p className="no-products">
					No products found 😢{" "}
					<Link to="/create" className="create-link">
						Create a product
					</Link>
				</p>
			)}

			<style>{`
				.container {
					max-width: 1200px;
					margin: 50px auto;
					padding: 20px;
					text-align: center;
					font-family: Arial, sans-serif;
				}

				.title {
					font-size: 2rem;
					font-weight: bold;
					background: linear-gradient(to right, #00bcd4, #2196f3);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					margin-bottom: 30px;
				}

				.grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
					gap: 20px;
					width: 100%;
					margin-bottom: 30px;
				}

				.no-products {
					font-size: 1.2rem;
					font-weight: bold;
					color: #888;
				}

				.create-link {
					color: #007bff;
					text-decoration: none;
					transition: text-decoration 0.3s;
				}

				.create-link:hover {
					text-decoration: underline;
				}
			`}</style>
		</div>
	);
};

export default HomePage;
