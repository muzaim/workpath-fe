import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const RegisterPage = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		setError("");

		const form = event.currentTarget;
		const formData = new FormData(form);
		const payload = {
			fullname: String(formData.get("fullname") || ""),
			email: String(formData.get("email") || ""),
			password: String(formData.get("password") || ""),
		};

		const response = await fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		const result = await response.json();

		if (result.status) {
			form.reset();
			router.push("/auth/login");
			return;
		}

		setError(result.message || "Registrasi belum berhasil.");
		setIsLoading(false);
	};

	return (
		<section className="min-h-screen bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_48%,#f8fbff_100%)]">
			<div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-12">
				<div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-sky-100/50 lg:grid-cols-[1fr_1.05fr]">
					<div className="hidden bg-[#071233] p-10 text-white lg:flex lg:flex-col lg:justify-between">
						<div>
							<div className="relative flex items-center gap-2">
								<div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
									<div className="h-4 w-4 rounded-full bg-white" />
								</div>
								<div className="absolute -left-2 -top-2 h-10 w-10 rounded-full bg-blue-300 opacity-80" />
								<span className="ml-3 font-poppins text-2xl font-bold">
									WorkPath
								</span>
							</div>
							<h1 className="mt-12 max-w-sm text-4xl font-bold leading-tight">
								Create an account and start exploring better roles.
							</h1>
							<p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
								Build your profile, save interesting companies, and discover
								jobs that match your skills and career direction.
							</p>
						</div>
						<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
							<p className="text-sm text-slate-300">What you get after sign up</p>
							<ul className="mt-4 space-y-3 text-sm text-white">
								<li>Access to curated job and company pages</li>
								<li>Cleaner way to organize opportunities</li>
								<li>Better visibility into roles and hiring teams</li>
							</ul>
						</div>
					</div>

					<div className="p-6 sm:p-10">
						<div className="mx-auto max-w-md">
							<div className="lg:hidden">
								<div className="relative flex items-center gap-2">
									<div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
										<div className="h-4 w-4 rounded-full bg-white" />
									</div>
									<div className="absolute -left-2 -top-2 h-10 w-10 rounded-full bg-blue-300 opacity-80" />
									<span className="ml-3 font-poppins text-2xl font-bold text-blue-700">
										WorkPath
									</span>
								</div>
							</div>

							<h2 className="mt-8 text-3xl font-bold text-slate-900">
								Create your account
							</h2>
							<p className="mt-2 text-sm text-slate-500">
								Start your journey with a simple, professional profile.
							</p>

							{error ? (
								<div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
									{error}
								</div>
							) : null}

							<form className="mt-8 space-y-5" onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="fullname"
										className="mb-2 block text-sm font-semibold text-slate-700"
									>
										Full name
									</label>
									<input
										type="text"
										name="fullname"
										id="fullname"
										placeholder="Your full name"
										className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="mb-2 block text-sm font-semibold text-slate-700"
									>
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										placeholder="name@company.com"
										className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="mb-2 block text-sm font-semibold text-slate-700"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
										required
									/>
								</div>

								<button
									type="submit"
									className="w-full rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
									disabled={isLoading}
								>
									{isLoading ? "Creating account..." : "Sign Up"}
								</button>
							</form>

							<p className="mt-6 text-sm text-slate-500">
								Sudah punya akun?{" "}
								<Link
									href="/auth/login"
									className="font-semibold text-blue-700 hover:underline"
								>
									Login di sini
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RegisterPage;
