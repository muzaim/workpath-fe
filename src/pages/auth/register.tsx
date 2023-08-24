import React from "react";
import Link from "next/link";

const RegisterPage = () => {
	return (
		<div>
			RegisterPage
			<p>
				sudah punya akun? <Link href={"/auth/login"}>login</Link>
			</p>
		</div>
	);
};

export default RegisterPage;
