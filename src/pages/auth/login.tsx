import React from "react";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div className="container">
			<h1>LoginPage</h1>
			<p>
				belum punya akun?{" "}
				<Link href={"/auth/register"} style={{ color: "blue" }}>
					daftar
				</Link>
			</p>
		</div>
	);
};

export default LoginPage;
