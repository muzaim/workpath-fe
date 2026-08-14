import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

	return (
		<>
			<div
				className="fixed z-[99999] flex h-20 w-full items-center justify-between border-b border-slate-200/70 bg-gray-100/95 px-4 shadow-lg backdrop-blur md:bg-white/95 md:px-0"
			>
				<div className="md:container md:mx-auto flex w-full justify-between items-center">
					{/* logo */}
					<div className="flex items-center justify-center gap-10">
						<div
							className="relative flex cursor-pointer items-center justify-center gap-1"
							onClick={() => push("/")}
						>
							<div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 shadow-sm">
								<div className="h-4 w-4 rounded-full bg-white"></div>
							</div>
							<div className="absolute -left-2 -top-2 h-9 w-9 rounded-full bg-blue-400 opacity-80"></div>
							<span className="font-poppins text-xl font-bold text-blue-700">
								WorkPath
							</span>
						</div>
						<ul className="hidden md:flex items-center gap-2 text-sm font-medium font-poppins">
							{[
								{ label: "Find Jobs", href: "/jobs", key: "jobs" },
								{ label: "Browse Companies", href: "/companies", key: "companies" },
								{ label: "Dashboard", href: "/dashboard", key: "dashboard" },
							].map(({ label, href, key }) => {
								const isActive = route === href || (href !== "/" && route.startsWith(href));

								return (
									<li key={key} className="flex items-center">
										<Link
											href={href}
											className={`rounded-lg px-4 py-2 capitalize transition-all duration-200 font-semibold ${
												isActive
													? "bg-blue-50 text-blue-700"
													: "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
											}`}
										>
											{label}
										</Link>
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
        rounded-lg px-5 py-2.5
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
        rounded-lg px-5 py-2.5
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
							className={`md:hidden fixed top-0 w-[80%] h-screen bg-slate-950 z-[99999] transition-all duration-300 ease-in-out shadow-2xl ${showFullNav ? "-right-[100rem]" : "right-0"
								}`}
						>
							<div>
								<div className="relative flex h-20 items-center justify-end bg-slate-950 px-4 md:container md:mx-auto md:px-0">
									<div
										className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-200 hover:bg-white/10 cursor-pointer"
										onClick={() =>
											setShowFullNav(!showFullNav)
										}
									>
										<RxHamburgerMenu
											className={`cursor-pointer rotate-90 text-lg ${showFullNav
												? "rotate-90 transition-all duration-150 ease-in"
												: "transition-all duration-150 ease-in"
												}`}
										/>
									</div>
								</div>
								<div className="h-screen w-full bg-slate-950 px-8 py-6">
									{/* Profile */}
									<div className="flex items-center gap-4 border-b border-white/5 pb-6">
										<div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
											<Image
												src="https://asset-a.grid.id/crop/0x0:1080x763/945x630/photo/2023/03/26/inspirasi-warna-rambut-ala-lisa-20230326025321.jpg"
												alt="profile"
												fill
												unoptimized
												className="object-cover"
											/>
										</div>
										<div>
											<h1 className="text-lg font-bold text-white uppercase tracking-wide">
												Nadia
											</h1>
											<span className="text-sm text-slate-400">
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
													router.push("/dashboard");
													setShowFullNav(false);
												}}
												className="group flex cursor-pointer items-center gap-4 rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
											>
												<span className="text-xl text-slate-400 group-hover:text-blue-500">{item.icon}</span>
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
											className="mt-2 flex cursor-pointer items-center gap-4 rounded-lg px-4 py-3 text-red-400 transition hover:bg-red-500/10"
										>
											<BiLogOutCircle className="text-xl" />
											<span className="text-base font-semibold">
												Logout
											</span>
										</li>
									</ul>

									{/* Divider */}
									<hr className="my-6 border-white/5" />

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
												className="cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold uppercase text-slate-300 transition hover:bg-white/5 hover:text-white"
											>
												{item.label}
											</li>
										))}
									</ul>

									{/* Divider */}
									<hr className="my-6 border-white/5" />

									{/* Language */}
									<div className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white">
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
						className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition duration-200 hover:bg-slate-50 cursor-pointer"
						onClick={() => setShowFullNav(!showFullNav)}
					>
						<RxHamburgerMenu
							className={`cursor-pointer text-lg ${showFullNav
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
