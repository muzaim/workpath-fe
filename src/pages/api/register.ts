// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUp } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	status: boolean;
	message: string;
	coba: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === "POST") {
		console.log(req.body);
		await signUp(
			req.body,
			({
				status,
				message,
				coba,
			}: {
				status: boolean;
				message: string;
				coba: string;
			}) => {
				if (status) {
					res.status(200).json({
						status,
						message,
						coba,
					});
				} else {
					res.status(400).json({
						status,
						message,
						coba,
					});
				}
			}
		);
	} else {
		res.status(405).json({
			status: false,
			message: "Method not allowed",
			coba: "coba aja",
		});
	}
}
