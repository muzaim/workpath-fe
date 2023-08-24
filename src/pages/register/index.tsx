import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Register = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { push } = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const data = {
			fullname: e.target.fullname.value,
			email: e.target.email.value,
			password: e.target.password.value,
		};
		const result = await fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (result.status === 200) {
			e.target.reset();
			setIsLoading(false);
			push("/auth/login");
		} else {
			setIsLoading(false);
			setError(result.status === 400 ? "Email sudah terdaftar" : "");
		}
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Create and account
						</h1>
						{error && (
							<p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-red-500">
								{error}
							</p>
						)}
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={handleSubmit}
						>
							<div>
								<label
									htmlFor="fullname"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your fullname
								</label>
								<input
									type="text"
									name="fullname"
									id="fullname"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="fullname"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>

							<button
								type="submit"
								className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								disabled={isLoading}
							>
								{isLoading ? "Loading..." : "Sign up"}
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Already have an account?{" "}
								<Link
									href="/auth/login"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Login here
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
