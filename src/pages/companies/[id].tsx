import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsClock, BsGlobe, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { TbBuildingSkyscraper } from "react-icons/tb";

import { allCompanies, getCompanyById } from "@/data/companies";
import { allJobs } from "@/data/jobs";

const DetailCompany = () => {
	const router = useRouter();
	const companyId = Number(router.query.id);
	const company = getCompanyById(companyId) || allCompanies[0];
	const relatedJobs = allJobs.filter((job) => job.company === company?.company);
	const featuredJobs = relatedJobs.slice(0, 6);
	const [isBookmarked, setIsBookmarked] = useState(false);

	if (!company) {
		return null;
	}

	const similarCompanies = allCompanies
		.filter((c) => c.industry === company.industry && c.id !== company.id)
		.slice(0, 3);

	return (
		<div className="relative overflow-hidden bg-slate-50">
			<div className="absolute -left-20 top-28 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
			<div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />
			<div className="container mx-auto flex items-center justify-center px-4 py-10 pt-24">
			<div className="flex w-full flex-col gap-5">
				<div className="relative hidden h-[23rem] w-full overflow-hidden rounded-2xl border border-white/60 shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:block">
					<Image
						src={company.cover}
						alt={company.company}
						fill
						unoptimized
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/20 to-transparent" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.28),_transparent_32%)]" />
					<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/25 to-transparent" />
					<div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white backdrop-blur-md">
						<p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
							Company Profile
						</p>
						<h2 className="mt-2 text-2xl font-bold">{company.company}</h2>
						<p className="mt-1 max-w-lg text-sm text-white/80">{company.tagline}</p>
					</div>
				</div>
				<div className="relative z-10 flex flex-col items-start justify-start gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-5 shadow-[0_22px_55px_rgba(15,23,42,0.1)] backdrop-blur lg:-mt-[3.5rem] lg:w-[84%] lg:self-center">
					<div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-50 via-white to-slate-50" />
					<div className="relative grid w-full grid-cols-12 border-b border-gray-200 pb-2">
						<div className="col-span-12 lg:order-2 lg:col-span-8 lg:pb-5">
							<div className="mb-3 flex flex-wrap items-center gap-2 pt-2">
								<span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
									{company.industry}
								</span>
								<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
									{company.workplace}
								</span>
							</div>
							<div className="mb-2 flex flex-wrap items-center gap-2">
								<h1 className="font-poppins text-3xl font-bold text-slate-800">
									{company.company}
								</h1>
								{company.verified && (
									<svg className="h-5 w-5 text-blue-500 fill-current shrink-0" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
									</svg>
								)}
								<div className="flex items-center gap-1 text-xs text-amber-500 font-semibold bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md ml-1 shadow-sm">
									<span>★</span>
									<span>{company.rating || 4.5}</span>
								</div>
							</div>
							<p className="-mt-2 mb-3 hidden max-w-2xl text-gray-500 lg:block">
								{company.tagline}
							</p>
							<div className="flex flex-col items-start justify-start gap-3 lg:flex-row">
								<div className="flex flex-col gap-2">
									<div className="flex items-center justify-start gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 shadow-sm">
										<CiLocationOn />
										<h1 className="font-poppins text-sm">
											{company.location}
										</h1>
									</div>
									<div className="flex items-center justify-start gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 shadow-sm">
										<BsGlobe />
										<Link
											href={company.website}
											className="text-md font-poppins text-blue-500"
										>
											{company.website}
										</Link>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<div className="flex items-center justify-start gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 shadow-sm">
										<TbBuildingSkyscraper />
										<h1 className="text-md font-poppins">
											{company.industry}
										</h1>
									</div>
									<div className="flex items-center justify-start gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 shadow-sm">
										<GoPeople />
										<h1 className="text-md font-poppins">
											{company.size}
										</h1>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 flex items-center justify-center pb-4 lg:order-1 lg:col-span-4 lg:justify-start lg:pb-0">
							<div className="rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_12px_25px_rgba(15,23,42,0.08)] flex items-center justify-center overflow-hidden">
								<img
									src={company.logo}
									alt={company.company}
									className="h-20 w-20 lg:h-32 lg:w-32 rounded-xl object-contain"
									onError={(e) => {
										e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.company)}&background=f1f5f9&color=1d4ed8&bold=true`;
									}}
								/>
							</div>
						</div>
					</div>

					<div className="relative flex w-full flex-col gap-4 lg:px-4 lg:pt-2">
						<div className="grid gap-3 md:grid-cols-3">
							<div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-4 py-3 shadow-sm">
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
									Open Roles
								</p>
								<p className="mt-2 text-2xl font-bold text-slate-900">
									{relatedJobs.length}
								</p>
								<p className="text-sm text-slate-500">Active jobs linked to this company</p>
							</div>
							<div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-4 py-3 shadow-sm">
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
									Workplace
								</p>
								<p className="mt-2 text-lg font-bold text-slate-900">
									{company.workplace}
								</p>
								<p className="text-sm text-slate-500">{company.secondaryIndustry}</p>
							</div>
							<div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-4 py-3 shadow-sm">
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
									Company Size
								</p>
								<p className="mt-2 text-lg font-bold text-slate-900">
									{company.size}
								</p>
								<p className="text-sm text-slate-500">{company.location}</p>
							</div>
						</div>
						<div className="flex w-full flex-col items-center justify-end gap-3 border-t border-slate-100 pt-4 lg:flex-row">
							<div className="lg:hidden">
								<p className="text-start text-slate-500 text-sm">{company.tagline}</p>
								<p className="mt-2 text-slate-500 text-sm leading-relaxed">{company.desc}</p>
							</div>
							<button
								onClick={() => {
									setIsBookmarked(!isBookmarked);
									alert(isBookmarked ? "Removed bookmark for this company!" : "Company bookmarked successfully!");
								}}
								className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-colors duration-250 shadow-sm cursor-pointer ${
									isBookmarked
										? "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
										: "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
								}`}
							>
								{isBookmarked ? <BsBookmarkFill className="text-blue-700" /> : <BsBookmark />}
								<span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
							</button>

							<button
								onClick={() => {
									document.getElementById("active-jobs-section")?.scrollIntoView({ behavior: "smooth" });
								}}
								className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors duration-250 hover:bg-blue-700 shadow-sm cursor-pointer"
							>
								See all opportunities
							</button>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-12 md:col-span-9">
						<div id="active-jobs-section" className="h-max w-full rounded-2xl border border-slate-200 bg-white shadow-sm">
							<h3 className="border-b border-slate-100 px-6 py-4 text-base font-bold text-slate-800">
								{relatedJobs.length} Jobs available
							</h3>
							<ul className="px-3 py-1">
								{featuredJobs.map((item) => (
									<li
										key={item.id}
										onClick={() => router.push(`/jobs/${item.id}`)}
										className="group cursor-pointer rounded-xl border-b border-slate-100 last:border-b-0 p-4 transition-colors duration-200 hover:bg-slate-50/50"
									>
										<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
											<div>
												<div className="mb-2 flex flex-wrap items-center gap-2">
													<span className="rounded bg-blue-50 text-blue-700 border border-blue-100/45 px-2.5 py-0.5 text-[11px] font-semibold">
														{item.type}
													</span>
													<span className="rounded bg-slate-100 text-slate-600 border border-slate-200/40 px-2.5 py-0.5 text-[11px] font-semibold">
														{item.level}
													</span>
												</div>
												<h4 className="cursor-pointer text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-200">
													{item.title}
												</h4>
												<p className="mt-1 text-xs font-medium text-slate-500">
													{item.location} • {item.category}
												</p>
												<p className="mt-1.5 text-sm font-bold text-blue-700">
													Rp{item.salary}
												</p>
											</div>
											<div className="flex flex-col items-start gap-2 text-sm text-slate-400 lg:items-end">
												<span className="flex items-center gap-1.5 text-xs">
													<BsClock className="text-xs shrink-0" />
													{item.posting}
												</span>
												<span className="rounded bg-slate-100 text-slate-600 border border-slate-200/40 px-2.5 py-0.5 text-[11px] font-semibold">
													{item.workSetup}
												</span>
											</div>
										</div>
									</li>
								))}
							</ul>
							<div className="flex items-center justify-center gap-2 border-t border-slate-100 px-6 py-4 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors duration-200 cursor-pointer">
								<span>More Opportunities</span> <AiOutlineArrowDown className="text-xs" />
							</div>
						</div>

						<div className="mt-5 h-max w-full rounded-2xl border border-slate-200 bg-white shadow-sm">
							<h3 className="border-b border-slate-100 px-6 py-4 text-base font-bold text-slate-800">
								Culture
							</h3>
							<div className="flex flex-col gap-5 p-8 font-poppins">
								<div>
									<h4 className="font-bold text-slate-800 text-sm mb-2">
										What’s it like working at {company.company}?
									</h4>
									<div className="flex flex-col gap-2">
										{company.overview.map((paragraph) => (
											<p key={paragraph} className="text-sm text-slate-500 leading-relaxed">
												{paragraph}
											</p>
										))}
									</div>
								</div>
								<div>
									<h4 className="font-bold text-slate-800 text-sm mb-2">
										Benefits and perks of working with us include:
									</h4>
									<div className="flex flex-col gap-2">
										{company.benefits.map((benefit) => (
											<div key={benefit} className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
												<span className="text-sm text-slate-600">{benefit}</span>
											</div>
										))}
									</div>
								</div>
								<div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-sm text-slate-600 shadow-sm">
									<p>
										Work setup: <span className="font-semibold text-slate-800">{company.workplace}</span>
									</p>
									<p className="mt-2">
										Secondary focus:{" "}
										<span className="font-semibold text-slate-800">{company.secondaryIndustry}</span>
									</p>
								</div>
							</div>
						</div>

						{/* Company Reviews Card */}
						<div className="mt-5 h-max w-full rounded-2xl border border-slate-200 bg-white shadow-sm">
							<h3 className="border-b border-slate-100 px-6 py-4 text-base font-bold text-slate-800">
								Employee Reviews
							</h3>
							<div className="p-6 font-poppins">
								{/* Rating Stats Summary */}
								<div className="flex items-center gap-4 border-b border-slate-100 pb-5 mb-5">
									<div className="text-center">
										<p className="text-4xl font-extrabold text-slate-800">{company.rating || 4.5}</p>
										<p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Out of 5.0</p>
									</div>
									<div className="h-10 w-[1px] bg-slate-200" />
									<div>
										<div className="flex items-center gap-1 text-amber-500">
											{Array.from({ length: 5 }).map((_, i) => (
												<span key={i} className="text-lg">★</span>
											))}
										</div>
										<p className="text-xs text-slate-500 mt-1">Based on verified employee feedback</p>
									</div>
								</div>

								{/* Reviews List */}
								<div className="flex flex-col gap-4">
									{(company.reviews || [
										{ author: "Eka J.", role: "Staff Developer", text: "Proses onboarding sangat rapi dan ramah untuk pemula.", rating: 4, date: "15 Jan 2026" },
										{ author: "Dina M.", role: "HR Consultant", text: "Lingkungan kerja fleksibel dengan budaya kerja saling mendukung.", rating: 5, date: "22 Nov 2025" }
									]).map((rev, idx) => (
										<div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/30">
											<div className="flex justify-between items-start gap-2">
												<div>
													<h4 className="text-sm font-bold text-slate-800">{rev.author}</h4>
													<p className="text-[11px] text-slate-500">{rev.role}</p>
												</div>
												<span className="text-xs font-semibold text-slate-400">{rev.date}</span>
											</div>
											<div className="flex items-center gap-0.5 text-amber-500 mt-1.5 text-xs">
												{Array.from({ length: rev.rating }).map((_, i) => (
													<span key={i}>★</span>
												))}
											</div>
											<p className="text-sm text-slate-600 mt-2 leading-relaxed">&ldquo;{rev.text}&rdquo;</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="col-span-12 h-max w-full rounded-2xl border border-slate-200 bg-white shadow-sm md:col-span-3">
						<h3 className="border-b border-slate-100 px-6 py-4 text-base font-bold text-slate-800">
							Gallery
						</h3>
						<div className="grid grid-cols-12 gap-3 p-4 lg:gap-5 lg:p-8">
							{company.gallery.map((item, index) => (
								<div
									key={`${company.id}-${index + 1}`}
									className="col-span-6 sm:col-span-4 md:col-span-12"
								>
									<div className="relative h-36 w-full overflow-hidden rounded-xl border border-slate-100 shadow-sm">
										<Image
											src={item}
											alt={`${company.company} gallery ${index + 1}`}
											fill
											unoptimized
											className="transition-all duration-300 ease-in-out hover:scale-105 object-cover"
										/>
									</div>
								</div>
							))}
						</div>
					</div>

					{similarCompanies.length > 0 && (
						<div className="mt-5 h-max w-full rounded-2xl border border-slate-200 bg-white shadow-sm">
							<h3 className="border-b border-slate-100 px-6 py-4 text-base font-bold text-slate-800">
								Similar Companies
							</h3>
							<div className="flex flex-col gap-4 p-5">
								{similarCompanies.map((c) => (
									<div
										key={c.id}
										onClick={() => {
											router.push(`/companies/${c.id}`);
										}}
										className="group flex items-center gap-3 cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors"
									>
										<div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white p-1 shrink-0">
											<img
												src={c.logo}
												alt={c.company}
												className="h-8 w-8 object-contain rounded-md"
												onError={(e) => {
													e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(c.company)}&background=f1f5f9&color=1d4ed8&bold=true`;
												}}
											/>
										</div>
										<div className="min-w-0">
											<h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors truncate">{c.company}</h4>
											<p className="text-xs text-slate-500 truncate mt-0.5">{c.industry}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
			</div>
		</div>
	);
};

export default DetailCompany;
