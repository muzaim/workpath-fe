import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
	BsBookmark,
	BsBookmarkFill,
	BsBriefcase,
	BsCheckCircle,
	BsClock,
	BsCloudUpload,
	BsEnvelope,
	BsFileEarmarkText,
	BsGlobe,
	BsLink45Deg,
	BsPerson,
	BsTrash,
} from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { allJobs } from "@/data/jobs";
import { useCandidate } from "@/lib/CandidateContext";

const DashboardPage = () => {
	const router = useRouter();
	const {
		savedJobIds,
		appliedJobs,
		profile,
		updateProfile,
		toggleSaveJob,
	} = useCandidate();

	const [fullName, setFullName] = useState(profile.fullname);
	const [email, setEmail] = useState(profile.email);
	const [portfolio, setPortfolio] = useState(profile.portfolioUrl);
	const [resumeName, setResumeName] = useState(profile.resumeName);
	const [isSaving, setIsSaving] = useState(false);

	// Get full details of saved jobs
	const savedJobs = allJobs.filter((job) => savedJobIds.includes(job.id));
	// Get full details of applied jobs
	const appliedJobsDetail = appliedJobs.map((app) => {
		const job = allJobs.find((j) => j.id === app.jobId) || allJobs[0];
		return {
			...app,
			job,
		};
	});

	// Calculate profile completion
	let completion = 25; // default for fullname + email
	if (fullName && fullName !== "Guest User") completion += 25;
	if (resumeName) completion += 25;
	if (portfolio) completion += 25;

	const handleSaveProfile = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSaving(true);
		setTimeout(() => {
			updateProfile({
				fullname: fullName,
				email,
				portfolioUrl: portfolio,
				resumeName,
			});
			setIsSaving(false);
			alert("Profile updated successfully!");
		}, 600);
	};

	const handleMockResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setResumeName(file.name);
		}
	};

	return (
		<div className="min-h-screen bg-slate-50/50 pt-24 pb-16 font-poppins">
			<div className="container mx-auto px-4 lg:px-0">
				{/* Top Welcome */}
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
					<div>
						<h1 className="text-2xl font-bold tracking-tight text-slate-800 lg:text-3xl">
							Welcome back, {profile.fullname}
						</h1>
						<p className="text-sm text-slate-500 mt-1">
							Here&apos;s a summary of your career search progress and applications.
						</p>
					</div>
					<div className="flex items-center gap-3">
						<Link
							href="/jobs"
							className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 shadow-sm"
						>
							Explore New Jobs
						</Link>
					</div>
				</div>

				{/* Stat Cards Row */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex items-center justify-between">
						<div>
							<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Jobs Applied</p>
							<h3 className="text-3xl font-extrabold text-slate-800 mt-2">{appliedJobs.length}</h3>
							<p className="text-xs text-slate-500 mt-1">Active submissions</p>
						</div>
						<div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
							<BsBriefcase />
						</div>
					</div>

					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex items-center justify-between">
						<div>
							<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Saved Roles</p>
							<h3 className="text-3xl font-extrabold text-slate-800 mt-2">{savedJobs.length}</h3>
							<p className="text-xs text-slate-500 mt-1">Bookmarked opportunities</p>
						</div>
						<div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
							<BsBookmarkFill />
						</div>
					</div>

					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex items-center justify-between">
						<div>
							<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Profile Status</p>
							<h3 className="text-3xl font-extrabold text-slate-800 mt-2">{completion}%</h3>
							<div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
								<div
									className="bg-blue-600 h-full transition-all duration-300"
									style={{ width: `${completion}%` }}
								/>
							</div>
						</div>
						<div className="h-12 w-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-xl">
							<BsCheckCircle />
						</div>
					</div>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-12 gap-6">
					{/* Left: Profile Edit and Schedule */}
					<div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
						{/* Profile Card */}
						<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
								<BsPerson className="text-blue-600" /> Complete Your Profile
							</h2>
							<form className="mt-5 space-y-4" onSubmit={handleSaveProfile}>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
											Full Name
										</label>
										<input
											type="text"
											value={fullName}
											onChange={(e) => setFullName(e.target.value)}
											className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition"
											required
										/>
									</div>
									<div>
										<label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
											Email Address
										</label>
										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition"
											required
										/>
									</div>
								</div>

								<div>
									<label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
										Portfolio Link
									</label>
									<div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition">
										<BsGlobe className="text-slate-400 shrink-0" />
										<input
											type="url"
											value={portfolio}
											onChange={(e) => setPortfolio(e.target.value)}
											placeholder="https://myportfolio.com"
											className="w-full bg-transparent text-sm text-slate-900 outline-none"
										/>
									</div>
								</div>

								{/* File Upload mock */}
								<div>
									<label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
										CV / Resume Document
									</label>
									<div className="flex items-center justify-between border border-slate-200 border-dashed rounded-xl p-4 bg-slate-50/50 hover:bg-slate-50 transition">
										<div className="flex items-center gap-3">
											<BsFileEarmarkText className="text-slate-400 text-2xl" />
											<div className="text-left">
												<p className="text-sm font-semibold text-slate-700">
													{resumeName || "No file uploaded"}
												</p>
												<p className="text-[11px] text-slate-400">PDF, DOCX up to 5MB</p>
											</div>
										</div>
										<label className="rounded-lg bg-white border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-600 cursor-pointer hover:bg-slate-50 flex items-center gap-1.5 shadow-sm transition">
											<BsCloudUpload /> Upload
											<input
												type="file"
												accept=".pdf,.doc,.docx"
												onChange={handleMockResumeUpload}
												className="hidden"
											/>
										</label>
									</div>
								</div>

								<button
									type="submit"
									disabled={isSaving}
									className="w-full md:w-auto px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition"
								>
									{isSaving ? "Saving..." : "Save Changes"}
								</button>
							</form>
						</div>

						{/* Interview Schedule */}
						<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
								<AiOutlineCalendar className="text-blue-600 text-lg" /> Interview Schedule
							</h2>
							<div className="mt-4 flex flex-col gap-4">
								{appliedJobs.some((a) => a.status === "Interview") ? (
									appliedJobsDetail
										.filter((a) => a.status === "Interview")
										.map((app) => (
											<div
												key={app.jobId}
												className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-blue-50/20"
											>
												<div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 shrink-0 text-lg">
													<BsClock />
												</div>
												<div>
													<h4 className="text-sm font-bold text-slate-800">
														Technical Interview - {app.job.company}
													</h4>
													<p className="text-xs text-slate-500 mt-1">
														Role: {app.job.title} ({app.job.workSetup})
													</p>
													<p className="text-xs text-blue-700 font-semibold mt-1">
														Scheduled for: tomorrow, 10:00 AM (Online)
													</p>
												</div>
											</div>
										))
								) : (
									<div className="text-center py-6 text-slate-400 text-sm">
										No interviews scheduled currently. Apply to jobs to trigger interview requests.
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Right: Applied and Saved Jobs */}
					<div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
						{/* Applied Jobs */}
						<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
								Application History ({appliedJobs.length})
							</h2>
							<div className="mt-4 flex flex-col gap-3">
								{appliedJobsDetail.length > 0 ? (
									appliedJobsDetail.map((app) => (
										<div
											key={app.jobId}
											className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
										>
											<div className="flex items-center gap-3">
												<div className="h-10 w-10 rounded-xl border border-slate-200 bg-white p-1 flex items-center justify-center shrink-0">
													<img
														src={app.job.logo}
														alt={app.job.company}
														className="h-8 w-8 object-contain rounded-md"
													/>
												</div>
												<div>
													<h4 className="text-sm font-bold text-slate-800 truncate max-w-[150px]">
														{app.job.title}
													</h4>
													<p className="text-[11px] text-slate-400 mt-0.5">
														{app.job.company} • {app.date}
													</p>
												</div>
											</div>
											<span className="rounded bg-blue-50 text-blue-700 border border-blue-100/50 px-2.5 py-0.5 text-[11px] font-bold">
												{app.status}
											</span>
										</div>
									))
								) : (
									<div className="text-center py-8 text-slate-400 text-sm">
										No applications submitted yet.
									</div>
								)}
							</div>
						</div>

						{/* Saved Jobs */}
						<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
								Saved Jobs ({savedJobs.length})
							</h2>
							<div className="mt-4 flex flex-col gap-3">
								{savedJobs.length > 0 ? (
									savedJobs.map((job) => (
										<div
											key={job.id}
											className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
										>
											<div className="flex items-center gap-3">
												<div className="h-10 w-10 rounded-xl border border-slate-200 bg-white p-1 flex items-center justify-center shrink-0">
													<img
														src={job.logo}
														alt={job.company}
														className="h-8 w-8 object-contain rounded-md"
													/>
												</div>
												<div onClick={() => router.push(`/jobs/${job.id}`)} className="cursor-pointer">
													<h4 className="text-sm font-bold text-slate-800 hover:text-blue-700 transition-colors truncate max-w-[150px]">
														{job.title}
													</h4>
													<p className="text-[11px] text-slate-400 mt-0.5">
														{job.company} • {job.location}
													</p>
												</div>
											</div>
											<button
												onClick={() => toggleSaveJob(job.id)}
												className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
											>
												<BsTrash />
											</button>
										</div>
									))
								) : (
									<div className="text-center py-8 text-slate-400 text-sm">
										No bookmarked jobs.
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
