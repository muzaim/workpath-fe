import React, { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import {
	AiOutlineClockCircle,
	AiOutlineEnvironment,
	AiOutlineTeam,
} from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import {
	BsBookmark,
	BsBriefcase,
	BsChevronDown,
	BsChevronUp,
} from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { FaShare } from "react-icons/fa";
import { GiPointyHat } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

import LoadingBar from "@/components/elements/jobs/LoadingBar";
import { allJobs, getJobById } from "@/data/jobs";

const JobDetail = () => {
	const [readMore, setReadMore] = useState(false);
	const router = useRouter();
	const jobId = Number(router.query.id);
	const jobDetail = getJobById(jobId) || allJobs[0];

	if (!jobDetail) {
		return null;
	}

	return (
		<div className="container mx-auto h-max w-full px-4 pb-16 pt-24 lg:px-0">
			<div className="grid grid-cols-12 gap-4 lg:gap-6">
				<div className="col-span-12 flex flex-col gap-5 lg:col-span-8">
					<div className="rounded-xl bg-white p-5 shadow-xl">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
							<div className="flex items-center justify-start gap-4">
								<div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
									<Image
										src={jobDetail.logo}
										alt={jobDetail.company}
										width={56}
										height={56}
										className="h-14 w-14 object-contain"
									/>
								</div>
								<div>
									<div className="flex flex-wrap items-center gap-2">
										{jobDetail.featured ? (
											<span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
												Featured
											</span>
										) : null}
										<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
											{jobDetail.posting}
										</span>
										<span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
											{jobDetail.workSetup}
										</span>
									</div>
									<h1 className="mt-3 text-2xl font-semibold font-poppins text-slate-800 lg:text-3xl">
										{jobDetail.title}
									</h1>
									<h2 className="text-lg text-blue-600">
										{jobDetail.company}
									</h2>
									<div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
										<AiOutlineEnvironment />
										<span>{jobDetail.location}</span>
									</div>
								</div>
							</div>
							<div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600 sm:min-w-[220px]">
								<p className="font-semibold text-slate-800">Application progress</p>
								<p className="mt-1">
									{jobDetail.applied} applicants for {jobDetail.capacity} slots
								</p>
								<div className="mt-3">
									<LoadingBar
										progress={jobDetail.applied}
										total={jobDetail.capacity}
									/>
								</div>
							</div>
						</div>

						<hr className="my-5" />

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="flex gap-3 rounded-xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50">
								<LiaMoneyBillWaveAltSolid className="mt-1 text-lg text-blue-600" />
								<div>
									<p className="text-sm text-gray-500">Salary</p>
									<span className="font-medium text-slate-800">
										{jobDetail.salary}
									</span>
								</div>
							</div>
							<div className="flex gap-3 rounded-xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50">
								<BiBuildings className="mt-1 text-lg text-blue-600" />
								<div>
									<p className="text-sm text-gray-500">Category</p>
									<span className="font-medium text-slate-800">
										{jobDetail.category}
									</span>
								</div>
							</div>
							<div className="flex gap-3 rounded-xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50">
								<CgSandClock className="mt-1 text-lg text-blue-600" />
								<div>
									<p className="text-sm text-gray-500">Employment type</p>
									<span className="font-medium text-slate-800">
										{jobDetail.type}
									</span>
								</div>
							</div>
							<div className="flex gap-3 rounded-xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50">
								<GiPointyHat className="mt-1 text-lg text-blue-600" />
								<div>
									<p className="text-sm text-gray-500">Education</p>
									<span className="font-medium text-slate-800">
										{jobDetail.education}
									</span>
								</div>
							</div>
							<div className="flex gap-3 rounded-xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50 sm:col-span-2">
								<BsBriefcase className="mt-1 text-lg text-blue-600" />
								<div>
									<p className="text-sm text-gray-500">Experience</p>
									<span className="font-medium text-slate-800">
										{jobDetail.experience}
									</span>
								</div>
							</div>
						</div>

						<div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:gap-6">
								<div className="flex items-center gap-2">
									<AiOutlineClockCircle />
									<span>Tayang {jobDetail.posting}</span>
								</div>
								<div className="flex items-center gap-2">
									<GrUpdate />
									<span>Updated recently</span>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<button className="flex items-center justify-center gap-2 rounded-lg border border-blue-500 px-5 py-3 text-blue-500 transition hover:bg-blue-50">
									<BsBookmark />
									<span>Save</span>
								</button>
								<button className="flex items-center justify-center gap-2 rounded-lg border border-blue-500 px-5 py-3 text-blue-500 transition hover:bg-blue-50">
									<FaShare />
									<span>Share</span>
								</button>
							</div>
						</div>
					</div>

					<div className="rounded-xl bg-white p-5 shadow-xl">
						<div>
							<h2 className="text-lg font-semibold text-slate-800">Skills</h2>
							<ul className="mt-4 flex flex-wrap items-center gap-3">
								{jobDetail.skills.map((skill) => (
									<li key={skill}>
										<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-gray-600">
											{skill}
										</span>
									</li>
								))}
							</ul>
						</div>

						<hr className="my-5" />

						<div>
							<h2 className="text-lg font-bold text-slate-800">
								About This Role
							</h2>
							<p className="mt-2 leading-7 text-gray-600">
								{jobDetail.about}
							</p>
						</div>

						<div className="mt-6">
							<h2 className="text-lg font-bold text-slate-800">
								Job Description
							</h2>
							{jobDetail.description.map((paragraph) => (
								<p key={paragraph} className="mt-3 leading-7 text-gray-600">
									{paragraph}
								</p>
							))}

							{readMore ? (
								<div>
									<div className="mt-6">
										<h3 className="text-lg font-bold text-slate-800">
											Qualifications
										</h3>
										<ol className="mt-3 space-y-2 px-4">
											{jobDetail.qualifications.map((item) => (
												<li key={item} className="list-disc text-gray-600">
													{item}
												</li>
											))}
										</ol>
									</div>

									<div className="mt-6">
										<h3 className="text-lg font-bold text-slate-800">
											Requirements
										</h3>
										<ol className="mt-3 space-y-2 px-4">
											{jobDetail.requirements.map((item) => (
												<li key={item} className="list-disc text-gray-600">
													{item}
												</li>
											))}
										</ol>
									</div>

									<p className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-justify text-gray-600">
										<b>Note:</b> This role follows a hybrid working model and
										requires close collaboration with product and engineering
										teams during core working hours.
									</p>

									<button
										type="button"
										className="my-4 flex items-center gap-1 text-blue-600"
										onClick={() => setReadMore(false)}
									>
										<span>Show less</span>
										<BsChevronUp />
									</button>
								</div>
							) : (
								<button
									type="button"
									className="my-4 flex items-center gap-1 text-blue-600"
									onClick={() => setReadMore(true)}
								>
									<span>Read more</span>
									<BsChevronDown />
								</button>
							)}
						</div>
					</div>
				</div>

				<div className="col-span-12 flex flex-col gap-5 lg:col-span-4">
					<div className="rounded-xl bg-white p-5 shadow-xl">
						<h2 className="text-xl font-semibold font-poppins text-slate-800">
							Apply for this role
						</h2>
						<p className="mt-2 text-sm leading-6 text-gray-500">
							Complete your application before the hiring team closes this
							position. Early applications are usually reviewed first.
						</p>

						<button className="mt-5 w-full rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800">
							Apply Now
						</button>

						<div className="mt-5">
							<LoadingBar
								progress={jobDetail.applied}
								total={jobDetail.capacity}
							/>
							<p className="mt-2 text-xs text-gray-500">
								<span className="font-semibold text-gray-700">
									{jobDetail.applied}
								</span>{" "}
								applied of {jobDetail.capacity} capacity
							</p>
						</div>
					</div>

					<div className="rounded-xl bg-white p-5 shadow-xl">
						<h2 className="text-lg font-semibold text-slate-800">
							Job Overview
						</h2>
						<div className="mt-4 space-y-4">
							<div className="flex items-start gap-3 rounded-xl border border-slate-100 p-3">
								<AiOutlineEnvironment className="mt-1 text-blue-600" />
								<div>
									<p className="text-sm text-gray-500">Location</p>
									<p className="font-medium text-slate-800">
										{jobDetail.location}
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3 rounded-xl border border-slate-100 p-3">
								<AiOutlineTeam className="mt-1 text-blue-600" />
								<div>
									<p className="text-sm text-gray-500">Hiring team</p>
									<p className="font-medium text-slate-800">
										Product, Design, Engineering
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3 rounded-xl border border-slate-100 p-3">
								<BsBriefcase className="mt-1 text-blue-600" />
								<div>
									<p className="text-sm text-gray-500">Work setup</p>
									<p className="font-medium text-slate-800">{jobDetail.workSetup}</p>
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-xl bg-white p-5 shadow-xl">
						<h2 className="text-lg font-semibold text-slate-800">
							About Company
						</h2>
						<p className="mt-3 text-sm leading-6 text-gray-600">
							{jobDetail.companyOverview}
						</p>
						<div className="mt-4 border-t border-slate-100 pt-4 text-sm text-gray-500">
							<p>Industry: {jobDetail.industry}</p>
							<p className="mt-2">Company size: {jobDetail.companySize}</p>
							<p className="mt-2">Headquarters: {jobDetail.location}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobDetail;
