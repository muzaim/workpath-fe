import { useRouter } from "next/router";
import React, { useState } from "react";

const AddProduct = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [active, setActive] = useState(false);
	const [error, setError] = useState("");

	const { push } = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		// Handle form submission here, e.g., send data to an API
		console.log({ name, price, image, active });

		const result = await fetch("/api/product", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, price, image, active }),
		});

		const hanya = await result.json();

		if (hanya) {
			e.target.reset();
			push("/product");
		} else {
			setError(result.status === 400 ? hanya.message : "");
		}
	};

	return (
		<div className="container mx-auto w-1/3">
			<h1 className="text-3xl py-5 font-bold">Add Product</h1>
			{error && (
				<p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-red-500">
					{error}
				</p>
			)}
			<form
				onSubmit={handleSubmit}
				className="p-4 border rounded-md shadow-md"
			>
				<label className="block mb-2">
					Name:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="block w-full mt-1 p-2 border rounded"
					/>
				</label>
				<label className="block mb-2">
					Price:
					<input
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						className="block w-full mt-1 p-2 border rounded"
					/>
				</label>
				<label className="block mb-2">
					Image URL:
					<input
						type="text"
						value={image}
						onChange={(e) => setImage(e.target.value)}
						className="block w-full mt-1 p-2 border rounded"
					/>
				</label>
				<label className="block mb-2">
					Active:
					<input
						type="checkbox"
						checked={active}
						onChange={(e) => setActive(e.target.checked)}
						className="mt-1"
					/>
				</label>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					Create Product
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
