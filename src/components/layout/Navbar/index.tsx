import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
	const { data } = useSession();

	return (
		<div className="py-5 bg-sky-700">
			<div className="container mx-auto text-white flex justify-between">
				<Link href={"/"} className="text-3xl font-bold">
					Home
				</Link>
				<ul className="flex gap-10 text-3xl font-bold">
					<li>
						<Link href="/product">Product</Link>
					</li>
					<li>
						{data ? (
							<button onClick={() => signOut()}>Logout</button>
						) : (
							<button onClick={() => signIn()}>Login</button>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
