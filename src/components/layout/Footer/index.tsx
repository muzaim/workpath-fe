import React from "react";
import Link from "next/link";

import {
	CiFacebook,
	CiInstagram,
	CiTwitter,
	CiLinkedin,
	CiYoutube,
} from "react-icons/ci";

const Footer = () => {
	return (
		<div className="w-full h-max bg-[#071233] pt-8">
			<div className="container mx-auto px-4 pt-10 md:grid md:grid-cols-12 md:gap-8">
				<div className="md:col-span-4">
					<div className="relative flex cursor-pointer items-center justify-start gap-1">
						<div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-700">
							<div className="h-4 w-4 rounded-full bg-white"></div>
						</div>
						<div className="absolute -left-2 -top-2 h-9 w-9 rounded-full bg-blue-400 opacity-80"></div>
						<span className="text-xl font-bold text-white font-poppins lg:text-2xl lg:ml-2">
							WorkPath
						</span>
					</div>
					<p className="max-w-md py-5 text-justify font-poppins text-gray-400 lg:text-lg">
						WorkPath helps professionals discover the right opportunities,
						explore trusted companies, and build stronger careers with more
						confidence.
					</p>
					<div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
						<p className="font-semibold text-white">Built for modern job search</p>
						<p className="mt-2 leading-6">
							Discover curated jobs, compare companies, and keep up with the
							latest openings in one place.
						</p>
					</div>
				</div>
				<div className="mt-8 md:col-span-4 md:mt-0">
					<div className="grid grid-cols-12">
						<ul className="col-span-6 flex flex-col gap-3 text-gray-400">
							<li>
								<h1 className="font-bold text-white text-xl lg:text-2xl">
									About
								</h1>
							</li>
							<li>
								<Link
									href="/companies"
									className="transition hover:text-white lg:text-xl"
								>
									Companies
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white lg:text-xl"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white lg:text-xl"
								>
									Terms
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white lg:text-xl"
								>
									Career Advice
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white lg:text-xl"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
						<ul className="col-span-6 flex flex-col gap-3 text-gray-400">
							<li>
								<h1 className="font-bold text-white text-xl lg:text-2xl">
									Resources
								</h1>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white lg:text-xl"
								>
									Academy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white lg:text-xl"
								>
									Salary Guide
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white lg:text-xl"
								>
									Community
								</Link>
							</li>
							<li>
								<Link
									href="/jobs"
									className="transition hover:text-white lg:text-xl"
								>
									Job Services
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 md:col-span-4 lg:mt-0">
					<h1 className="text-white font-bold mb-2 text-xl lg:text-2xl">
						Get the job notifications
					</h1>
					<p className="text-gray-400 lg:text-lg">
						The latest job news, company updates, and hiring insights sent to
						your inbox weekly.
					</p>
					<div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
						<input
							type="text"
							placeholder="Enter your email"
							className="w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-slate-700"
						/>
						<button className="mt-3 w-full rounded-lg bg-blue-700 py-3 font-bold font-poppins text-white transition-all duration-300 hover:bg-white hover:text-blue-900">
							Subscribe
						</button>
						<p className="mt-3 text-xs text-gray-400">
							No spam. Just relevant updates and new opportunities.
						</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto px-4 pb-20">
				<hr className="my-10 border-white/10" />
				<div className="flex flex-col items-center justify-between gap-5 md:flex-row">
					<p className="text-gray-400 text-center">
						Copyright © 2026 WorkPath. All rights reserved.
					</p>
					<ul className="flex items-center justify-center gap-4">
						<li className="grid h-9 w-9 cursor-pointer place-content-center rounded-full bg-blue-900 text-white transition-all duration-200 hover:bg-blue-600 lg:h-10 lg:w-10">
							<Link href="#" className="">
								<CiFacebook className="lg:text-xl" />
							</Link>
						</li>
						<li className="grid h-9 w-9 cursor-pointer place-content-center rounded-full bg-blue-900 text-white transition-all duration-200 hover:bg-blue-600 lg:h-10 lg:w-10">
							<Link href="#" className="">
								<CiInstagram className="lg:text-xl" />
							</Link>
						</li>
						<li className="grid h-9 w-9 cursor-pointer place-content-center rounded-full bg-blue-900 text-white transition-all duration-200 hover:bg-blue-600 lg:h-10 lg:w-10">
							<Link href="#" className="">
								<CiLinkedin className="lg:text-xl" />
							</Link>
						</li>
						<li className="grid h-9 w-9 cursor-pointer place-content-center rounded-full bg-blue-900 text-white transition-all duration-200 hover:bg-blue-600 lg:h-10 lg:w-10">
							<Link href="#" className="">
								<CiTwitter className="lg:text-xl" />
							</Link>
						</li>
						<li className="grid h-9 w-9 cursor-pointer place-content-center rounded-full bg-blue-900 text-white transition-all duration-200 hover:bg-blue-600 lg:h-10 lg:w-10">
							<Link href="#" className="">
								<CiYoutube className="lg:text-xl" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
