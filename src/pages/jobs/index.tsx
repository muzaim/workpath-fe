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
		title: "Social Media Assistant",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
		applied: 5,
		capacity: 10,
		salary: "10.000.000 - 15.000.000",
	},
	{
		id: 2,
		logo: TravelokaIcon,
		title: "Brand Designer",
		company: "Dropbox",
		location: "Yogyakarta",
		type: "Freelance",
		applied: 3,
		capacity: 10,
		salary: "8.000.000 - 12.000.000",
	},
	{
		id: 3,
		logo: TravelokaIcon,
		title: "Interative Developer",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
		applied: 6,
		capacity: 12,
		salary: "6.000.000 - 8.000.000",
	},
	{
		id: 4,
		logo: TravelokaIcon,
		title: "HR Manager",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
		applied: 2,
		capacity: 10,
		salary: "9.000.000 - 12.000.000",
	},
	{
		id: 5,
		logo: TravelokaIcon,
		title: "Brand Designer",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
		applied: 9,
		capacity: 20,
		salary: "7.000.000 - 9.000.000",
	},
	{
		id: 6,
		logo: TravelokaIcon,
		title: "Accountant",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
		applied: 6,
		capacity: 10,
		salary: "4.000.000 - 9.000.000",
	},
	{
		id: 7,
		logo: TravelokaIcon,
		title: "Social Media Assistant",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
		applied: 6,
		capacity: 10,
		salary: "8.000.000 - 13.000.000",
	},
	{
		id: 8,
		logo: TravelokaIcon,
		title: "Backend Developer",
		company: "Airbnb",
		location: "Jakarta",
		type: "Full Time",
		applied: 1,
		capacity: 5,
		salary: "5.000.000 - 7.000.000",
	},
];
const Jobs = () => {
	const [typeEmployee, setTypeEmployee] = useState(true);
	const [categories, setCategories] = useState(true);
	const [jobLevel, setJobLevel] = useState(true);
	const [salary, setSalary] = useState(true);
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
			<div className="w-full pt-20 lg:pt-0 h-max pb-10 bg-hero bg-cover lg:pb-0">
				<div className="px-4 grid grid-cols-12 md:container md:mx-auto items-center">
					{/* KIRI */}
					<div className="col-span-12 mt-5 md:col-span-12 text-center md:py-20 w-full  mx-auto">
						<h1 className="font-bold text-5xl text-gray-700 font-poppins leading-tight tracking-tighter md:text-6xl lg:text-7xl">
							Find your
						</h1>

						<h1 className="font-bold text-5xl text-sky-600 font-KaushanScript leading-tight tracking-wide md:text-6xl lg:text-7xl">
							dream job
						</h1>
						<p className=" text-center text-gray-600 mt-3 font-poppins w-full  sm:w-3/4 mx-auto md:text-lg lg:text-xl">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Sunt, veniam.
						</p>
						<div className="w-full h-auto bg-white mt-3 py-5 px-6 flex flex-col gap-3 lg:gap-10  sm:w-3/4 md:w-3/2 mx-auto lg:flex-row lg:w-3/4 lg:justify-between lg:px-5 lg:py-3 shadow-lg">
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
								className="py-3 px-6 font-bold bg-blue-700  text-white border border-transparent hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 transition duration-300 lg:w-[25rem]"
								onClick={handleClickFilter}
							>
								Search my job
							</button>
						</div>
						<div className="text-center text-sky-900 mt-3 font-poppins w-full lg:text-lg  ">
							<p>
								Popular : Frontend Developer, Backend Developer,
								UI/UX Freelancer
							</p>
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
			<div className="px-4 pt-10 container mx-auto lg:px-0 ">
				<div className="grid grid-cols-10 gap-10 ">
					{/* KIRI */}
					<div className="hidden lg:block lg:col-span-2 ">
						{/* TYPE OF EMPLOYEE */}
						<div className="mt-3">
							<div
								className="flex justify-between items-center text-xl"
								onClick={() => setTypeEmployee(!typeEmployee)}
							>
								<h1 className="font-bold cursor-pointer">
									Type of employment
								</h1>
								<AiOutlineUp
									className={`cursor-pointer ${
										typeEmployee
											? "rotate-180 transition-all duration-150 ease-in"
											: "transition-all duration-150 ease-in"
									}`}
								/>
							</div>
							<div className="mt-3  overflow-hidden">
								<div
									className={`mt-3 h-auto  text-white transition-all transform ease-in duration-150 ${
										typeEmployee
											? " block translate-y-0 "
											: "absolute -top-[200rem] -translate-y-full "
									}`}
								>
									<div className="flex items-center mb-4">
										<input
											id="fulltime-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="fulltime-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Full-time (2)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="parttime-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="parttime-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Part-time (3)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="remote-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="remote-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Remote (25)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="internship-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="internship-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Internship (10)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="contract-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="contract-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Contract (3)
										</label>
									</div>
								</div>
							</div>
						</div>
						{/* CATEGORIES */}
						<div className="mt-3">
							<div
								className="flex justify-between items-center text-xl"
								onClick={() => setCategories(!categories)}
							>
								<h1 className="font-bold cursor-pointer">
									Categories
								</h1>
								<AiOutlineUp
									className={`cursor-pointer ${
										categories
											? "rotate-180 transition-all duration-150 ease-in"
											: "transition-all duration-150 ease-in"
									}`}
								/>
							</div>
							<div className="mt-3  overflow-hidden">
								<div
									className={`mt-3 h-auto  text-white transition-all transform ease-in duration-150 ${
										categories
											? " block translate-y-0 "
											: "absolute -top-[200rem] -translate-y-full "
									}`}
								>
									<div className="flex items-center mb-4">
										<input
											id="design-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="design-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Design (24)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="sales-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="sales-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Sales (3)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="marketing-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="marketing-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Marketing (21)
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
											Business (3)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="humanresources-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="humanresources-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Human Resources (3)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="finance-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="finance-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Finance (34)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="engineering-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="engineering-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Engineering (3)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="technology-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="technology-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Technology (36)
										</label>
									</div>
								</div>
							</div>
						</div>
						{/* JOB LEVEL */}
						<div className="mt-3">
							<div
								className="flex justify-between items-center text-xl"
								onClick={() => setJobLevel(!jobLevel)}
							>
								<h1 className="font-bold cursor-pointer">
									Job Lebel
								</h1>
								<AiOutlineUp
									className={`cursor-pointer ${
										jobLevel
											? "rotate-180 transition-all duration-150 ease-in"
											: "transition-all duration-150 ease-in"
									}`}
								/>
							</div>
							<div className="mt-3  overflow-hidden">
								<div
									className={`mt-3 h-auto  text-white transition-all transform ease-in duration-150 ${
										jobLevel
											? " block translate-y-0 "
											: "absolute -top-[200rem] -translate-y-full "
									}`}
								>
									<div className="flex items-center mb-4">
										<input
											id="entry-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="entry-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Entry Level (2)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="mid-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="mid-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Mid Level (3)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="senior-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="senior-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Senior Level (25)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="director-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="director-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											Director (10)
										</label>
									</div>
									<div className="flex items-center mb-4">
										<input
											id="vip-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="vip-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											VIP or Above (6)
										</label>
									</div>
								</div>
							</div>
						</div>
						{/* SALARIES */}
						<div className="mt-3">
							<div
								className="flex justify-between items-center text-xl"
								onClick={() => setSalary(!salary)}
							>
								<h1 className="font-bold cursor-pointer">
									Salary
								</h1>
								<AiOutlineUp
									className={`cursor-pointer ${
										salary
											? "rotate-180 transition-all duration-150 ease-in"
											: "transition-all duration-150 ease-in"
									}`}
								/>
							</div>
							<div className="mt-3  overflow-hidden">
								<div
									className={`mt-3 h-auto  text-white transition-all transform ease-in duration-150 ${
										salary
											? " block translate-y-0 "
											: "absolute -top-[200rem] -translate-y-full "
									}`}
								>
									<div className="flex items-center mb-4">
										<input
											id="satu-checkbox"
											type="checkbox"
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100  rounded-lg"
											onClick={() => {
												handleClickFilter();
											}}
										/>
										<label
											htmlFor="satu-checkbox"
											className="ml-2 text-lg font-medium text-gray-500"
										>
											$700 - $1000 (4)
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
											$1000 - $2000 (14)
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
											$2000 - $5000 (7)
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
											$5000+ (4)
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* KANAN */}
					{!loading ? (
						<div className="col-span-10 justify-center flex flex-col gap-4 mt-5 pb-20 lg:col-span-8 lg:justify-start">
							<div>
								<h1 className="text-3xl font-semibold font-poppins">
									All Jobs
								</h1>
								<div className="flex justify-between items-center mt-2">
									<span className="text-gray-500">
										Showing 73 result
									</span>
									<span className="flex gap-3 items-center justify-center font-bold">
										Most relevant <AiOutlineDown />
									</span>
								</div>
							</div>
							<div className="grid grid-cols-12 gap-3">
								{allJobs.map((item) => (
									<div
										key={item.id}
										className="flex flex-col border md:flex-row md:items-center md:gap-6 w-full h-auto p-4  bg-white  cursor-pointer  hover:shadow-lg transition-all duration-300 col-span-12 lg:col-span-6"
										onClick={() => {
											Router.push(`/jobs/${item.id}`);
										}}
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
										<div className="sm:flex sm:justify-between w-full">
											<div className="py-1 flex flex-col justify-between">
												<div>
													<h1 className="font-bold text-lg lg:text-xl">
														{item.title}
													</h1>
													<div className="flex gap-3 text-gray-500  lg:text-md ">
														<p>{item.company}</p>
														<p>{item.location}</p>
													</div>
													<span className="mb-3 text-blue-600 text-md">
														IDR {item.salary}
													</span>
												</div>
												<div className="flex gap-3 ">
													<span className="py-1 px-3 bg-green-200 text-green-700 font-bold rounded-full text-sm">
														{item.type}
													</span>
													|{" "}
													<span className="py-1 px-3  text-yellow-400 border border-yellow-400 font-bold rounded-full text-sm">
														Marketing
													</span>
												</div>
											</div>
											<div>
												<button className="w-full py-3 mt-3 bg-blue-700 text-white font-bold">
													Apply
												</button>
												<LoadingBar
													progress={item.applied}
													total={item.capacity}
												/>
												<p className="mt-3">
													<span className="font-bold">
														{item.applied} applied
													</span>{" "}
													of {item.capacity} capacity
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className="col-span-10 min-h-screen  flex items-center flex-col gap-4 mt-5 pb-20 lg:col-span-8 ">
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
