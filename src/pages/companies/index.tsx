import React, { useEffect, useState } from "react";

import { GoLocation } from "react-icons/go";
import { BsSearch, BsFilter } from "react-icons/bs";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Image from "next/image";

import TravelokaIcon from "public/img/icon/trav.png";

import LoadingBar from "@/components/elements/jobs/LoadingBar";
import { useRouter } from "next/router";

const allJobs = [
	{
		id: 1,
		logo: TravelokaIcon,
		company: "Airbnb",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit qui voluptates assumenda, rem optio minima vel consectetur obcaecati blanditiis!",
		job: 7,
	},
	{
		id: 2,
		logo: TravelokaIcon,
		company: "Stripe",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit qui voluptates assumenda, rem optio minima vel consectetur obcaecati blanditiis!",
		job: 2,
	},
	{
		id: 3,
		logo: TravelokaIcon,
		company: "Discord",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit qui voluptates assumenda, rem optio minima vel consectetur obcaecati blanditiis!",
		job: 16,
	},
	{
		id: 4,
		logo: TravelokaIcon,
		company: "Truebill",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit qui voluptates assumenda, rem optio minima vel consectetur obcaecati blanditiis!",
		job: 6,
	},
	{
		id: 5,
		logo: TravelokaIcon,
		company: "Coinbase",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit qui voluptates assumenda, rem optio minima vel consectetur obcaecati blanditiis!",
		job: 12,
	},
	{
		id: 6,
		logo: TravelokaIcon,
		company: "Kraken",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit qui voluptates assumenda, rem optio minima vel consectetur obcaecati blanditiis!",
		job: 4,
	},
	{
		id: 7,
		logo: TravelokaIcon,
		company: "Robinhood",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit qui voluptates assumenda, rem optio minima vel consectetur obcaecati blanditiis!",
		job: 1,
	},
	{
		id: 8,
		logo: TravelokaIcon,
		company: "Airbnb",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit qui voluptates assumenda, rem optio minima vel consectetur obcaecati blanditiis!",
		job: 7,
	},
	{
		id: 9,
		logo: TravelokaIcon,
		company: "Travelok",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit qui voluptates assumenda, rem optio minima vel consectetur obcaecati blanditiis!",
		job: 7,
	},
	{
		id: 10,
		logo: TravelokaIcon,
		company: "Mayora",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit qui voluptates assumenda, rem optio minima vel consectetur obcaecati blanditiis!",
		job: 2,
	},
];
const Jobs = () => {
	const [showType, setShowType] = useState(true);
	const [showCompanySize, setShowCompanySize] = useState(true);
	const [loading, setLoading] = useState(true);
	const Router = useRouter();

	const handleClickFilter = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);
	return (
		<>
			{/* HERO */}
			<div className="w-full pt-40 lg:pt-0 h-max pb-10 bg-hero bg-cover lg:pb-0">
				<div className="px-4 grid grid-cols-12 md:container md:mx-auto items-center">
					{/* KIRI */}
					<div className="col-span-12 mt-5 md:col-span-12 text-center md:py-20 w-full mx-auto ">
						<h1 className="font-bold text-5xl text-gray-700 font-poppins leading-tight tracking-tighter lg:text-7xl">
							Find your
						</h1>

						<h1 className="font-bold text-5xl text-sky-600 font-KaushanScript leading-tight tracking-wide lg:text-7xl">
							dream companies
						</h1>
						<p className=" text-center text-gray-600 mt-3 font-poppins w-full  sm:w-3/4 mx-auto lg:text-xl">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Sunt, veniam.
						</p>
						<div className="w-full h-auto bg-white mt-3 py-5 px-6 flex flex-col gap-3 lg:gap-10  sm:w-3/4 md:w-3/4 mx-auto lg:flex-row lg:w-3/4 lg:justify-between lg:px-5 lg:py-3 shadow-lg">
							<div className="flex justify-center items-center gap-1 w-full">
								<BsSearch />
								<input
									type="text"
									className="w-full px-3 py-2 border-solid border-0 border-b border-slate-300 focus:outline-none "
									placeholder="Company name or keyword"
								/>
							</div>
							<div className="flex items-center justify-center gap-1 w-full">
								<GoLocation />
								<select
									id="countries"
									className="w-full px-2 py-2 border-solid bg-white"
								>
									<option selected defaultValue={"US"}>
										Technology
									</option>
									<option value="US">Business</option>
									<option value="CA">Management</option>
									<option value="FR">Accountant</option>
									<option value="DE">Human Resources</option>
								</select>
							</div>
							<button
								className="py-3 px-6 font-bold bg-blue-700  text-white border border-transparent hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 transition duration-300 lg:w-[25rem]"
								onClick={handleClickFilter}
							>
								Search companies
							</button>
						</div>
						<div className="text-center text-sky-900 mt-3 font-poppins w-full sm:text-center md:text-center lg:text-lg lg:text-center ">
							<p>Popular : Apple, Microsoft, Google</p>
						</div>
					</div>
				</div>
			</div>
			{/* MORE FILTER */}
			<button className="w-full py-5 gap-3 flex items-center justify-center border lg:hidden">
				<BsFilter className="text-xl" />
				<span className="text-md">More Filter</span>
			</button>
			{/* ALL JOBS */}
			<div className="px-4 pt-10 container mx-auto lg:px-0">
				<div className="grid grid-cols-10 gap-10">
					{/* KIRI */}
					<div className="hidden lg:block lg:col-span-2">
						{/* TYPE OF EMPLOYEE */}
						<div className="overflow-hidden">
							<div
								className="flex justify-between items-center text-xl"
								onClick={() => setShowType(!showType)}
							>
								<h1 className="font-bold cursor-pointer">
									Type of employment
								</h1>

								<AiOutlineUp
									className={`cursor-pointer ${
										showType
											? "rotate-180 transition-all duration-150 ease-in"
											: "transition-all duration-150 ease-in"
									}`}
								/>
							</div>
							<div className="mt-3  overflow-hidden">
								<div
									className={`mt-3 h-auto  text-white transition-all transform ease-in duration-150 ${
										showType
											? " block translate-y-0 "
											: "absolute -top-[200rem] -translate-y-full "
									}`}
								>
									<div className="flex items-center mb-4">
										<input
											id="advertising-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100   rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="advertising-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Advertising (2)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="business-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="business-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Business Service (3)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="blockchain-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="blockchain-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Blockchain (25)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="cloud-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="cloud-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Cloud (10)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="consumer-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="consumer-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Consumer Tech (3)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="education-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="education-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Education (13)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="fintech-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="fintech-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Fintech (10)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="gaming-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="gaming-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Gaming (24)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="healthcare-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="healthcare-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Healthcare (32)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="media-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="media-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Media (12)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="hosting-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="hosting-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Hosting (5)
										</label>
									</div>
								</div>
							</div>
						</div>
						{/* CATEGORIES */}
						<div className="mt-3">
							<div
								className="flex justify-between items-center text-xl"
								onClick={() =>
									setShowCompanySize(!showCompanySize)
								}
							>
								<h1 className="font-bold cursor-pointer">
									Company Size
								</h1>
								<AiOutlineUp
									className={`cursor-pointer ${
										showCompanySize
											? "rotate-180 transition-all duration-150 ease-in"
											: "transition-all duration-150 ease-in"
									}`}
								/>
							</div>
							<div className="mt-3  overflow-hidden">
								<div
									className={`mt-3 h-auto  text-white transition-all transform ease-in duration-150 ${
										showCompanySize
											? " block translate-y-0 "
											: "absolute -top-[200rem] -translate-y-full "
									}`}
								>
									<div className="flex items-center mb-4">
										<input
											id="satu-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-300  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="satu-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											1-50 (24)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="dua-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="dua-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											51-150 (3)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="tiga-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="tiga-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											250-500 (21)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="empat-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="empat-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											501-1000 (3)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="lima-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="lima-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											1000+ (12)
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* KANAN */}
					{!loading ? (
						<div className="col-span-10 flex flex-col gap-4 mt-5 pb-20 lg:col-span-8 ">
							<div>
								<h1 className="text-3xl font-semibold font-poppins">
									All Companies
								</h1>
								<div className="flex justify-between items-center mt-2">
									<span className="text-gray-500">
										Showing 153 result
									</span>
									<span className="flex gap-3 items-center justify-center font-bold">
										Most relevant <AiOutlineDown />
									</span>
								</div>
							</div>
							<div className="grid grid-cols-12 gap-5 ">
								{allJobs.map((item) => (
									<div
										key={item.id}
										className="col-span-12 border p-4 hover:shadow-lg transition-all duration-300 md:col-span-6 lg:col-span-6 cursor-pointer"
										onClick={() => {
											Router.push(
												`/companies/${item.id}`
											);
										}}
									>
										<div className="flex justify-between items-start">
											<div className="w-20 h-20">
												<Image
													src={TravelokaIcon}
													alt=""
													width="0"
													height="0"
													className="w-full h-full"
												/>
											</div>
											<span className="py-2 px-5 text-blue-700 bg-blue-100 rounded-full font-bold">
												{item.job} Jobs
											</span>
										</div>
										<div>
											<h1 className="font-bold text-3xl tracking-wide">
												{item.company}
											</h1>
											<p className="text-gray-500 my-3">
												{item.desc}
											</p>
										</div>
										<div className="mt-3 flex gap-3">
											<span className="py-2 px-5 text-green-700 bg-white border-2 border-green-200 rounded-full font-bold">
												Business
											</span>
											<span className="py-2 px-5 text-yellow-700 bg-white border-2 border-yellow-200 rounded-full font-bold">
												Blockchain
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className="col-span-10 min-h-screen flex items-center flex-col gap-4 mt-5 pb-20 lg:col-span-8 ">
							<div role="" className="mt-10">
								<svg
									aria-hidden="true"
									className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-100 fill-blue-600"
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
