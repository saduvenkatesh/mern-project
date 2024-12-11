import { useState } from "react";

const ProductCard = ({ product, deleteProduct, updateProduct }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		alert(success ? `Success: ${message}` : `Error: ${message}`);
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		setIsModalOpen(false);
		alert(success ? `Product updated successfully` : `Error: ${message}`);
	};

	return (
		<div className="card">
			<img src={product.image} alt={product.name} className="product-image" />
			<div className="card-content">
				<h3 className="product-name">{product.name}</h3>
				<p className="product-price">${product.price}</p>
				<div className="buttons">
					<button className="edit-button" onClick={() => setIsModalOpen(true)}>Edit</button>
					<button className="delete-button" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
				</div>
			</div>

			{isModalOpen && (
				<div className="modal-overlay">
					<div className="modal">
						<h2>Update Product</h2>
						<div className="modal-body">
							<input
								type="text"
								placeholder="Product Name"
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
							<input
								type="number"
								placeholder="Price"
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							<input
								type="text"
								placeholder="Image URL"
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
						</div>
						<div className="modal-footer">
							<button onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</button>
							<button onClick={() => setIsModalOpen(false)}>Cancel</button>
						</div>
					</div>
				</div>
			)}

			<style>{`
				.card {
					border: 1px solid #ddd;
					border-radius: 8px;
					overflow: hidden;
					box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
					margin: 16px;
					width: 300px;
					text-align: center;
					transition: transform 0.3s;
				}
				.card:hover {
					transform: translateY(-5px);
				}
				.product-image {
					width: 100%;
					height: 200px;
					object-fit: cover;
				}
				.card-content {
					padding: 16px;
				}
				.product-name {
					font-size: 1.2em;
					margin-bottom: 8px;
				}
				.product-price {
					color: #555;
					font-weight: bold;
					margin-bottom: 16px;
				}
				.buttons button {
					margin: 8px;
					padding: 8px 16px;
					border: none;
					border-radius: 4px;
					cursor: pointer;
				}
				.edit-button {
					background-color: #007bff;
					color: white;
				}
				.delete-button {
					background-color: #dc3545;
					color: white;
				}
				.modal-overlay {
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0.5);
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.modal {
					background: white;
					padding: 24px;
					border-radius: 8px;
					width: 300px;
					box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
				}
				.modal h2 {
					margin-bottom: 16px;
				}
				.modal-body input {
					width: 100%;
					padding: 8px;
					margin-bottom: 12px;
					border: 1px solid #ccc;
					border-radius: 4px;
				}
				.modal-footer {
					display: flex;
					justify-content: space-between;
				}
				.modal-footer button {
					padding: 8px 16px;
					border: none;
					border-radius: 4px;
					cursor: pointer;
				}
				.modal-footer button:first-child {
					background-color: #007bff;
					color: white;
				}
				.modal-footer button:last-child {
					background-color: #6c757d;
					color: white;
				}
			`}</style>
		</div>
	);
};

export default ProductCard;
