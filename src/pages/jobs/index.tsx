import React, { useEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BsFilter, BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import LoadingBar from "@/components/elements/jobs/LoadingBar";
import { allJobs } from "@/data/jobs";

const employmentOptions = Array.from(new Set(allJobs.map((job) => job.type)));
const categoryOptions = Array.from(new Set(allJobs.map((job) => job.category)));
const levelOptions = Array.from(new Set(allJobs.map((job) => job.level)));
const salaryOptions = [
	{ id: "salary-under-10", label: "Di bawah Rp10 juta", min: 0, max: 9999999 },
	{ id: "salary-10-15", label: "Rp10 juta - Rp15 juta", min: 10000000, max: 15000000 },
	{ id: "salary-15-20", label: "Rp15 juta - Rp20 juta", min: 15000001, max: 20000000 },
	{ id: "salary-20-up", label: "Di atas Rp20 juta", min: 20000001, max: Infinity },
];

const parseSalaryRange = (salary: string) => {
	const [minSalary, maxSalary] = salary.split(" - ").map((item) =>
		Number(item.replace(/\./g, ""))
	);

	return {
		min: minSalary,
		max: maxSalary ?? minSalary,
	};
};

const getCountMap = (items: string[], source: typeof allJobs, key: "type" | "category" | "level") =>
	items.reduce<Record<string, number>>((acc, item) => {
		acc[item] = source.filter((job) => job[key] === item).length;
		return acc;
	}, {});

const employmentCount = getCountMap(employmentOptions, allJobs, "type");
const categoryCount = getCountMap(categoryOptions, allJobs, "category");
const levelCount = getCountMap(levelOptions, allJobs, "level");

const Jobs = () => {
	const [typeEmployee, setTypeEmployee] = useState(true);
	const [categories, setCategories] = useState(true);
	const [jobLevel, setJobLevel] = useState(true);
	const [salary, setSalary] = useState(true);
	const [loading, setLoading] = useState(true);
	const [visibleJobsCount, setVisibleJobsCount] = useState(10);
	const [loadingMore, setLoadingMore] = useState(false);
	const [searchKeyword, setSearchKeyword] = useState("");
	const [selectedLocation, setSelectedLocation] = useState("All locations");
	const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
	const [selectedSalaryRanges, setSelectedSalaryRanges] = useState<string[]>([]);

	const router = useRouter();
	const loadMoreRef = useRef<HTMLDivElement | null>(null);
	const featuredJobs = allJobs.filter((job) => job.featured).length;
	const remoteJobs = allJobs.filter((job) => job.workSetup === "Remote").length;

	const filteredJobs = useMemo(() => {
		return allJobs.filter((job) => {
			const matchesKeyword =
				searchKeyword.trim() === "" ||
				[job.title, job.company, job.category, job.level]
					.join(" ")
					.toLowerCase()
					.includes(searchKeyword.toLowerCase());

			const matchesLocation =
				selectedLocation === "All locations" || job.location === selectedLocation;

			const matchesType =
				selectedTypes.length === 0 || selectedTypes.includes(job.type);

			const matchesCategory =
				selectedCategories.length === 0 ||
				selectedCategories.includes(job.category);

			const matchesLevel =
				selectedLevels.length === 0 || selectedLevels.includes(job.level);

			const jobSalary = parseSalaryRange(job.salary);
			const matchesSalary =
				selectedSalaryRanges.length === 0 ||
				salaryOptions
					.filter((option) => selectedSalaryRanges.includes(option.id))
					.some((option) => jobSalary.min >= option.min && jobSalary.min <= option.max);

			return (
				matchesKeyword &&
				matchesLocation &&
				matchesType &&
				matchesCategory &&
				matchesLevel &&
				matchesSalary
			);
		});
	}, [
		searchKeyword,
		selectedLocation,
		selectedTypes,
		selectedCategories,
		selectedLevels,
		selectedSalaryRanges,
	]);

	const visibleJobs = filteredJobs.slice(0, visibleJobsCount);

	const handleClickFilter = () => {
		setLoading(true);
		setVisibleJobsCount(10);
		window.setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	const toggleFilter = (
		value: string,
		selected: string[],
		setSelected: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		setSelected((prev) =>
			prev.includes(value)
				? prev.filter((item) => item !== value)
				: [...prev, value]
		);
	};

	useEffect(() => {
		const timer = window.setTimeout(() => {
			setLoading(false);
		}, 800);

		return () => window.clearTimeout(timer);
	}, []);

	useEffect(() => {
		handleClickFilter();
	}, [
		selectedTypes,
		selectedCategories,
		selectedLevels,
		selectedSalaryRanges,
		searchKeyword,
		selectedLocation,
	]);

	useEffect(() => {
		if (
			loading ||
			visibleJobsCount >= filteredJobs.length ||
			!loadMoreRef.current
		) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;

				if (!entry.isIntersecting || loadingMore) {
					return;
				}

				setLoadingMore(true);
				window.setTimeout(() => {
					setVisibleJobsCount((current) =>
						Math.min(current + 10, filteredJobs.length)
					);
					setLoadingMore(false);
				}, 400);
			},
			{
				rootMargin: "0px 0px 200px 0px",
			}
		);

		observer.observe(loadMoreRef.current);

		return () => observer.disconnect();
	}, [loading, visibleJobsCount, filteredJobs.length, loadingMore]);

	return (
		<>
			<div className="w-full h-max bg-hero bg-cover pb-10 pt-20 lg:pb-0 lg:pt-0">
				<div className="grid grid-cols-12 items-center px-4 md:container md:mx-auto">
					<div className="col-span-12 mx-auto mt-5 w-full text-center md:py-20">
						<h1 className="font-poppins text-5xl font-bold leading-tight tracking-tighter text-gray-700 md:text-6xl lg:text-7xl">
							Find your
						</h1>

						<h1 className="font-KaushanScript text-5xl font-bold leading-tight tracking-wide text-sky-600 md:text-6xl lg:text-7xl">
							dream job
						</h1>
						<p className="mx-auto mt-3 w-full font-poppins text-gray-600 sm:w-3/4 md:text-lg lg:text-xl">
							Browse curated roles from top companies, compare salary ranges,
							and find opportunities that match your skills faster.
						</p>
						<div className="mx-auto mt-4 flex h-auto w-full flex-col gap-3 rounded-xl border border-slate-100 bg-white px-6 py-5 shadow-lg sm:w-3/4 md:w-3/2 lg:w-3/4 lg:flex-row lg:justify-between lg:gap-10 lg:px-5 lg:py-4">
							<div className="flex w-full items-center justify-center gap-1">
								<BsSearch />
								<input
									type="text"
									value={searchKeyword}
									onChange={(event) => setSearchKeyword(event.target.value)}
									className="w-full border-0 border-b border-slate-300 px-3 py-2 focus:outline-none"
									placeholder="Job title or keyword"
								/>
							</div>
							<div className="flex w-full items-center justify-center gap-1">
								<GoLocation />
								<select
									id="countries"
									value={selectedLocation}
									onChange={(event) => setSelectedLocation(event.target.value)}
									className="w-full border-solid bg-white px-2 py-2 focus:outline-none"
								>
									<option>All locations</option>
									{Array.from(new Set(allJobs.map((job) => job.location))).map(
										(location) => (
											<option key={location} value={location}>
												{location}
											</option>
										)
									)}
								</select>
							</div>
							<button
								className="border border-transparent bg-blue-700 px-6 py-3 font-bold text-white transition duration-300 hover:border-blue-700 hover:bg-white hover:text-blue-700 lg:w-[25rem]"
								onClick={handleClickFilter}
							>
								Search my job
							</button>
						</div>
						<div className="mt-3 w-full text-center font-poppins text-sky-900 lg:text-lg">
							<p>Popular : Frontend Developer, Product Designer, Backend Developer</p>
						</div>
						<div className="mt-6 grid grid-cols-1 gap-4 sm:mx-auto sm:w-3/4 md:grid-cols-3">
							<div className="rounded-xl bg-white/80 px-5 py-4 shadow-md">
								<p className="text-sm text-gray-500">Open positions</p>
								<h3 className="mt-1 text-2xl font-bold text-gray-800">
									{allJobs.length}
								</h3>
							</div>
							<div className="rounded-xl bg-white/80 px-5 py-4 shadow-md">
								<p className="text-sm text-gray-500">Featured jobs</p>
								<h3 className="mt-1 text-2xl font-bold text-gray-800">
									{featuredJobs}
								</h3>
							</div>
							<div className="rounded-xl bg-white/80 px-5 py-4 shadow-md">
								<p className="text-sm text-gray-500">Remote friendly</p>
								<h3 className="mt-1 text-2xl font-bold text-gray-800">
									{remoteJobs} jobs
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
						<div className="mt-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
							<div
								className="flex items-center justify-between text-xl"
								onClick={() => setTypeEmployee(!typeEmployee)}
							>
								<h1 className="cursor-pointer font-bold">Type of employment</h1>
								<AiOutlineUp
									className={`cursor-pointer ${
										typeEmployee
											? "rotate-180 transition-all duration-150 ease-in"
											: "transition-all duration-150 ease-in"
									}`}
								/>
							</div>
							{typeEmployee ? (
								<div className="mt-4">
									{employmentOptions.map((item) => (
										<label key={item} className="mb-4 flex items-center">
											<input
												type="checkbox"
												checked={selectedTypes.includes(item)}
												onChange={() =>
													toggleFilter(item, selectedTypes, setSelectedTypes)
												}
												className="h-4 w-4 rounded-lg bg-gray-100 text-blue-600"
											/>
											<span className="ml-2 text-lg font-medium text-gray-500">
												{item} ({employmentCount[item]})
											</span>
										</label>
									))}
								</div>
							) : null}
						</div>

						<div className="mt-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
							<div
								className="flex items-center justify-between text-xl"
								onClick={() => setCategories(!categories)}
							>
								<h1 className="cursor-pointer font-bold">Categories</h1>
								<AiOutlineUp
									className={`cursor-pointer ${
										categories
											? "rotate-180 transition-all duration-150 ease-in"
											: "transition-all duration-150 ease-in"
									}`}
								/>
							</div>
							{categories ? (
								<div className="mt-4">
									{categoryOptions.map((item) => (
										<label key={item} className="mb-4 flex items-center">
											<input
												type="checkbox"
												checked={selectedCategories.includes(item)}
												onChange={() =>
													toggleFilter(
														item,
														selectedCategories,
														setSelectedCategories
													)
												}
												className="h-4 w-4 rounded-lg bg-gray-100 text-blue-600"
											/>
											<span className="ml-2 text-lg font-medium text-gray-500">
												{item} ({categoryCount[item]})
											</span>
										</label>
									))}
								</div>
							) : null}
						</div>

						<div className="mt-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
							<div
								className="flex items-center justify-between text-xl"
								onClick={() => setJobLevel(!jobLevel)}
							>
								<h1 className="cursor-pointer font-bold">Job level</h1>
								<AiOutlineUp
									className={`cursor-pointer ${
										jobLevel
											? "rotate-180 transition-all duration-150 ease-in"
											: "transition-all duration-150 ease-in"
									}`}
								/>
							</div>
							{jobLevel ? (
								<div className="mt-4">
									{levelOptions.map((item) => (
										<label key={item} className="mb-4 flex items-center">
											<input
												type="checkbox"
												checked={selectedLevels.includes(item)}
												onChange={() =>
													toggleFilter(item, selectedLevels, setSelectedLevels)
												}
												className="h-4 w-4 rounded-lg bg-gray-100 text-blue-600"
											/>
											<span className="ml-2 text-lg font-medium text-gray-500">
												{item} ({levelCount[item]})
											</span>
										</label>
									))}
								</div>
							) : null}
						</div>

						<div className="mt-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
							<div
								className="flex items-center justify-between text-xl"
								onClick={() => setSalary(!salary)}
							>
								<h1 className="cursor-pointer font-bold">Salary</h1>
								<AiOutlineUp
									className={`cursor-pointer ${
										salary
											? "rotate-180 transition-all duration-150 ease-in"
											: "transition-all duration-150 ease-in"
									}`}
								/>
							</div>
							{salary ? (
								<div className="mt-4">
									{salaryOptions.map((item) => {
										const count = allJobs.filter((job) => {
											const jobSalary = parseSalaryRange(job.salary);
											return jobSalary.min >= item.min && jobSalary.min <= item.max;
										}).length;

										return (
											<label key={item.id} className="mb-4 flex items-center">
												<input
													type="checkbox"
													checked={selectedSalaryRanges.includes(item.id)}
													onChange={() =>
														toggleFilter(
															item.id,
															selectedSalaryRanges,
															setSelectedSalaryRanges
														)
													}
													className="h-4 w-4 rounded-lg bg-gray-100 text-blue-600"
												/>
												<span className="ml-2 text-lg font-medium text-gray-500">
													{item.label} ({count})
												</span>
											</label>
										);
									})}
								</div>
							) : null}
						</div>
					</div>

					{!loading ? (
						<div className="col-span-10 mt-5 flex flex-col justify-center gap-4 pb-20 lg:col-span-8 lg:justify-start">
							<div>
								<h1 className="font-poppins text-3xl font-semibold">All Jobs</h1>
								<div className="mt-2 flex items-center justify-between">
									<span className="text-gray-500">
										Showing {visibleJobs.length} of {filteredJobs.length} curated
										results
									</span>
									<span className="flex items-center justify-center gap-3 font-bold">
										Most relevant <AiOutlineDown />
									</span>
								</div>
							</div>
							<div className="grid grid-cols-12 gap-6">
								{visibleJobs.map((item) => (
									<div
										key={item.id}
										onClick={() => router.push(`/jobs/${item.id}`)}
										className="group col-span-12 cursor-pointer rounded-xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-6"
									>
										<div className="flex flex-col gap-5 md:flex-row md:items-start">
											<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border">
												<Image
													src={item.logo}
													alt={item.company}
													width={56}
													height={56}
													className="object-cover"
												/>
											</div>

											<div className="flex w-full flex-col gap-4 md:flex-row md:justify-between">
												<div>
													<div className="flex flex-wrap items-center gap-2">
														{item.featured ? (
															<span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
																Featured
															</span>
														) : null}
														<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
															{item.posting}
														</span>
													</div>
													<h3 className="text-lg font-semibold lg:text-xl">
														{item.title}
													</h3>

													<div className="mt-1 flex flex-wrap gap-3 text-sm text-gray-500">
														<span>{item.company}</span>
														<span>•</span>
														<span>{item.location}</span>
													</div>

													<p className="mt-2 text-base font-semibold text-blue-700">
														IDR {item.salary}
													</p>

													<div className="mt-4 flex flex-wrap items-center gap-3">
														<span
															className={`rounded-full px-3 py-1 text-xs font-semibold ${
																item.type === "Freelance"
																	? "bg-green-100 text-green-700"
																	: "bg-yellow-100 text-yellow-700"
															}`}
														>
															{item.type}
														</span>

														<span className="rounded-full border border-yellow-400 px-3 py-1 text-xs font-semibold text-yellow-500">
															{item.category}
														</span>
														<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
															{item.level}
														</span>
													</div>
												</div>

												<div className="flex w-full flex-col gap-3 md:max-w-[220px]">
													<button
														onClick={(e) => {
															e.stopPropagation();
															router.push(`/jobs/${item.id}`);
														}}
														className="rounded-lg bg-blue-700 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
													>
														Apply Now
													</button>

													<LoadingBar progress={item.applied} total={item.capacity} />

													<p className="text-xs text-gray-500">
														<span className="font-semibold text-gray-700">
															{item.applied}
														</span>{" "}
														applied of {item.capacity} capacity
													</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>

							{visibleJobsCount < filteredJobs.length ? (
								<div
									ref={loadMoreRef}
									className="flex min-h-[72px] items-center justify-center"
								>
									{loadingMore ? (
										<div className="flex items-center gap-3 text-sm font-medium text-gray-500">
											<div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600" />
											<span>Loading more jobs...</span>
										</div>
									) : (
										<span className="text-sm text-gray-400">
											Scroll down to load more jobs
										</span>
									)}
								</div>
							) : null}
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

export default Jobs;
