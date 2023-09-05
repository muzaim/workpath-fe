// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addProduct, retrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	status: number;
	message: string;
	data: any;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === "GET") {
		const data = await retrieveData("product");

		res.status(200).json({ status: 200, message: "Success", data });
	} else if (req.method === "POST") {
		await addProduct(req.body, (data: Data) => {
			res.status(200).json({ status: 200, message: "Success", data });
		});
	}
}
