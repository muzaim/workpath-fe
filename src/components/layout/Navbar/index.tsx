import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
	const { data } = useSession();
	const { push, route } = useRouter();

	return (
		<>
			<div className="h-20 px-4 flex justify-between items-center bg-gray-100 md:px-0 md:container md:mx-auto md:bg-white">
				{/* logo */}
				<div className="flex gap-10 justify-center items-center ">
					<div
						className="flex gap-1 justify-center items-center relative cursor-pointer"
						onClick={() => push("/")}
					>
						<div className="w-9 h-9 bg-blue-700 rounded-full z-10 flex justify-center items-center">
							<div className="w-4 h-4 bg-white rounded-full"></div>
						</div>
						<div className="w-9 h-9 bg-blue-400 rounded-full absolute -top-2 -left-2 "></div>
						<span className="text-xl font-bold text-blue-700  font-poppins">
							WorkPath
						</span>
					</div>
					<ul className="  text-base font-poppins hidden md:flex md:gap-3">
						<li
							className={`h-20 flex items-center border-b-2 border-transparent hover:border-blue-700 transition duration-300 ${
								route === "/jobs"
									? "border-b-2 border-blue-500 "
									: "text-blue-700"
							}`}
						>
							<Link
								href="/jobs"
								className={` capitalize hover:text-blue-700 ${
									route === "/jobs"
										? "text-blue-700 "
										: "text-gray-600"
								}`}
							>
								find jobs
							</Link>
						</li>
						<li
							className={`h-20 flex items-center border-b-2 border-transparent hover:border-blue-700 transition duration-300 ${
								route === "/companies"
									? "border-b-2 border-blue-500 "
									: "text-blue-700"
							}`}
						>
							<Link
								href="/companies"
								className={` capitalize hover:text-blue-700 ${
									route === "/companies"
										? "text-blue-700 "
										: "text-gray-600"
								}`}
							>
								browse companies
							</Link>
						</li>
					</ul>
				</div>
				<ul className=" gap-3 text-base font-poppins hidden md:flex">
					<li>
						<Link
							href="/"
							className="py-3 px-6 bg-white text-blue-700 border border-transparent hover:border hover:border-blue-700 transition duration-300"
						>
							Login
						</Link>
					</li>
					<li>
						<Link
							href="/"
							className="py-3 px-6 bg-blue-700 text-white border border-transparent hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 transition duration-300"
						>
							Sign Up
						</Link>
					</li>
				</ul>

				<div className="md:hidden">
					<button className="w-12 h-12 bg-blue-700 text-white rounded-full border border-transparent hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 transition duration-300">
						=
					</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
