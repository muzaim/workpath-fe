import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { LuNewspaper } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import { BsGlobeAmericas, BsChevronDown } from "react-icons/bs";

const Navbar = () => {
	const { push, route } = useRouter();
	const router = useRouter();
	const [showFullNav, setShowFullNav] = useState(true);

	const bodyOverflowClass = showFullNav ? "no-scroll" : "";
	return (
		<>
			<div
				className={`fixed w-full h-20 px-4 z-[99999] flex justify-between items-center bg-gray-100 md:px-0  md:bg-white shadow-lg ${bodyOverflowClass}`}
			>
				<div className="md:container md:mx-auto flex justify-between items-center ">
					{/* logo */}
					<div className="flex gap-10 justify-center items-center ">
						<div
							className="flex gap-1 justify-center items-center relative cursor-pointer"
							onClick={() => push("/")}
						>
							<div className="w-9 h-9 bg-blue-700 rounded-full z-10 flex justify-center items-center">
								<div className="w-4 h-4 bg-white rounded-full"></div>
							</div>
							<div className="w-9 h-9 bg-blue-400 rounded-full absolute -top-2 -left-2 "></div>
							<span className="text-xl font-bold text-blue-700  font-poppins">
								WorkPath
							</span>
						</div>
						<ul className="  text-base font-poppins hidden md:flex md:gap-3">
							<li
								className={`h-20 flex items-center border-b-2  hover:border-blue-700 transition duration-300 ${
									route.includes("jobs")
										? "border-blue-700 "
										: "border-b-transparent"
								}`}
							>
								<Link
									href="/jobs"
									className={` capitalize hover:text-blue-700 ${
										route.includes("jobs")
											? "text-blue-700 "
											: "text-gray-600"
									}`}
								>
									find jobs
								</Link>
							</li>
							<li
								className={`h-20 flex items-center border-b-2  hover:border-blue-700 transition duration-300 ${
									route.includes("companies")
										? "border-b-2 border-blue-500 "
										: "border-b-transparent"
								}`}
							>
								<Link
									href="/companies"
									className={` capitalize hover:text-blue-700 ${
										route.includes("companies")
											? "text-blue-700 "
											: "text-gray-600"
									}`}
								>
									browse companies
								</Link>
							</li>
						</ul>
					</div>
					<ul className=" gap-3 text-base font-poppins hidden md:flex">
						<li>
							<Link
								href="/"
								className="py-3 px-6 bg-white text-blue-700 border border-transparent hover:border hover:border-blue-700 transition duration-300"
							>
								Login
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="py-3 px-6 bg-blue-700 text-white border border-transparent hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 transition duration-300"
							>
								Sign Up
							</Link>
						</li>
					</ul>

					{/* FULL NAV */}
					<div
						className={`md:hidden fixed top-0  w-[100%] h-screen bg-transparent z-[99999] ${
							showFullNav ? "-right-[100rem]" : "right-0"
						}`}
					>
						{!showFullNav && (
							<div
								className={`md:hidden fixed top-0 left-0  w-[100%] h-screen bg-black opacity-60 z-[99999] transition-all duration-400 ease-in-out ${
									showFullNav ? "-right-[100rem]" : "right-0"
								}`}
								onClick={() => setShowFullNav(!showFullNav)}
							></div>
						)}
						<div
							className={`md:hidden fixed top-0  w-[80%] h-screen bg-blue-600 z-[99999] transition-all duration-300 ease-in-out ${
								showFullNav ? "-right-[100rem]" : "right-0"
							}`}
						>
							<div>
								<div className="relative h-20 px-4 flex justify-end items-center bg-blue-600 md:px-0 md:container md:mx-auto md:bg-white">
									<div
										className=" w-10 h-10 flex items-center justify-center bg-white text-blue-700  rounded-xl border border-transparent hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 transition duration-300"
										onClick={() =>
											setShowFullNav(!showFullNav)
										}
									>
										<RxHamburgerMenu
											className={`cursor-pointer rotate-90 ${
												showFullNav
													? "rotate-90 transition-all duration-150 ease-in"
													: "transition-all duration-150 ease-in"
											}`}
										/>
									</div>
								</div>
								<div className="px-8 w-full h-screen ">
									<div className="flex items-center justify-start gap-3">
										<img
											src="https://asset-a.grid.id/crop/0x0:1080x763/945x630/photo/2023/03/26/inspirasi-warna-rambut-ala-lisa-20230326025321.jpg"
											alt=""
											className="w-14 h-14 rounded-full object-cover"
										/>
										<h1 className="font-bold text-white text-lg font-poppins uppercase">
											Nadia Varayandita
										</h1>
									</div>
									<ul className="mt-5 flex flex-col gap-5">
										<li>
											<div
												className="flex justify-start items-center gap-3 text-white cursor-pointer"
												onClick={() => {
													router.push("/jobs");
													setShowFullNav(
														!showFullNav
													);
												}}
											>
												<CgProfile className="text-xl" />
												<span className="capitalize text-lg">
													my profile
												</span>
											</div>
										</li>
										<li>
											<div
												className="flex justify-start items-center gap-3 text-white cursor-pointer"
												onClick={() => {
													router.push("/jobs");
													setShowFullNav(
														!showFullNav
													);
												}}
											>
												<LuNewspaper className="text-xl" />
												<span className="capitalize text-lg">
													my lamaran
												</span>
											</div>
										</li>
										<li>
											<div
												className="flex justify-start items-center gap-3 text-white cursor-pointer"
												onClick={() => {
													router.push("/jobs");
													setShowFullNav(
														!showFullNav
													);
												}}
											>
												<CiSettings className="text-xl" />
												<span className="capitalize text-lg">
													account setting
												</span>
											</div>
										</li>
										<li>
											<div
												className="flex justify-start items-center gap-3 text-white cursor-pointer"
												onClick={() => {
													router.push("/jobs");
													setShowFullNav(
														!showFullNav
													);
												}}
											>
												<BiLogOutCircle className="text-xl" />
												<span className="capitalize text-lg">
													logout
												</span>
											</div>
										</li>
									</ul>
									<hr className="my-5" />
									<ul className="mt-5 flex flex-col gap-5">
										<li>
											<div
												className="flex justify-start items-center gap-3 text-white cursor-pointer"
												onClick={() => {
													router.push("/jobs");
													setShowFullNav(
														!showFullNav
													);
												}}
											>
												<span className=" text-lg font-bold uppercase">
													find jobs
												</span>
											</div>
										</li>
										<li>
											<div
												className="flex justify-start items-center gap-3 text-white cursor-pointer"
												onClick={() => {
													router.push("/companies");
													setShowFullNav(
														!showFullNav
													);
												}}
											>
												<span className=" text-lg font-bold uppercase">
													find companies
												</span>
											</div>
										</li>
										<li>
											<div
												className="flex justify-start items-center gap-3 text-white cursor-pointer"
												onClick={() => {
													router.push("/jobs");
													setShowFullNav(
														!showFullNav
													);
												}}
											>
												<span className=" text-lg font-bold uppercase">
													expertclass
												</span>
											</div>
										</li>
									</ul>
									<hr className="my-5" />
									<div className="flex items-center justify-start gap-3 text-white">
										<BsGlobeAmericas />
										<span className="font-bold">En</span>
										<BsChevronDown className="font-bold" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="md:hidden">
					<div
						className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-xl border border-transparent hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 transition duration-300"
						onClick={() => setShowFullNav(!showFullNav)}
					>
						<RxHamburgerMenu
							className={`cursor-pointer ${
								showFullNav
									? "rotate-180 transition-all duration-150 ease-in"
									: "transition-all duration-150 ease-in"
							}`}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
