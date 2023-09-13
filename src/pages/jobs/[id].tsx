import React, { useState } from "react";

import TravelokaIcon from "public/img/icon/trav.png";
import Image from "next/image";

import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { BiBuildings } from "react-icons/bi";
import { CgSandClock } from "react-icons/cg";
import {
	BsBriefcase,
	BsBookmark,
	BsChevronDown,
	BsChevronUp,
} from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { FaShare } from "react-icons/fa";

import { GiPointyHat } from "react-icons/gi";

const JobDetail = () => {
	const [readMore, setReadMore] = useState(false);
	return (
		<div className="container mx-auto w-full h-max pt-24 px-4 lg:px-0 ">
			<div className="grid grid-cols-12 gap-3 lg:gap-5">
				<div className="col-span-12 flex flex-col gap-5 lg:col-span-8">
					<div className="rounded-lg shadow-xl p-4 bg-white">
						<div className="flex items-center justify-start gap-3 ">
							<div className="w-14 h-1w-14">
								<Image
									src={TravelokaIcon}
									alt=""
									width="0"
									height="0"
									className="w-full h-full"
								></Image>
							</div>
							<div>
								<h1 className="text-xl font-semibold font-poppins">
									Frontend Developer
								</h1>
								<h1 className="text-lg text-blue-600">
									Traveloka
								</h1>
							</div>
						</div>
						<hr className="my-5" />
						<div>
							<ul>
								<li>
									<div className="flex gap-2 items-center mt-2">
										<LiaMoneyBillWaveAltSolid />
										<span className="">
											IDR 10.000.000 - 12.000.000
										</span>
									</div>
								</li>
								<li>
									<div className="flex gap-2 items-center  mt-2">
										<BiBuildings />
										<span>IT Consultant</span>
									</div>
								</li>
								<li>
									<div className="flex gap-2 items-center  mt-2">
										<CgSandClock />
										<span>Full time</span>
									</div>
								</li>
								<li>
									<div className="flex gap-2 items-center  mt-2">
										<GiPointyHat />
										<span>Bachelor Degree</span>
									</div>
								</li>
								<li>
									<div className="flex gap-2 items-center  mt-2">
										<BsBriefcase />
										<span>5 - 10 years</span>
									</div>
								</li>
							</ul>
							<div className="flex items-center justify-between mt-5">
								<div className="flex items-center gap-1">
									<AiOutlineClockCircle className="text-md text-gray-500" />
									<span className="text-gray-500 text-md">
										Tayang 1 bulan yang lalu
									</span>
								</div>
								<div className="flex items-center gap-1">
									<GrUpdate className="text-md text-gray-500" />
									<span className="text-gray-500 text-md">
										Updates 15m ago
									</span>
								</div>
							</div>
							<div className="flex items-center justify-start gap-5 mt-3">
								<div className="w-full">
									<button className=" w-full flex  justify-center items-center gap-2 py-3 px-5 border-blue-500 border text-blue-500">
										<BsBookmark />
										<span>Mark</span>
									</button>
								</div>
								<div className="w-full">
									<button className="w-full flex justify-center items-center gap-2 py-3 px-5 border-blue-500 border text-blue-500">
										<FaShare />
										<span>Share</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="rounded-lg shadow-xl p-4 bg-white">
						<div>
							<h1>Skills</h1>
							<ul className="flex justify-start items-center gap-3 flex-wrap">
								<li>
									<span className="py-1 px-3 bg-gray-200 text-gray-500 rounded-full text-sm ">
										React JS
									</span>
								</li>
								<li>
									<span className="py-1 px-3 bg-gray-200 text-gray-500 rounded-full text-sm">
										Node JS
									</span>
								</li>
								<li>
									<span className="py-1 px-3 bg-gray-200 text-gray-500 rounded-full text-sm">
										Express JS
									</span>
								</li>
								<li>
									<span className="py-1 px-3 bg-gray-200 text-gray-500 rounded-full text-sm">
										Devops
									</span>
								</li>
								<li>
									<span className="py-1 px-3 bg-gray-200 text-gray-500 rounded-full text-sm">
										AWS Cloud
									</span>
								</li>
							</ul>
						</div>
						<hr className="my-5" />
						<div>
							<h1 className="font-bold text-lg">
								Job Description
							</h1>
							<p className="mt-2">
								The successful candidate will facilitate the
								role of a Service delivery Manager and will be
								responsible for driving ITSM based service
								delivery for Cloud Infra Operation
							</p>
							<p className="mt-2">
								Candidate must have strong Cloud Infra Operation
								experience and good exposure to AWS. Large Scale
								DC Exits and complex cloud migration Program
								Management experience is MUST
							</p>

							{readMore ? (
								<div>
									<div className="mt-5">
										<h1 className="font-bold text-lg">
											Qualifitactions:
										</h1>
										<ol className="px-4">
											<li className="list-disc text-start">
												<p>
													Bachelor’s degree in
													marketing, management,
													branding, or related fields.
												</p>
											</li>
											<li className="list-disc text-start">
												<p>
													At least TWO years of
													experience operating
													social-media promotional
													tools or
													digital-marketing/advertising
													work experience (Preferably
													Facebook Ads Manager).
												</p>
											</li>
											<li className="list-disc text-start">
												<p>
													Possess an in-depth
													knowledge of various social
													media platforms, their best
													practices, algorithm, and
													website analytics.
												</p>
											</li>
											<li className="list-disc text-start">
												<p>
													Experience working at a
													digital agency (digital
													marketing, social media,
													full-house digital marketing
													agency or online ads/PPC
													agency). Minimum TWO years,
													non internship position.
												</p>
											</li>
											<li className="list-disc text-start">
												<p>
													Content planning ability and
													design work (Canva or Adobe
													Photoshop).
												</p>
											</li>
											<li className="list-disc text-start">
												<p>
													English and Indonesian
													language proficiency.
												</p>
											</li>
										</ol>
									</div>
									<div className="mt-5">
										<h1 className="font-bold text-lg">
											Requirement:
										</h1>
										<ol className="px-4">
											<li className="list-disc text-start">
												<p>
													At least TWO years of
													experience operating
													social-media promotional
													tools or
													digital-marketing/advertising
													work experience (Preferably
													Facebook Ads Manager).
												</p>
											</li>
											<li className="list-disc text-start">
												<p>
													Bachelor’s degree in
													marketing, management,
													branding, or related fields.
												</p>
											</li>
											<li className="list-disc text-start">
												<p>
													Possess an in-depth
													knowledge of various social
													media platforms, their best
													practices, algorithm, and
													website analytics.
												</p>
											</li>

											<li className="list-disc text-start">
												<p>
													Content planning ability and
													design work (Canva or Adobe
													Photoshop).
												</p>
											</li>
											<li className="list-disc text-start">
												<p>
													Experience working at a
													digital agency (digital
													marketing, social media,
													full-house digital marketing
													agency or online ads/PPC
													agency). Minimum TWO years,
													non internship position.
												</p>
											</li>
											<li className="list-disc text-start">
												<p>
													English and Indonesian
													language proficiency.
												</p>
											</li>
										</ol>
									</div>
									<p className="mt-5 text-justify">
										<b>*Please</b> note that this job cannot
										be done remotely and will require you to
										work at the office from Mondays to
										Saturdays. This CANNOT be done on an
										internship or part time position either
										as we are looking for candidates who are
										willing to work under contract for at
										least a year.
									</p>
									<div
										className="my-3 text-blue-600 flex gap-1 items-center"
										onClick={() => setReadMore(!readMore)}
									>
										<span>Show less</span> <BsChevronUp />
									</div>
								</div>
							) : (
								<div
									className="my-3 text-blue-600 flex gap-1 items-center"
									onClick={() => setReadMore(!readMore)}
								>
									<span>Read more</span> <BsChevronDown />
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="col-span-12 bg-green-300 lg:col-span-4">
					<h1>kanan</h1>
				</div>
			</div>
		</div>
	);
};

export default JobDetail;
