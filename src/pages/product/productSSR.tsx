import React from "react";

type ProductType = {
	id: number;
	name: string;
	price: number;
	active: boolean;
	image: string;
};
const productSSR = (props: any) => {
	const { data } = props;

	return (
		<div className="container mx-auto my-10">
			<h1 className="text-gray-800 text-3xl">Recomended Product</h1>
			<div className="flex mt-10 gap-5">
				{data.map((item: ProductType) => (
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

export default productSSR;

export async function getServerSideProps() {
	const res = await fetch("http://localhost:3000/api/product");
	const response = await res.json();
	const data = response.data;
	return { props: { data } };
}
