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
			<h1 className="text-gray-800 text-3xl">Recomended Product</h1>
			<div className="flex mt-10 gap-5">
				{productData.map((item: ProductType) => (
					<div key={item.id} className="w-1/4">
						<img src={item.image} alt="" />
						<h1 className="text-gray-800 text-xl font-semibold">
							{item.name}
						</h1>
						<p className="text-gray-600">RP.{item.price}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Product;
