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
			<div className="w-full h-max pb-10 bg-gray-100 lg:pb-0">
				<div className="px-4 grid grid-cols-12 md:container md:mx-auto items-center">
					{/* KIRI */}
					<div className="col-span-12 mt-5 md:col-span-7 ">
						<h1 className="font-bold text-5xl text-gray-700 font-poppins leading-relaxed tracking-tighter lg:text-7xl">
							Discover
						</h1>
						<h1 className="font-bold text-5xl text-gray-700 font-poppins leading-relaxed tracking-tighter lg:text-7xl">
							more than
						</h1>
						<h1 className="font-bold text-5xl text-sky-400 font-poppins leading-relaxed tracking-tighter lg:text-7xl">
							5000+ Jobs
						</h1>
						<p className="text-justify text-gray-600 mt-3 font-poppins w-full  sm:w-3/4 lg:text-xl lg:my-5">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Animi, illo dolore soluta maxime officia,
							cupiditate at dolores.
						</p>
						<div className="w-full h-auto bg-white mt-3 py-5 px-6 flex flex-col gap-10  sm:w-3/4 lg:flex-row lg:w-full lg:justify-between lg:px-5 lg:py-3">
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
						<div className="text-start text-gray-400 mt-3 font-poppins w-full lg:text-lg">
							<p>
								Popular : Frontend Developer, Backend Developer,
								UI/UX Freelancer
							</p>
						</div>
					</div>
					{/* KANAN */}
					<div className="hidden lg:block lg:col-span-5 ">
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
			<div className="px-4 md:container md:mx-auto py-10 ">
				<h1 className="text-lg font-poppins text-gray-500 mb-10">
					Companies we helped grow
				</h1>
				<div className="flex gap-3 flex-wrap justify-center items-center lg:justify-between">
					<Image
						src={AmazonIcon}
						alt="me"
						width="0"
						height="0"
						sizes="100vw"
						className="w-20 sm:w-24 md:w-28"
					/>
					<Image
						src={AirBnbIcon}
						alt="me"
						width="0"
						height="0"
						sizes="100vw"
						className="w-20 sm:w-24 md:w-28"
					/>
					<Image
						src={FacebookIcon}
						alt="me"
						width="0"
						height="0"
						sizes="100vw"
						className="w-20 sm:w-24 md:w-28"
					/>
					<Image
						src={GoogleIcon}
						alt="me"
						width="0"
						height="0"
						sizes="100vw"
						className="w-20 sm:w-24 md:w-28"
					/>
					<Image
						src={GrabIcon}
						alt="me"
						width="0"
						height="0"
						sizes="100vw"
						className="w-20 sm:w-24 md:w-28"
					/>
					<Image
						src={NetflixIcon}
						alt="me"
						width="0"
						height="0"
						sizes="100vw"
						className="w-20 sm:w-24 md:w-28"
					/>
				</div>
			</div>
			{/* SEARCH BY CATEGORY */}
			<div className="px-4 md:container md:mx-auto  pb-10">
				<div className="flex justify-between items-center">
					<h1 className="text-xl font-poppins font-semibold mb-5 lg:text-2xl">
						Explore by{" "}
						<span className="text-blue-700">category</span>
					</h1>
					<span className=" items-center gap-3 text-blue-700 font-bold hidden cursor-pointer md:flex lg:text-xl">
						Shows all jobs <FiArrowRight />
					</span>
				</div>
				<div className="grid grid-cols-12 gap-5">
					{dataCategory.map((item) => (
						<div
							key={item.id}
							className="flex items-end justify-between gap-3 border px-3 py-5 group hover:bg-blue-700 transition-all duration-150 rounded-lg col-span-12 md:col-span-6 lg:col-span-3 cursor-pointer "
						>
							<div className="flex gap-8 items-center lg:flex-col md:items-center md:gap-4 lg:items-start">
								<div className="w-8 h-8 ">{item.logo}</div>
								<div>
									<h1 className="font-bold text-lg group-hover:text-white">
										{item.name}
									</h1>
									<p className="text-gray-500 text-md group-hover:text-white">
										{item.count} jobs availabe
									</p>
								</div>
							</div>
							<FiArrowRight className="text-xl group-hover:text-white" />
						</div>
					))}
				</div>
				<span className="flex items-center gap-3 text-blue-700 font-bold mt-5 md:hidden cursor-pointer ">
					Shows all jobs <FiArrowRight />
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
					<h1 className="text-xl font-poppins font-semibold mb-5 lg:text-4xl">
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
							<SwiperSlide key={item.id} className="py-5">
								<div className=" w-full  h-[15rem] border p-4 flex flex-col justify-between hover:scale-110 duration-300 transition-all">
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
			<div className="px-4  pt-10 bg-gray-100 ">
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
							className="flex flex-col md:flex-row md:items-center md:gap-6 w-full h-[10rem] p-4 bg-white col-span-12 md:col-span-6 hover:shadow-lg transition-all duration-300"
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
