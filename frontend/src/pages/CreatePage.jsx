import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		alert(success ? `Success: ${message}` : `Error: ${message}`);
		setNewProduct({ name: "", price: "", image: "" });
	};

	return (
		<div className="container">
			<h1 className="heading">Create New Product</h1>

			<div className="form-container">
				<div className="input-group">
					<input
						type="text"
						placeholder="Product Name"
						name="name"
						value={newProduct.name}
						onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
					/>
				</div>

				<div className="input-group">
					<input
						type="number"
						placeholder="Price"
						name="price"
						value={newProduct.price}
						onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
					/>
				</div>

				<div className="input-group">
					<input
						type="text"
						placeholder="Image URL"
						name="image"
						value={newProduct.image}
						onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
					/>
				</div>

				<button className="submit-btn" onClick={handleAddProduct}>
					Add Product
				</button>
			</div>

			<style>{`
				.container {
					max-width: 600px;
					margin: 50px auto;
					padding: 20px;
					background-color: #f9f9f9;
					border-radius: 10px;
					box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
					text-align: center;
					font-family: Arial, sans-serif;
				}

				.heading {
					font-size: 2rem;
					margin-bottom: 20px;
					color: #333;
				}

				.form-container {
					display: flex;
					flex-direction: column;
					gap: 15px;
				}

				.input-group input {
					width: 100%;
					padding: 10px;
					font-size: 1rem;
					border: 1px solid #ccc;
					border-radius: 5px;
				}

				.submit-btn {
					padding: 12px;
					font-size: 1rem;
					background-color: #007bff;
					color: #fff;
					border: none;
					border-radius: 5px;
					cursor: pointer;
					transition: background-color 0.3s;
				}

				.submit-btn:hover {
					background-color: #0056b3;
				}
			`}</style>
		</div>
	);
};

export default CreatePage;
