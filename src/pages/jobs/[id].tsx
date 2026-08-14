import React, { useState, useEffect } from "react";

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
	BsBookmarkFill,
	BsBriefcase,
	BsChevronDown,
	BsChevronUp,
	BsClock,
} from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { FaShare } from "react-icons/fa";
import { GiPointyHat } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

import LoadingBar from "@/components/elements/jobs/LoadingBar";
import { allJobs, getJobById } from "@/data/jobs";
import { allCompanies } from "@/data/companies";
import { useCandidate } from "@/lib/CandidateContext";

const JobDetail = () => {
	const [readMore, setReadMore] = useState(false);
	const [showApplyModal, setShowApplyModal] = useState(false);
	const router = useRouter();
	const jobId = Number(router.query.id);
	const jobDetail = getJobById(jobId) || allJobs[0];

	const { savedJobIds, appliedJobs, toggleSaveJob, applyToJob, addRecentlyViewed, profile } = useCandidate();

	useEffect(() => {
		if (jobDetail?.id) {
			addRecentlyViewed(jobDetail.id);
		}
	}, [jobDetail?.id]);

	if (!jobDetail) {
		return null;
	}

	const companyInfo = allCompanies.find((c) => c.company === jobDetail.company);
	const benefits = companyInfo?.benefits || [
		"Competitive salary",
		"Flexible working hours",
		"Health & Wellness benefits",
		"Annual training budget"
	];

	const isSaved = savedJobIds.includes(jobDetail.id);
	const isApplied = appliedJobs.some((item) => item.jobId === jobDetail.id);

	const similarJobs = allJobs
		.filter((job) => job.category === jobDetail.category && job.id !== jobDetail.id)
		.slice(0, 3);

	return (
		<div className="container mx-auto h-max w-full px-4 pb-16 pt-24 lg:px-0">
			<div className="grid grid-cols-12 gap-4 lg:gap-6">
				<div className="col-span-12 flex flex-col gap-5 lg:col-span-8">
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
							<div className="flex items-center justify-start gap-4">
								<div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden p-1">
									<img
										src={jobDetail.logo}
										alt={jobDetail.company}
										className="h-12 w-12 object-contain rounded-lg"
										onError={(e) => {
											e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(jobDetail.company)}&background=f1f5f9&color=1d4ed8&bold=true`;
										}}
									/>
								</div>
								<div>
									<div className="flex flex-wrap items-center gap-2">
										{jobDetail.urgent && (
											<span className="rounded bg-red-50 text-red-700 border border-red-100/50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
												Urgent
											</span>
										)}
										{jobDetail.easyApply && (
											<span className="rounded bg-blue-50 text-blue-700 border border-blue-100/50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
												Easy Apply
											</span>
										)}
										{jobDetail.featured && (
											<span className="rounded bg-amber-50 text-amber-700 border border-amber-100/50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
												Featured
											</span>
										)}
										<span className="rounded bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
											{jobDetail.posting}
										</span>
									</div>
									<h1 className="mt-2.5 text-2xl font-bold font-poppins text-slate-800 lg:text-3xl tracking-tight">
										{jobDetail.title}
									</h1>
									<div className="flex items-center gap-1.5 mt-1">
										<h2 className="text-base font-semibold text-blue-600">
											{jobDetail.company}
										</h2>
										{jobDetail.verified && (
											<svg className="h-4 w-4 text-blue-500 fill-current shrink-0" viewBox="0 0 20 20" fill="currentColor">
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
											</svg>
										)}
									</div>
									<div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
										<AiOutlineEnvironment />
										<span>{jobDetail.location}</span>
									</div>
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
								<button
									onClick={() => toggleSaveJob(jobDetail.id)}
									className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors duration-200 shadow-sm cursor-pointer ${
										isSaved
											? "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
											: "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
									}`}
								>
									{isSaved ? <BsBookmarkFill className="text-blue-700" /> : <BsBookmark />}
									<span>{isSaved ? "Saved" : "Save"}</span>
								</button>
								<button
									onClick={() => {
										navigator.clipboard.writeText(window.location.href);
										alert("Job link copied to clipboard!");
									}}
									className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm cursor-pointer"
								>
									<FaShare />
									<span>Share</span>
								</button>
							</div>
						</div>
					</div>

					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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

									{/* Benefits & Perks Section */}
									<div className="mt-6">
										<h3 className="text-lg font-bold text-slate-800">
											Benefits & Perks
										</h3>
										<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
											{benefits.map((benefit, idx) => (
												<div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
													<div className="h-7 w-7 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0 font-bold text-sm">
														✓
													</div>
													<span className="text-xs font-semibold text-slate-700">{benefit}</span>
												</div>
											))}
										</div>
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

					{similarJobs.length > 0 && (
						<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-3">Similar Opportunities</h3>
							<div className="mt-4 flex flex-col gap-4">
								{similarJobs.map((job) => (
									<div
										key={job.id}
										onClick={() => {
											router.push(`/jobs/${job.id}`);
										}}
										className="group flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/30 hover:bg-slate-50 hover:border-slate-200 transition-all duration-200 cursor-pointer"
									>
										<div className="flex items-center gap-3">
											<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white p-1 shrink-0">
												<img
													src={job.logo}
													alt={job.company}
													className="h-9 w-9 object-contain rounded-md"
													onError={(e) => {
														e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=f1f5f9&color=1d4ed8&bold=true`;
													}}
												/>
											</div>
											<div>
												<h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-200">{job.title}</h4>
												<p className="text-xs text-slate-500 mt-0.5">{job.company} • {job.location}</p>
											</div>
										</div>
										<span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg shrink-0">
											Rp{job.salary}
										</span>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				<div className="col-span-12 flex flex-col gap-5 lg:col-span-4">
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h2 className="text-xl font-semibold font-poppins text-slate-800">
							Apply for this role
						</h2>
						<p className="mt-2 text-sm leading-6 text-gray-500">
							Complete your application before the hiring team closes this
							position. Early applications are usually reviewed first.
						</p>

						<button
							onClick={() => {
								if (!isApplied) {
									setShowApplyModal(true);
								}
							}}
							disabled={isApplied}
							className={`mt-5 w-full rounded-xl px-5 py-2.5 font-semibold transition-all duration-250 shadow-sm cursor-pointer ${
								isApplied
									? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
									: "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
							}`}
						>
							{isApplied ? "Applied" : "Apply Now"}
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

					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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

					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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

					{/* Hiring Process Card */}
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
							Hiring Process
						</h3>
						<div className="mt-5 relative border-l-2 border-slate-100 pl-5 ml-2.5 space-y-6">
							{(jobDetail.hiringProcess || [
								"Resume Review",
								"Technical Test",
								"Interviews",
								"Offer"
							]).map((step, idx) => (
								<div key={idx} className="relative">
									<div className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-blue-600 bg-white" />
									<p className="text-[10px] text-slate-400 font-bold uppercase">Step {idx + 1}</p>
									<h4 className="text-sm font-semibold text-slate-800 mt-0.5">{step}</h4>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{showApplyModal && (
				<div className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
					<div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl animate-fade-in font-poppins">
						<h3 className="text-xl font-bold text-slate-800">Apply for {jobDetail.title}</h3>
						<p className="text-xs text-slate-500 mt-1">at {jobDetail.company}</p>

						<div className="mt-5 space-y-4">
							<div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
								<h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">Review Candidate Details</h4>
								<div className="mt-3 space-y-2.5 text-sm">
									<p className="text-slate-700">
										<span className="font-semibold text-slate-500">Name:</span> {profile.fullname}
									</p>
									<p className="text-slate-700">
										<span className="font-semibold text-slate-500">Email:</span> {profile.email}
									</p>
									<p className="text-slate-700">
										<span className="font-semibold text-slate-500">CV/Resume:</span> {profile.resumeName || "No CV uploaded. You can upload one in the Dashboard."}
									</p>
									<p className="text-slate-700">
										<span className="font-semibold text-slate-500">Portfolio:</span> {profile.portfolioUrl || "No portfolio link provided."}
									</p>
								</div>
							</div>

							<div className="flex items-center gap-2 text-xs text-slate-500">
								<input type="checkbox" id="confirm-check" defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
								<label htmlFor="confirm-check" className="select-none cursor-pointer">I confirm that all details provided are correct and up-to-date.</label>
							</div>
						</div>

						<div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
							<button
								onClick={() => setShowApplyModal(false)}
								className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer"
							>
								Cancel
							</button>
							<button
								onClick={() => {
									applyToJob(jobDetail.id);
									setShowApplyModal(false);
									alert("Application submitted successfully!");
								}}
								className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 shadow-sm transition cursor-pointer"
							>
								Submit Application
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default JobDetail;
