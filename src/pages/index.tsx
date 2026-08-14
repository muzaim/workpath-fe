import Image from "next/image";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { BsSearch, BsGraphUp, BsPeople } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdOutlineDesignServices, MdEngineering } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { PiMoneyLight } from "react-icons/pi";
import { FiMonitor, FiArrowRight } from "react-icons/fi";
import { FaBusinessTime } from "react-icons/fa";

import Girl from "/public/img/util/girl.png";
import Nadia from "/public/img/util/nadia.png";
import { useRouter } from "next/router";
import { allJobs } from "@/data/jobs";

const dataCategory = [
	{
		id: 1,
		logo: (
			<MdOutlineDesignServices className="w-full h-full text-blue-700 group-hover:text-white" />
		),
		name: "Design",
		count: 235,
	},
	{
		id: 2,
		logo: (
			<BsGraphUp className="w-full h-full text-blue-700 group-hover:text-white" />
		),
		name: "Sales",
		count: 756,
	},
	{
		id: 3,
		logo: (
			<GiReceiveMoney className="w-full h-full text-blue-700 group-hover:text-white" />
		),
		name: "Marketing",
		count: 140,
	},
	{
		id: 4,
		logo: (
			<PiMoneyLight className="w-full h-full text-blue-700 group-hover:text-white" />
		),
		name: "Finance",
		count: 316,
	},
	{
		id: 5,
		logo: (
			<FiMonitor className="w-full h-full text-blue-700 group-hover:text-white" />
		),
		name: "Technology",
		count: 335,
	},
	{
		id: 6,
		logo: (
			<MdEngineering className="w-full h-full text-blue-700 group-hover:text-white" />
		),
		name: "Engineering",
		count: 167,
	},
	{
		id: 7,
		logo: (
			<FaBusinessTime className="w-full h-full text-blue-700 group-hover:text-white" />
		),
		name: "Business",
		count: 461,
	},
	{
		id: 8,
		logo: (
			<BsPeople className="w-full h-full text-blue-700 group-hover:text-white" />
		),
		name: "Human Resources",
		count: 418,
	},
];

interface FeaturedJobCardProps {
	job: (typeof allJobs)[number];
	onClick: () => void;
	getHighlight: (job: (typeof allJobs)[number]) => string;
}

