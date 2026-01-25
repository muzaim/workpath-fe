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
						<ul className="hidden md:flex items-center gap-6 text-sm font-medium font-poppins">
							{[
								{ label: "Find Jobs", href: "/jobs", key: "jobs" },
								{ label: "Browse Companies", href: "/companies", key: "companies" },
							].map(({ label, href, key }) => {
								const isActive = route.includes(key);

								return (
									<li
										key={key}
										className={`
          relative h-20 flex items-center
          transition-colors duration-300
          ${isActive ? "text-blue-700" : "text-gray-600"}
        `}
									>
										<Link
											href={href}
											className="capitalize hover:text-blue-700"
										>
											{label}
										</Link>

										{/* underline */}
										<span
											className={`
            absolute bottom-0 left-0 h-[2px] w-full
            bg-blue-700 transition-all duration-300
            ${isActive ? "scale-x-100" : "scale-x-0"}
          `}
										/>
									</li>
								);
							})}
						</ul>

					</div>
					<ul className="hidden md:flex items-center gap-4 font-poppins text-sm">
						<li>
							<Link
								href="/login"
								className="
        rounded-md px-5 py-2.5
        text-blue-700
        border border-blue-700/30
        hover:border-blue-700
        hover:bg-blue-50
        transition-all duration-300
      "
							>
								Login
							</Link>
						</li>

						<li>
							<Link
								href="/signup"
								className="
        rounded-md px-5 py-2.5
        bg-blue-700 text-white
        shadow-sm
        hover:bg-blue-800
        hover:shadow-md
        transition-all duration-300
      "
							>
								Sign Up
							</Link>
						</li>
					</ul>


					{/* FULL NAV */}
					<div
						className={`md:hidden fixed top-0  w-[100%] h-screen bg-transparent z-[99999] ${showFullNav ? "-right-[100rem]" : "right-0"
							}`}
					>
						{!showFullNav && (
							<div
								className={`md:hidden fixed top-0 left-0  w-[100%] h-screen bg-black opacity-60 z-[99999] transition-all duration-400 ease-in-out ${showFullNav ? "-right-[100rem]" : "right-0"
									}`}
								onClick={() => setShowFullNav(!showFullNav)}
							></div>
						)}
						<div
							className={`md:hidden fixed top-0  w-[80%] h-screen bg-blue-600 z-[99999] transition-all duration-300 ease-in-out ${showFullNav ? "-right-[100rem]" : "right-0"
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
											className={`cursor-pointer rotate-90 ${showFullNav
												? "rotate-90 transition-all duration-150 ease-in"
												: "transition-all duration-150 ease-in"
												}`}
										/>
									</div>
								</div>
								<div className="h-screen w-full px-8 py-6 bg-blue-700">
									{/* Profile */}
									<div className="flex items-center gap-4 pb-6 border-b border-white/20">
										<img
											src="https://asset-a.grid.id/crop/0x0:1080x763/945x630/photo/2023/03/26/inspirasi-warna-rambut-ala-lisa-20230326025321.jpg"
											alt="profile"
											className="h-14 w-14 rounded-full object-cover border-2 border-white"
										/>
										<div>
											<h1 className="text-lg font-bold text-white uppercase">
												Nadia
											</h1>
											<span className="text-sm text-white/70">
												Job Seeker
											</span>
										</div>
									</div>

									{/* Main Menu */}
									<ul className="mt-6 flex flex-col gap-2">
										{[
											{ icon: <CgProfile />, label: "My Profile" },
											{ icon: <LuNewspaper />, label: "My Lamaran" },
											{ icon: <CiSettings />, label: "Account Setting" },
										].map((item, i) => (
											<li
												key={i}
												onClick={() => {
													router.push("/jobs");
													setShowFullNav(false);
												}}
												className="
          group flex cursor-pointer items-center gap-4
          rounded-lg px-4 py-3
          text-white transition
          hover:bg-white/10
        "
											>
												<span className="text-xl">{item.icon}</span>
												<span className="text-base font-medium">
													{item.label}
												</span>
											</li>
										))}

										{/* Logout */}
										<li
											onClick={() => {
												router.push("/jobs");
												setShowFullNav(false);
											}}
											className="
        mt-2 flex cursor-pointer items-center gap-4
        rounded-lg px-4 py-3
        text-red-200 transition
        hover:bg-red-500/20
      "
										>
											<BiLogOutCircle className="text-xl" />
											<span className="text-base font-semibold">
												Logout
											</span>
										</li>
									</ul>

									{/* Divider */}
									<hr className="my-6 border-white/20" />

									{/* Explore */}
									<ul className="flex flex-col gap-2">
										{[
											{ label: "Find Jobs", path: "/jobs" },
											{ label: "Find Companies", path: "/companies" },
											{ label: "Expert Class", path: "/expert" },
										].map((item, i) => (
											<li
												key={i}
												onClick={() => {
													router.push(item.path);
													setShowFullNav(false);
												}}
												className="
          cursor-pointer rounded-lg px-4 py-3
          text-sm font-bold uppercase text-white
          transition hover:bg-white/10
        "
											>
												{item.label}
											</li>
										))}
									</ul>

									{/* Divider */}
									<hr className="my-6 border-white/20" />

									{/* Language */}
									<div className="
    flex cursor-pointer items-center gap-3
    rounded-lg px-4 py-3 text-white
    hover:bg-white/10
  ">
										<BsGlobeAmericas />
										<span className="font-semibold">EN</span>
										<BsChevronDown />
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
							className={`cursor-pointer ${showFullNav
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
