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

import AirBnbIcon from "public/img/icon/airbnb 1.png";
import AmazonIcon from "/public/img/icon/amazon.png";
import FacebookIcon from "/public/img/icon/facebook.png";
import GoogleIcon from "/public/img/icon/google.png";
import GrabIcon from "/public/img/icon/grab-logo.png";
import NetflixIcon from "/public/img/icon/netflix.png";
import Girl from "/public/img/util/girl.png";
import Nadia from "/public/img/util/nadia.png";

import TravelokaIcon from "public/img/icon/trav.png";
import { useRouter } from "next/router";

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

const featuredJobs = [
	{
		id: 1,
		logo: TravelokaIcon,
		title: "Frontend Developer",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
	},
	{
		id: 2,
		logo: TravelokaIcon,
		title: "Backend Developer",
		company: "Dlitch",
		location: "Madrid, Spain",
		type: "Full Time",
	},
	{
		id: 3,
		logo: TravelokaIcon,
		title: "Admin",
		company: "Traveloka",
		location: "Ankara",
		type: "Freelance",
	},
	{
		id: 4,
		logo: TravelokaIcon,
		title: "Product Designer",
		company: "ClassPass",
		location: "Jawa Timur",
		type: "Full Time",
	},
	{
		id: 5,
		logo: TravelokaIcon,
		title: "Lead Engineer",
		company: "Airbnb",
		location: "Surabaya",
		type: "Full Time",
	},
	{
		id: 6,
		logo: TravelokaIcon,
		title: "Android Developer",
		company: "Shopee",
		location: "Jakarta",
		type: "Full Time",
	},
	{
		id: 7,
		logo: TravelokaIcon,
		title: "Brand Designer",
		company: "Tokopedia",
		location: "Jakarta",
		type: "Full Time",
	},
	{
		id: 8,
		logo: TravelokaIcon,
		title: "Email Marketing",
		company: "Rusdi",
		location: "Jakarta",
		type: "Freelance",
	},
];

const latestJob = [
	{
		id: 1,
		logo: TravelokaIcon,
		title: "Social Media Assistant",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
	},
	{
		id: 2,
		logo: TravelokaIcon,
		title: "Brand Designer",
		company: "Dropbox",
		location: "Yogyakarta",
		type: "Freelance",
	},
	{
		id: 3,
		logo: TravelokaIcon,
		title: "Interative Developer",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
	},
	{
		id: 4,
		logo: TravelokaIcon,
		title: "HR Manager",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
	},
	{
		id: 5,
		logo: TravelokaIcon,
		title: "Brand Designer",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
	},
	{
		id: 6,
		logo: TravelokaIcon,
		title: "Accountant",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
	},
	{
		id: 7,
		logo: TravelokaIcon,
		title: "Social Media Assistant",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
	},
	{
		id: 8,
		logo: TravelokaIcon,
		title: "Backend Developer",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
	},
];

export default function Home() {
	const router = useRouter();
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
					<span className=" items-center gap-3 text-blue-700 font-bold  cursor-pointer flex lg:text-xl">
						Shows all jobs <FiArrowRight />
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
								<div className=" w-full  h-[15rem] border p-4 flex flex-col justify-between hover:shadow-lg">
									<div className="flex gap-3 items-center justify-between ">
										<div className="w-[3rem] ">
											{/* {item.logo} */}
											<Image
												src={TravelokaIcon}
												alt=""
												width="0"
												height="0"
												className="w-full h-full"
											></Image>
										</div>
										<h1 className="font-bold text-lg border py-2 px-3 border-blue-700 text-blue-700">
											{item.type}
										</h1>
									</div>
									<div>
										<h1 className="font-bold text-2xl">
											{item.title}
										</h1>
										<div className="flex gap-3 text-gray-500">
											<p>{item.company}</p>
											<p>{item.location}</p>
										</div>
										<p className="py-2">
											{item.company} is loking for{" "}
											{item.title} to help the team.
										</p>
									</div>
									<div className="flex gap-3">
										<span className="py-1 px-3 bg-green-200 text-green-700 font-bold rounded-full">
											Design
										</span>
										<span className="py-1 px-3 bg-sky-200 text-sky-700 font-bold rounded-full">
											Business
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
							className="w-[22rem]  h-[15rem] border p-4 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
						>
							<div className="flex gap-3 items-center justify-between ">
								<div className="w-[3rem] ">
									{/* {item.logo} */}
									<Image
										src={TravelokaIcon}
										alt=""
										width="0"
										height="0"
										className="w-full h-full"
									></Image>
								</div>
								<h1 className="font-bold text-lg border py-2 px-3 border-blue-700 text-blue-700">
									{item.type}
								</h1>
							</div>
							<div>
								<h1 className="font-bold text-2xl">
									{item.title}
								</h1>
								<div className="flex gap-3 text-gray-500">
									<p>{item.company}</p>
									<p>{item.location}</p>
								</div>
								<p className="py-2">
									{item.company} is loking for {item.title} to
									help the team.
								</p>
							</div>
							<div className="flex gap-3">
								<span className="py-1 px-3 bg-green-200 text-green-700 font-bold rounded-full">
									Design
								</span>
								<span className="py-1 px-3 bg-sky-200 text-sky-700 font-bold rounded-full">
									Business
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
						<span className=" items-center gap-3 text-blue-700 font-bold  cursor-pointer flex lg:text-xl">
							Shows all jobs <FiArrowRight />
						</span>
					</div>
				</div>
				<div className="container mx-auto grid grid-cols-12 gap-3 md:gap-8 pb-20">
					{latestJob.map((item) => (
						<div
							key={item.id}
							className="flex pb-5 flex-col md:flex-row md:items-center md:gap-6 w-full h-[10rem] p-4 bg-white col-span-12 md:col-span-6 hover:shadow-lg transition-all duration-300"
						>
							<div className="w-12 h-12 lg:w-14 lg:h-1w-14">
								<Image
									src={TravelokaIcon}
									alt=""
									width="0"
									height="0"
									className="w-full h-full"
								></Image>
							</div>
							<div>
								<h1 className="font-bold text-lg lg:text-xl">
									{item.title}
								</h1>
								<div className="flex gap-3 text-gray-500 mt-1 mb-2 lg:text-lg">
									<p>{item.company}</p>
									<p>{item.location}</p>
								</div>
								<div className="flex gap-3 ">
									<span className="py-1 px-3 bg-green-200 text-green-700 font-bold rounded-full">
										{item.type}
									</span>
									|{" "}
									<span className="py-1 px-3  text-yellow-400 border border-yellow-400 font-bold rounded-full">
										Marketing
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
