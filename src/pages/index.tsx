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

						<div className="w-full h-auto bg-white mt-3 py-5 px-6 flex flex-col gap-3 lg:gap-10  sm:w-3/4 md:w-3/4 mx-auto lg:flex-row lg:w-3/4 lg:justify-between lg:px-5 lg:py-3 shadow-lg">
							<div className="flex justify-center items-center gap-1 w-full">
								<BsSearch />
								<input
									type="text"
									className="w-full px-3 py-2 border-solid border-0 border-b border-slate-300 focus:outline-none"
									placeholder="Job title or keyword"
								/>
							</div>
							<div className="flex items-center justify-center gap-1 w-full">
								<GoLocation />
								<select
									id="countries"
									className="w-full px-2 py-2 border-solid bg-white"
								>
									<option selected>Sleman, Yogyakarta</option>
									<option value="US">United States</option>
									<option value="CA">Canada</option>
									<option value="FR">France</option>
									<option value="DE">Germany</option>
								</select>
							</div>
							<button
								className="py-3 px-6 font-bold bg-blue-700  text-white border border-transparent hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 transition duration-300 lg:w-[30rem]"
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
							className="
          group col-span-12 cursor-pointer rounded-xl border bg-white
          px-5 py-6 transition-all duration-300
          hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-700
          hover:shadow-lg
          md:col-span-6 lg:col-span-3
        "
						>
							<div className="flex items-start justify-between">
								<div className="flex items-start gap-4">
									{/* Icon */}
									<div className="
              flex h-10 w-10 items-center justify-center rounded-lg
              bg-blue-50 text-blue-700
              group-hover:bg-white group-hover:text-blue-700
            ">
										{item.logo}
									</div>

									{/* Text */}
									<div>
										<h3 className="text-lg font-semibold group-hover:text-white">
											{item.name}
										</h3>
										<p className="mt-1 text-sm text-gray-500 group-hover:text-blue-100">
											{item.count} jobs available
										</p>
									</div>
								</div>

								{/* Arrow */}
								<FiArrowRight className="
            text-xl text-gray-400 transition-all
            group-hover:translate-x-1 group-hover:text-white
          " />
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
			<div className="px-4  bg-blue-700 py-20 ">
				<div className="container mx-auto md:grid md:grid-cols-12 md:gap-3 md:items-center bg">
					<div className="pt-10 pb-3 text-center md:col-span-5 md:text-start">
						<h1 className="text-white font-bold text-4xl md:text-6xl md:w-3/4 ">
							Start posting jobs today
						</h1>
						<p className="mt-2 text-white text-lg md:text-xl md:my-4">
							Start posting jobs for only $10.
						</p>
						<button className="w-full py-4 mt-2 bg-white border border-transparent text-blue-700 font-bold text-xl md:w-[20rem] hover:bg-blue-700 hover:text-white hover:border hover:border-white transition-all duration-300">
							SignUp For Free
						</button>
					</div>
					<div className="md:col-span-7">
						<Image
							src={Nadia}
							alt="me"
							width="0"
							height="0"
							sizes="100vw"
							className="w-full h-full"
						/>
					</div>
				</div>
			</div>
			{/* FEATURED JOBS */}
			<div className="px-4 md:container md:mx-auto py-20 ">
				<div className="flex justify-between items-start py-5">
					<h1 className="text-xl font-poppins font-semibold lg:text-4xl">
						Featured <span className="text-blue-700">jobs</span>
					</h1>
					<span
						className=" items-center gap-3 text-blue-700 font-bold  cursor-pointer flex lg:text-xl"
						onClick={() => router.push("/jobs")}
					>
						Show all jobs <FiArrowRight />
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
							<SwiperSlide key={item.id} className="py-5 ">
								<div
									className="group flex h-[18rem] w-full cursor-pointer flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
									onClick={() => router.push(`/jobs/${item.id}`)}
								>
									<div className="flex gap-3 items-center justify-between ">
										<div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-white">
											<Image
												src={item.logo}
												alt={item.company}
												width={56}
												height={56}
												className="h-10 w-10 object-contain"
											/>
										</div>
										<div className="flex flex-col items-end gap-2">
											<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
												{getHighlight(item)}
											</span>
											<h1 className="border border-blue-700 px-3 py-1 text-sm font-bold text-blue-700">
												{item.type}
											</h1>
										</div>
									</div>
									<div>
										<h1 className="text-2xl font-bold transition-colors group-hover:text-blue-700">
											{item.title}
										</h1>
										<div className="mt-1 flex gap-3 text-gray-500">
											<p>{item.company}</p>
											<p>•</p>
											<p>{item.location}</p>
										</div>
										<p className="py-3 text-sm text-gray-500">
											{item.company} is looking for a {item.title.toLowerCase()} to
											help drive product quality and execution.
										</p>
										<p className="text-sm font-semibold text-blue-700">
											{item.salary}
										</p>
									</div>
									<div className="flex gap-3">
										<span className="rounded-full bg-green-200 px-3 py-1 font-bold text-green-700">
											{item.category}
										</span>
										<span className="rounded-full bg-sky-200 px-3 py-1 font-bold text-sky-700">
											{item.id % 2 === 0 ? "Mid Level" : "Senior Level"}
										</span>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="hidden lg:flex justify-between md:justify-center lg:justify-between items-center flex-wrap gap-6">
					{featuredJobs.map((item) => (
						<div
							key={item.id}
							className="group flex h-[18rem] w-[22rem] cursor-pointer flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
							onClick={() => router.push(`/jobs/${item.id}`)}
						>
							<div className="flex gap-3 items-center justify-between ">
								<div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-white">
									<Image
										src={item.logo}
										alt={item.company}
										width={56}
										height={56}
										className="h-10 w-10 object-contain"
									/>
								</div>
								<div className="flex flex-col items-end gap-2">
									<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
										{getHighlight(item)}
									</span>
									<h1 className="border border-blue-700 px-3 py-1 text-sm font-bold text-blue-700">
										{item.type}
									</h1>
								</div>
							</div>
							<div>
								<h1 className="text-2xl font-bold transition-colors group-hover:text-blue-700">
									{item.title}
								</h1>
								<div className="mt-1 flex gap-3 text-gray-500">
									<p>{item.company}</p>
									<p>•</p>
									<p>{item.location}</p>
								</div>
								<p className="py-3 text-sm text-gray-500">
									{item.company} is looking for a {item.title.toLowerCase()} to
									help drive product quality and execution.
								</p>
								<p className="text-sm font-semibold text-blue-700">
									{item.salary}
								</p>
							</div>
							<div className="flex gap-3">
								<span className="rounded-full bg-green-200 px-3 py-1 font-bold text-green-700">
									{item.category}
								</span>
								<span className="rounded-full bg-sky-200 px-3 py-1 font-bold text-sky-700">
									{item.id % 2 === 0 ? "Mid Level" : "Senior Level"}
								</span>
							</div>
						</div>
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
							className="group col-span-12 flex w-full cursor-pointer flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:col-span-6 md:flex-row md:items-center md:gap-5"
							onClick={() => router.push(`/jobs/${item.id}`)}
						>
							<div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-white">
								<Image
									src={item.logo}
									alt={item.company}
									width={56}
									height={56}
									className="h-10 w-10 object-contain"
								/>
							</div>
							<div className="flex w-full flex-col gap-3 md:flex-row md:items-start md:justify-between">
								<div>
									<div className="mb-2 flex flex-wrap items-center gap-2">
										<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
											{item.posting}
										</span>
										<span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
											{item.category}
										</span>
									</div>
									<h1 className="font-bold text-lg lg:text-xl group-hover:text-blue-700 transition-colors">
										{item.title}
									</h1>
									<div className="mt-1 flex flex-wrap gap-3 text-gray-500 lg:text-lg">
										<p>{item.company}</p>
										<p>•</p>
										<p>{item.location}</p>
									</div>
									<p className="mt-2 text-sm text-gray-500">
										{item.company} is looking for a {item.title.toLowerCase()} to
										support growing team initiatives.
									</p>
									<div className="mt-3 flex flex-wrap gap-3">
										<span className="rounded-full bg-green-200 px-3 py-1 font-bold text-green-700">
											{item.type}
										</span>
										<span className="rounded-full border border-yellow-400 px-3 py-1 font-bold text-yellow-500">
											{item.workSetup}
										</span>
									</div>
								</div>
								<div className="flex items-center md:h-full">
									<span className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
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
