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
		<div className="w-full h-max bg-[#071233] pt-8 -z-10">
			<div className="pt-10 relative px-4  container mx-auto md:grid md:grid-cols-12 md:gap-5">
				<div className="md:col-span-4">
					<div className="flex gap-1 justify-start items-center relative cursor-pointer">
						<div className="w-9 h-9 bg-blue-700 rounded-full z-10 flex justify-center items-center">
							<div className="w-4 h-4 bg-white rounded-full"></div>
						</div>
						<div className="w-9 h-9 bg-blue-400 rounded-full absolute -top-2 -left-2 "></div>
						<span className="text-xl font-bold text-white font-poppins lg:text-2xl lg:ml-2">
							WorkPath
						</span>
					</div>
					<p className="py-5 text-gray-400 font-poppins text-justify lg:text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Libero delectus maxime natus repudiandae aliquid. Lorem
						ipsum dolor, sit amet consectetur adipisicing elit.
						Nesciunt, perspiciatis?
					</p>
				</div>
				<div className="md:col-span-4">
					<div className="grid grid-cols-12">
						<ul className="col-span-6 flex flex-col gap-3 text-gray-400">
							<li>
								<h1 className="font-bold text-white text-xl lg:text-2xl">
									About
								</h1>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-white lg:text-xl"
								>
									Companies
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-white lg:text-xl"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-white lg:text-xl"
								>
									Terms
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-white lg:text-xl"
								>
									Advice
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-white lg:text-xl"
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
									className="hover:text-white lg:text-xl"
								>
									Academy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-white lg:text-xl"
								>
									Salary
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-white lg:text-xl"
								>
									Goverment
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-white lg:text-xl"
								>
									Service
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-5 md:col-span-4 lg:mt-0">
					<h1 className="text-white font-bold mb-2 text-xl lg:text-2xl">
						Get the job notifications
					</h1>
					<p className="text-gray-400 lg:text-lg">
						The latest job news, articles, sent to your inbox
						weekly.
					</p>
					<input
						type="text"
						placeholder="Enter your email"
						className="w-full py-3 bg-white px-4 mt-3"
					/>
					<button className="w-[10rem] font-bold font-poppins mt-3 py-3 bg-blue-700 text-white hover:bg-white hover:text-blue-900 transition-all duration-300">
						Subscribe
					</button>
				</div>
			</div>
			<div className="container mx-auto px-4 pb-20">
				<hr className="my-10 " />
				<div className="flex flex-col md:flex-row justify-between items-center gap-5">
					<p className="text-gray-400 text-center">
						Copyright © 2023 WorkPath. All rights reserved.
					</p>
					<ul className="flex gap-5 justify-center items-center">
						<li className="text-white rounded-full grid place-content-center w-8 h-8 lg:w-10 lg:h-10 bg-blue-900 hover:bg-blue-600 transition-all duration-200 cursor-pointer">
							<Link href="#" className="">
								<CiFacebook className="lg:text-xl" />
							</Link>
						</li>
						<li className="text-white rounded-full grid place-content-center w-8 h-8 lg:w-10 lg:h-10 bg-blue-900 hover:bg-blue-600 transition-all duration-200 cursor-pointer">
							<Link href="#" className="">
								<CiInstagram className="lg:text-xl" />
							</Link>
						</li>
						<li className="text-white rounded-full grid place-content-center w-8 h-8 lg:w-10 lg:h-10 bg-blue-900 hover:bg-blue-600 transition-all duration-200 cursor-pointer">
							<Link href="#" className="">
								<CiLinkedin className="lg:text-xl" />
							</Link>
						</li>
						<li className="text-white rounded-full grid place-content-center w-8 h-8 lg:w-10 lg:h-10 bg-blue-900 hover:bg-blue-600 transition-all duration-200 cursor-pointer">
							<Link href="#" className="">
								<CiTwitter className="lg:text-xl" />
							</Link>
						</li>
						<li className="text-white rounded-full grid place-content-center w-8 h-8 lg:w-10 lg:h-10 bg-blue-900 hover:bg-blue-600 transition-all duration-200 cursor-pointer">
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
