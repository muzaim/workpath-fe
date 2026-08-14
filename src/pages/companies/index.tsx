import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BsFilter, BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";

import { allCompanies } from "@/data/companies";
import { allJobs } from "@/data/jobs";

const Companies = () => {
	const [showType, setShowType] = useState(true);
	const [showCompanySize, setShowCompanySize] = useState(true);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	const featuredCompanies = allCompanies.length;
	const remoteFriendly = allCompanies.filter(
		(company) => company.workplace !== "Onsite"
	).length;
	const openRoles = allJobs.length;

	const handleClickFilter = () => {
		setLoading(true);
		window.setTimeout(() => {
			setLoading(false);
		}, 1200);
	};

	useEffect(() => {
		const timer = window.setTimeout(() => {
			setLoading(false);
		}, 1200);

		return () => window.clearTimeout(timer);
	}, []);

	return (
		<>
			<div className="relative h-max w-full overflow-hidden bg-hero bg-cover pb-10 pt-24 lg:pb-0 lg:pt-0">
				<div className="absolute inset-0 bg-gradient-to-b from-white/70 via-sky-50/75 to-white/90" />
				<div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
				<div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />
				<div className="relative grid grid-cols-12 items-center px-4 md:container md:mx-auto">
					<div className="col-span-12 mx-auto mt-5 w-full text-center md:py-20">
						<h1 className="font-poppins text-5xl font-bold leading-tight tracking-tighter text-gray-700 lg:text-7xl">
							Find your
						</h1>

						<h1 className="font-KaushanScript text-5xl font-bold leading-tight tracking-wide text-sky-600 lg:text-7xl">
							dream companies
						</h1>
						<p className="mx-auto mt-3 w-full font-poppins text-gray-600 sm:w-3/4 lg:text-xl">
							Explore trusted companies, learn about their culture, and see
							active opportunities before you apply.
						</p>
						<div className="mx-auto mt-4 flex h-auto w-full flex-col gap-3 rounded-2xl border border-white/70 bg-white/90 px-6 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur sm:w-3/4 md:w-3/4 lg:w-3/4 lg:flex-row lg:justify-between lg:gap-10 lg:px-5 lg:py-4">
							<div className="flex w-full items-center justify-center gap-1">
								<BsSearch />
								<input
									type="text"
									className="w-full border-0 border-b border-slate-300 bg-transparent px-3 py-2 focus:outline-none"
									placeholder="Company name or keyword"
								/>
							</div>
							<div className="flex w-full items-center justify-center gap-1">
								<GoLocation />
								<select
									id="industries"
									defaultValue="Technology"
									className="w-full bg-white px-2 py-2"
								>
									<option>Technology</option>
									<option>Business</option>
									<option>Management</option>
									<option>Finance</option>
									<option>Human Resources</option>
								</select>
							</div>
							<button
								className="rounded-xl border border-transparent bg-blue-700 px-6 py-3 font-bold text-white transition duration-300 hover:border-blue-700 hover:bg-white hover:text-blue-700 lg:w-[25rem]"
								onClick={handleClickFilter}
							>
								Search companies
							</button>
						</div>
						<div className="mt-3 w-full text-center font-poppins text-sky-900 lg:text-lg">
							<p>Popular : Traveloka, Airbnb, Grab</p>
						</div>
						<div className="mt-6 grid grid-cols-1 gap-4 sm:mx-auto sm:w-3/4 md:grid-cols-3">
							<div className="rounded-2xl border border-white/70 bg-white/85 px-5 py-4 shadow-[0_14px_36px_rgba(15,23,42,0.08)] backdrop-blur">
								<p className="text-sm text-gray-500">Companies listed</p>
								<h3 className="mt-1 text-2xl font-bold text-gray-800">
									{featuredCompanies}
								</h3>
							</div>
							<div className="rounded-2xl border border-white/70 bg-white/85 px-5 py-4 shadow-[0_14px_36px_rgba(15,23,42,0.08)] backdrop-blur">
								<p className="text-sm text-gray-500">Open roles</p>
								<h3 className="mt-1 text-2xl font-bold text-gray-800">
									{openRoles}
								</h3>
							</div>
							<div className="rounded-2xl border border-white/70 bg-white/85 px-5 py-4 shadow-[0_14px_36px_rgba(15,23,42,0.08)] backdrop-blur">
								<p className="text-sm text-gray-500">Remote friendly</p>
								<h3 className="mt-1 text-2xl font-bold text-gray-800">
									{remoteFriendly} companies
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<button className="flex w-full items-center justify-center gap-3 border py-5 lg:hidden">
				<BsFilter className="text-xl" />
				<span className="text-md">More Filter</span>
			</button>

			<div className="container mx-auto px-4 pt-10 lg:px-0">
				<div className="grid grid-cols-10 gap-10">
					<div className="hidden lg:col-span-2 lg:block">
						<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm mb-4">
							<div
								className="flex items-center justify-between cursor-pointer select-none text-slate-800"
								onClick={() => setShowType(!showType)}
							>
								<h3 className="font-bold text-xs uppercase tracking-wider">Industry</h3>
								<AiOutlineUp
									className={`text-slate-400 text-xs transition-transform duration-200 ${
										showType ? "rotate-180" : ""
									}`}
								/>
							</div>
							{showType && (
								<div className="mt-4 flex flex-col">
									{[
										"Advertising (2)",
										"Business Service (3)",
										"Blockchain (8)",
										"Cloud (5)",
										"Consumer Tech (6)",
										"Education (4)",
										"Fintech (7)",
										"Gaming (3)",
									].map((item) => (
										<div key={item} className="mb-3 flex items-center gap-2.5 cursor-pointer last:mb-0">
											<input
												id={item}
												type="checkbox"
												className="h-4 w-4 rounded border-slate-300 bg-slate-50 text-blue-600 focus:ring-blue-500 cursor-pointer"
												onClick={handleClickFilter}
											/>
											<label
												htmlFor={item}
												className="text-sm font-medium text-slate-600 select-none cursor-pointer"
											>
												{item}
											</label>
										</div>
									))}
								</div>
							)}
						</div>

						<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm mb-4">
							<div
								className="flex items-center justify-between cursor-pointer select-none text-slate-800"
								onClick={() => setShowCompanySize(!showCompanySize)}
							>
								<h3 className="font-bold text-xs uppercase tracking-wider">Company Size</h3>
								<AiOutlineUp
									className={`text-slate-400 text-xs transition-transform duration-200 ${
										showCompanySize ? "rotate-180" : ""
									}`}
								/>
							</div>
							{showCompanySize && (
								<div className="mt-4 flex flex-col">
									{["1-50 (2)", "51-150 (3)", "250-500 (2)", "501-1000 (1)", "1000+ (4)"].map((item) => (
										<div key={item} className="mb-3 flex items-center gap-2.5 cursor-pointer last:mb-0">
											<input
												id={item}
												type="checkbox"
												className="h-4 w-4 rounded border-slate-300 bg-slate-50 text-blue-600 focus:ring-blue-500 cursor-pointer"
												onClick={handleClickFilter}
											/>
											<label
												htmlFor={item}
												className="text-sm font-medium text-slate-600 select-none cursor-pointer"
											>
												{item}
											</label>
										</div>
									))}
								</div>
							)}
						</div>
					</div>

					{!loading ? (
						<div className="col-span-10 mt-5 flex flex-col gap-4 pb-20 lg:col-span-8">
							<div>
								<h2 className="font-poppins text-2xl font-bold tracking-tight text-slate-800">
									All Companies
								</h2>
								<div className="mt-1 flex items-center justify-between">
									<span className="text-sm text-slate-500">
										Showing {allCompanies.length} company profiles
									</span>
									<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer transition-colors duration-150">
										Most relevant <AiOutlineDown className="text-[10px]" />
									</span>
								</div>
							</div>
							<div className="grid grid-cols-12 gap-5">
								{allCompanies.map((item) => {
									const companyJobsCount = allJobs.filter(
										(job) => job.company.toLowerCase() === item.company.toLowerCase()
									).length;

									return (
										<div
											key={item.id}
											className="group col-span-12 cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:col-span-6 lg:col-span-6"
											onClick={() => {
												router.push(`/companies/${item.id}`);
											}}
										>
											<div className="relative h-28 w-full overflow-hidden border-b border-slate-200 bg-slate-100">
												<Image
													src={item.cover}
													alt={item.company}
													fill
													unoptimized
													className="object-cover"
												/>
												<div className="absolute inset-0 bg-gradient-to-r from-slate-900/35 via-slate-900/10 to-transparent" />
												<div className="absolute left-5 top-5">
													<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
														{item.workplace}
													</span>
												</div>
											</div>
											<div className="p-5">
												<div className="flex items-start justify-between gap-3">
													<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden p-1.5">
														<img
															src={item.logo}
															alt={item.company}
															className="h-12 w-12 object-contain rounded-xl"
															onError={(e) => {
																e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.company)}&background=f1f5f9&color=1d4ed8&bold=true`;
															}}
														/>
													</div>
													<span className="rounded bg-blue-50 text-blue-700 border border-blue-100/50 px-3 py-1 text-xs font-bold">
														{companyJobsCount} Open Roles
													</span>
												</div>
												<div className="mt-4">
													<div className="mb-3 flex flex-wrap gap-1.5">
														<span className="rounded bg-sky-50 text-sky-700 border border-sky-100/40 px-2.5 py-0.5 text-[11px] font-semibold">
															{item.industry}
														</span>
														{item.secondaryIndustry && (
															<span className="rounded bg-amber-50 text-amber-700 border border-amber-100/40 px-2.5 py-0.5 text-[11px] font-semibold">
																{item.secondaryIndustry}
															</span>
														)}
													</div>
													<h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-blue-700 transition-colors">
														{item.company}
													</h3>
													<p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
														{item.tagline}
													</p>
													<p className="my-3 text-xs leading-relaxed text-slate-500 line-clamp-2">
														{item.desc}
													</p>
												</div>
												<div className="mt-4 grid gap-3 grid-cols-2">
													<div className="rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-2.5">
														<p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
															Location
														</p>
														<p className="mt-0.5 text-xs font-bold text-slate-700 truncate">
															{item.location}
														</p>
													</div>
													<div className="rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-2.5">
														<p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
															Company Size
														</p>
														<p className="mt-0.5 text-xs font-bold text-slate-700 truncate">
															{item.size}
														</p>
													</div>
												</div>
												<div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-400">
													<span>{item.website.replace("https://", "").replace("www.", "")}</span>
													<span className="font-bold text-blue-700 flex items-center gap-1 group-hover:text-blue-800">
														View profile <FiArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-0.5" />
													</span>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					) : (
						<div className="col-span-10 mt-5 flex min-h-screen flex-col items-center gap-4 pb-20 lg:col-span-8">
							<div role="" className="mt-10">
								<svg
									aria-hidden="true"
									className="mr-2 inline h-10 w-10 animate-spin fill-blue-600 text-gray-200 dark:text-gray-100"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="currentColor"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentFill"
									/>
								</svg>
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Companies;