const FeaturedJobCard = ({ job, onClick, getHighlight }: FeaturedJobCardProps) => {
	const highlight = getHighlight(job);

	// Get subtle color values based on highlight type
	let highlightBg = "bg-slate-100 text-slate-700";
	if (highlight === "Featured") {
		highlightBg = "bg-amber-100 text-amber-800";
	} else if (highlight === "Remote") {
		highlightBg = "bg-sky-100 text-sky-800";
	} else if (highlight === "New") {
		highlightBg = "bg-green-100 text-green-800";
	} else if (highlight === "Hot Role") {
		highlightBg = "bg-rose-100 text-rose-800";
	}

	return (
		<div
			onClick={onClick}
			className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer h-full"
		>
			<div>
				{/* Top row: Logo and status badges */}
				<div className="flex items-center justify-between gap-3">
					<div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-white p-1 shrink-0">
						<img
							src={job.logo}
							alt={job.company}
							className="h-10 w-10 object-contain rounded-md"
							onError={(e) => {
								e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=f1f5f9&color=1d4ed8&bold=true`;
							}}
						/>
					</div>
					<div className="flex flex-col items-end gap-2">
						<span className={`rounded-full px-3 py-1 text-xs font-semibold ${highlightBg}`}>
							{highlight}
						</span>
						<h1 className="border border-blue-700 px-3 py-1 text-sm font-bold text-blue-700 rounded">
							{job.type}
						</h1>
					</div>
				</div>

				{/* Middle part: Job titles and details */}
				<div className="mt-4">
					<h3 className="text-lg font-bold text-slate-800 transition-colors group-hover:text-blue-700 line-clamp-1">
						{job.title}
					</h3>
					<div className="mt-1 flex gap-2 text-sm text-gray-500">
						<span>{job.company}</span>
						<span>•</span>
						<span>{job.location}</span>
					</div>
					<p className="mt-2.5 text-sm text-gray-500 line-clamp-2">
						{job.about || `${job.company} is looking for a ${job.title.toLowerCase()} to join the team and drive execution.`}
					</p>
				</div>
			</div>

			{/* Bottom row: Salary and Category tags */}
			<div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
				<p className="text-sm font-bold text-blue-700 font-poppins">
					IDR {job.salary}
				</p>
				<div className="flex gap-2">
					<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
						{job.category}
					</span>
				</div>
			</div>
		</div>
	);
};

export default function Home() {
	const router = useRouter();
	const featuredJobs = allJobs.filter((job) => job.featured).slice(0, 8);
	const latestJob = allJobs.slice(0, 8);

	const getHighlight = (job: (typeof allJobs)[number]) => {
		if (job.featured) {
			return "Featured";
		}

		if (job.workSetup === "Remote") {
			return "Remote";
		}

		if (job.posting === "Today") {
			return "New";
		}

		return "Hot Role";
	};
	return (
		<>
			{/* HERO */}
			<div className="w-full pt-20 lg:pt-0 h-max pb-10 bg-hero bg-cover lg:pb-0">
				<div className="px-4 grid grid-cols-12 md:container md:mx-auto items-center">
					{/* KIRI */}
					<div className="col-span-12 mt-5 lg:col-span-7 text-center md:py-20 w-full mx-auto  ">
						<h1 className="font-bold text-5xl text-gray-700 font-poppins leading-relaxed tracking-tighter md:text-6xl lg:text-7xl">
							Discover
						</h1>
						<h1 className="font-bold text-5xl text-gray-700 font-poppins leading-relaxed tracking-tighter md:text-6xl lg:text-7xl">
							more than
						</h1>
						<h1 className="font-bold text-5xl text-sky-400 font-poppins leading-relaxed tracking-tighter lg:text-7xl">
							5000+ Jobs
						</h1>
						<p className="text-center text-gray-600 mt-3 font-poppins w-full sm:w-3/4 mx-auto lg:text-xl">
							A platform that connects job seekers with the right opportunities, helping them find meaningful work and grow their careers.
						</p>

						<div className="w-full h-auto bg-white/90 border border-slate-100 rounded-2xl mt-6 p-4 flex flex-col gap-4 sm:w-5/6 md:w-4/5 mx-auto lg:flex-row lg:items-center lg:justify-between shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur">
							<div className="flex items-center gap-3 px-3 py-2 border border-slate-200/60 rounded-xl bg-white w-full">
								<BsSearch className="text-slate-400 text-lg shrink-0" />
								<input
									type="text"
									className="w-full text-sm text-slate-800 bg-transparent placeholder-slate-400 focus:outline-none"
									placeholder="Job title or keyword"
								/>
							</div>
							<div className="flex items-center gap-3 px-3 py-2 border border-slate-200/60 rounded-xl bg-white w-full">
								<GoLocation className="text-slate-400 text-lg shrink-0" />
								<select
									id="countries"
									className="w-full text-sm text-slate-800 bg-transparent focus:outline-none cursor-pointer"
								>
									<option defaultValue="Sleman">Sleman, Yogyakarta</option>
									<option value="US">United States</option>
									<option value="CA">Canada</option>
									<option value="FR">France</option>
									<option value="DE">Germany</option>
								</select>
							</div>
							<button
								className="py-3 px-6 text-sm font-semibold rounded-xl bg-blue-700 text-white hover:bg-blue-800 shadow-sm hover:shadow transition duration-200 lg:w-[20rem] shrink-0"
								onClick={() => router.push("/jobs")}
							>
								Search my job
							</button>
						</div>
						<div className="text-center text-sky-950 mt-3 font-poppins w-full lg:text-lg">
							<p>
								Popular : Frontend Developer, Backend Developer,
								UI/UX Freelancer
							</p>
						</div>
					</div>
					{/* KANAN */}
					<div className="hidden  lg:col-span-5 lg:flex lg:justify-end h-full w-full  ">
						<Image
							src={Girl}
							alt=""
							width="0"
							height="0"
							className="w-full h-full"
						/>
					</div>
				</div>
			</div>
			{/* COMPANIES */}
			{/* <div className="px-4 py-16 md:container md:mx-auto">
				<h2 className="mb-12 text-center text-sm font-semibold tracking-widest text-gray-400 uppercase">
					Companies we helped grow
				</h2>

				<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:justify-between">
					{[
						AmazonIcon,
						AirBnbIcon,
						FacebookIcon,
						GoogleIcon,
						GrabIcon,
						NetflixIcon,
					].map((logo, idx) => (
						<Image
							key={idx}
							src={logo}
							alt="company logo"
							width={120}
							height={60}
							className="
          w-20 sm:w-24 md:w-28
          grayscale opacity-70
          transition-all duration-300
          hover:grayscale-0 hover:opacity-100
        "
						/>
					))}
				</div>
			</div> */}

			{/* SEARCH BY CATEGORY */}
			<div className="mt-16 px-4 pb-12 md:container md:mx-auto">
				{/* Header */}
				<div className="mb-10 flex items-center justify-between">
					<h2 className="text-xl font-semibold font-poppins lg:text-2xl">
						Explore by <span className="text-blue-700">Category</span>
					</h2>

					<span className="hidden cursor-pointer items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3 md:flex lg:text-base">
						Show all jobs <FiArrowRight />
					</span>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-12 gap-6">
					{dataCategory.map((item) => (
						<div
							key={item.id}
							className="group col-span-12 cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-700 hover:shadow-xl md:col-span-6 lg:col-span-3"
							onClick={() => router.push("/jobs")}
						>
							<div className="flex items-start justify-between gap-2">
								<div className="flex items-start gap-4">
									{/* Icon */}
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300 p-2.5">
										{item.logo}
									</div>

									{/* Text */}
									<div>
										<h3 className="text-base font-bold text-slate-800 group-hover:text-white transition-colors duration-300">
											{item.name}
										</h3>
										<p className="mt-1 text-xs text-slate-500 group-hover:text-blue-100 transition-colors duration-300">
											{item.count} jobs available
										</p>
									</div>
								</div>

								{/* Arrow */}
								<FiArrowRight className="text-lg text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all duration-300 shrink-0 mt-0.5" />
							</div>
						</div>
					))}
				</div>

				{/* Mobile CTA */}
				<span className="mt-8 flex cursor-pointer items-center justify-center gap-2 text-sm font-semibold text-blue-700 md:hidden">
					Show all jobs <FiArrowRight />
				</span>
			</div>

			{/* START POSTING JOB */}
			<div className="px-4 md:container md:mx-auto py-12">
				<div className="rounded-3xl bg-blue-700 p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_45%)]" />
					<div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
						<div className="text-center md:text-start md:col-span-5">
							<h1 className="text-white font-bold text-4xl lg:text-5xl leading-tight">
								Start posting jobs today
							</h1>
							<p className="mt-3 text-blue-100 text-base lg:text-lg">
								Start posting jobs for only $10.
							</p>
							<button
								className="w-full sm:w-auto py-3 px-8 mt-6 bg-white text-blue-700 font-bold rounded-xl border border-transparent hover:bg-blue-50 transition-colors duration-250 shadow-md"
								onClick={() => router.push("/signup")}
							>
								SignUp For Free
							</button>
						</div>
						<div className="md:col-span-7 flex justify-center">
							<Image
								src={Nadia}
								alt="candidate profile"
								width={450}
								height={300}
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* FEATURED JOBS */}
			<div className="px-4 md:container md:mx-auto py-20">
				<div className="flex justify-between items-end border-b border-slate-200/60 pb-5 mb-8">
					<div>
						<h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
							Featured Opportunities
						</h2>
						<p className="text-xs text-slate-400 mt-1">
							Handpicked positions at leading technology companies.
						</p>
					</div>
					<span
						className="group inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
						onClick={() => router.push("/jobs")}
					>
						View all <FiArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-0.5" />
					</span>
				</div>
				<div className="lg:hidden">
					<Swiper
						slidesPerView={"auto"}
						spaceBetween={30}
						className="mySwiper"
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							400: {
								slidesPerView: 1,
							},
							639: {
								slidesPerView: 2,
							},
							865: {
								slidesPerView: 4,
							},
							1000: {
								slidesPerView: 4,
							},
							1500: {
								slidesPerView: 4,
							},
							1700: {
								slidesPerView: 4,
							},
						}}
					>
						{featuredJobs.map((item) => (
							<SwiperSlide key={item.id} className="py-5">
								<FeaturedJobCard
									job={item}
									getHighlight={getHighlight}
									onClick={() => router.push(`/jobs/${item.id}`)}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{featuredJobs.map((item) => (
						<FeaturedJobCard
							key={item.id}
							job={item}
							getHighlight={getHighlight}
							onClick={() => router.push(`/jobs/${item.id}`)}
						/>
					))}
				</div>
			</div>
			{/* LATEST JOB OPEN */}
			<div className="px-4  pt-10  bg-gray-100 ">
				<div className="container mx-auto">
					<div className="flex justify-between items-start py-5">
						<h1 className="text-xl font-poppins font-semibold mb-5 lg:text-4xl tracking-tighter">
							Latest{" "}
							<span className="text-blue-700">jobs open</span>
						</h1>
						<span
							className=" items-center gap-3 text-blue-700 font-bold  cursor-pointer flex lg:text-xl"
							onClick={() => router.push("/jobs")}
						>
							Show all jobs <FiArrowRight />
						</span>
					</div>
				</div>
				<div className="container mx-auto grid grid-cols-12 gap-3 md:gap-8 pb-20">
					{latestJob.map((item) => (
						<div
							key={item.id}
							className="group col-span-12 flex w-full cursor-pointer flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:col-span-6 md:flex-row md:items-start md:gap-5"
							onClick={() => router.push(`/jobs/${item.id}`)}
						>
							<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
								<img
									src={item.logo}
									alt={item.company}
									className="h-12 w-12 object-contain rounded-lg"
									onError={(e) => {
										e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.company)}&background=f1f5f9&color=1d4ed8&bold=true`;
									}}
								/>
							</div>
							<div className="flex w-full flex-col gap-4 md:flex-row md:items-start md:justify-between">
								<div className="flex-1">
									<div className="mb-2.5 flex flex-wrap items-center gap-2">
										<span className="rounded bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
											{item.posting}
										</span>
										<span className="rounded bg-blue-50 text-blue-700 border border-blue-100/50 px-2.5 py-0.5 text-xs font-semibold">
											{item.category}
										</span>
									</div>
									<h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-1">
										{item.title}
									</h3>
									<div className="mt-1 flex gap-2 text-sm text-gray-500">
										<span>{item.company}</span>
										<span>•</span>
										<span>{item.location}</span>
									</div>
									<p className="mt-2.5 text-sm text-gray-500 line-clamp-2">
										{item.about || `${item.company} is looking for a ${item.title.toLowerCase()} to support growing team initiatives.`}
									</p>
									<div className="mt-4 flex flex-wrap gap-2">
										<span className="rounded border border-blue-700 px-2.5 py-0.5 text-xs font-bold text-blue-700">
											{item.type}
										</span>
										<span className="rounded bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
											{item.workSetup}
										</span>
									</div>
								</div>
								<div className="flex items-center md:h-full shrink-0">
									<span className="rounded-lg bg-blue-50/50 text-blue-700 px-3 py-1.5 text-xs font-semibold border border-blue-100/30">
										{item.applied} applicants
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
