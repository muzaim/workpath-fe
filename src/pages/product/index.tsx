import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type ProductType = {
	id: number;
	name: string;
	price: number;
	active: boolean;
	image: string;
};

const Product = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [productData, setProductData] = useState([]);
	const { push } = useRouter();

	const activeProduct = productData.filter(
		(item: ProductType) => item.active
	);

	const getDataProduct = async () => {
		const res = await fetch("/api/product");
		const response = await res.json();
		setProductData(response.data);
	};

	useEffect(() => {
		!isLogin ? push("/auth/login") : push("/product");
	}, []);

	useEffect(() => {
		getDataProduct();
	}, []);

	return (
		<div className="container mx-auto my-10">
			<div className="flex justify-between">
				<h1 className="text-gray-800 text-3xl">Recomended Product</h1>
				<Link
					href={"/product/add"}
					className="py-2 px-4 bg-sky-400 rounded-lg text-white hover:bg-sky-500"
				>
					Add Product
				</Link>
			</div>
			<div className="grid grid-cols-12 gap-10 mt-5">
				{activeProduct.map((item: ProductType) => (
					<Link
						href={`/product/${item.id}`}
						key={item.id}
						className="col-span-3 cursor-pointer hover:scale-105"
					>
						<img src={item.image} alt="" className="rounded-lg" />
						<div>
							<h1 className="text-gray-800 text-xl font-semibold">
								{item.name}
							</h1>
							<p className="text-gray-600">RP.{item.price}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Product;
