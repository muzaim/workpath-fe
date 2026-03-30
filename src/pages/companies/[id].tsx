import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsClock, BsGlobe } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiBookmark } from "react-icons/fi";
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

	if (!company) {
		return null;
	}

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
							<h1 className="mb-2 font-poppins text-3xl font-bold text-slate-800">
								{company.company}
							</h1>
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
							<div className="rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_12px_25px_rgba(15,23,42,0.08)]">
								<Image
									src={company.logo}
									alt={company.company}
									width={128}
									height={128}
									className="h-20 w-20 rounded-xl object-cover lg:h-32 lg:w-32"
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
						<div className="flex w-full flex-col items-center justify-end gap-5 border-t border-slate-100 pt-3 lg:flex-row">
						<div className="lg:hidden">
							<p className="text-start text-gray-500">{company.tagline}</p>
							<p className="mt-2 text-gray-500">{company.desc}</p>
						</div>
						<div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-slate-700 shadow-sm transition hover:bg-slate-50">
							<FiBookmark className="text-xl" />
							<span className="text-lg font-bold">Mark</span>
						</div>

						<button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700">
							See all opportunity
						</button>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-12 md:col-span-9">
						<div className="h-max w-full rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
							<h1 className="border-b border-gray-200 px-9 py-5 text-lg font-bold">
								{relatedJobs.length} Jobs available
							</h1>
							<ul className="px-4 py-2">
								{featuredJobs.map((item) => (
									<li
										key={item.id}
										onClick={() => router.push(`/jobs/${item.id}`)}
										className="cursor-pointer rounded-xl border-b border-gray-200 p-5 transition hover:bg-slate-50"
									>
										<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
											<div>
											<div className="mb-2 flex flex-wrap items-center gap-2">
												<span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
													{item.type}
												</span>
												<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
													{item.level}
												</span>
											</div>
											<h1 className="cursor-pointer text-lg font-poppins capitalize text-blue-700">
												{item.title}
											</h1>
											<h1 className="mt-1 text-sm font-poppins text-gray-400">
												{item.location} • {item.category}
											</h1>
											<h1 className="mt-1 text-sm font-poppins text-blue-500">
												Rp{item.salary}
											</h1>
											</div>
											<div className="flex flex-col items-start gap-2 text-sm text-gray-400 lg:items-end">
											<span className="flex items-center gap-1">
												<BsClock className="text-sm" />
												{item.posting}
											</span>
											<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
												{item.workSetup}
											</span>
											</div>
										</div>
									</li>
								))}
							</ul>
							<h1 className="flex items-center justify-end gap-2 border-t border-gray-200 px-9 py-5 text-lg font-semibold">
								More <AiOutlineArrowDown />
							</h1>
						</div>

						<div className="mt-5 h-max w-full rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
							<h1 className="border-b border-gray-200 px-9 py-5 text-lg font-bold">
								Culture
							</h1>
							<div className="flex flex-col gap-5 p-8 font-poppins">
								<div>
									<h1 className="font-bold text-md">
										What’s it like working at {company.company}?
									</h1>
									<div className="mt-2 flex flex-col gap-2">
										{company.overview.map((paragraph) => (
											<p key={paragraph} className="text-sm text-gray-500">
												{paragraph}
											</p>
										))}
									</div>
								</div>
								<div>
									<h1 className="font-bold text-md">
										Benefits and perks of working with us include:
									</h1>
									<div className="mt-2 flex flex-col gap-2">
										{company.benefits.map((benefit) => (
											<h1 key={benefit} className="text-sm">
												<span className="text-gray-500">{benefit}</span>
											</h1>
										))}
									</div>
								</div>
								<div className="rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50/50 p-4 text-sm text-gray-600 shadow-sm">
									<p>
										Work setup: <span className="font-semibold">{company.workplace}</span>
									</p>
									<p className="mt-2">
										Secondary focus:{" "}
										<span className="font-semibold">{company.secondaryIndustry}</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-span-12 h-max w-full rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)] md:col-span-3">
						<h1 className="border-b border-gray-200 px-9 py-5 text-lg font-bold">
							Gallery
						</h1>
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
				</div>
			</div>
			</div>
		</div>
	);
};

export default DetailCompany;
