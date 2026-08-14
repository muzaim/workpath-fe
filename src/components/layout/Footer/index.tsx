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
						<span className="text-xl font-bold text-white font-poppins ml-2">
							WorkPath
						</span>
					</div>
					<p className="max-w-md py-4 text-left font-poppins text-slate-400 text-sm leading-relaxed">
						WorkPath helps professionals discover the right opportunities,
						explore trusted companies, and build stronger careers with more
						confidence.
					</p>
					<div className="rounded-xl border border-white/5 bg-white/5 p-4 text-xs text-slate-400">
						<p className="font-semibold text-white">Built for modern job search</p>
						<p className="mt-1.5 leading-relaxed">
							Discover curated jobs, compare companies, and keep up with the
							latest openings in one place.
						</p>
					</div>
				</div>
				<div className="mt-8 md:col-span-4 md:mt-0">
					<div className="grid grid-cols-12 gap-4">
						<ul className="col-span-6 flex flex-col gap-2.5 text-slate-400 text-sm">
							<li>
								<h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">
									About
								</h3>
							</li>
							<li>
								<Link
									href="/companies"
									className="transition hover:text-white"
								>
									Companies
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white"
								>
									Terms
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white"
								>
									Career Advice
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
						<ul className="col-span-6 flex flex-col gap-2.5 text-slate-400 text-sm">
							<li>
								<h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">
									Resources
								</h3>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white"
								>
									Academy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white"
								>
									Salary Guide
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="transition hover:text-white"
								>
									Community
								</Link>
							</li>
							<li>
								<Link
									href="/jobs"
									className="transition hover:text-white"
								>
									Job Services
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 md:col-span-4 lg:mt-0">
					<h3 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">
						Get the job notifications
					</h3>
					<p className="text-slate-400 text-sm leading-relaxed">
						The latest job news, company updates, and hiring insights sent to
						your inbox weekly.
					</p>
					<div className="mt-4 rounded-xl border border-white/5 bg-white/5 p-4">
						<input
							type="email"
							placeholder="Enter your email"
							className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all"
						/>
						<button className="mt-3 w-full rounded-lg bg-blue-600 py-2 font-semibold font-poppins text-white transition-colors duration-250 hover:bg-blue-700 shadow-sm">
							Subscribe
						</button>
						<p className="mt-2.5 text-[11px] text-slate-500">
							No spam. Just relevant updates and new opportunities.
						</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto px-4 pb-20">
				<hr className="my-10 border-white/5" />
				<div className="flex flex-col items-center justify-between gap-5 md:flex-row">
					<p className="text-slate-500 text-xs text-center">
						Copyright © 2026 WorkPath. All rights reserved.
					</p>
					<ul className="flex items-center justify-center gap-2.5">
						<li className="grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-white/5 text-slate-400 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
							<Link href="#" className="">
								<CiFacebook className="text-lg" />
							</Link>
						</li>
						<li className="grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-white/5 text-slate-400 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
							<Link href="#" className="">
								<CiInstagram className="text-lg" />
							</Link>
						</li>
						<li className="grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-white/5 text-slate-400 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
							<Link href="#" className="">
								<CiLinkedin className="text-lg" />
							</Link>
						</li>
						<li className="grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-white/5 text-slate-400 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
							<Link href="#" className="">
								<CiTwitter className="text-lg" />
							</Link>
						</li>
						<li className="grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-white/5 text-slate-400 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
							<Link href="#" className="">
								<CiYoutube className="text-lg" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
