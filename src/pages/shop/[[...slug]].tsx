import { useRouter } from "next/router";
import React from "react";

const ShopPage = () => {
	const { query } = useRouter();
	console.log(query);

	return (
		<div className="container">
			<p>ShopPage {query.slug && query.slug[2]}</p>
		</div>
	);
};

export default ShopPage;
