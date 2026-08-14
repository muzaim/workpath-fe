import React, { createContext, useContext, useState, useEffect } from "react";

export type AppliedJobInfo = {
	jobId: number;
	date: string;
	status: "Submitted" | "Interview" | "Offered" | "Rejected";
};

export type CandidateProfile = {
	fullname: string;
	email: string;
	resumeName: string;
	portfolioUrl: string;
};

type CandidateContextType = {
	savedJobIds: number[];
	appliedJobs: AppliedJobInfo[];
	recentlyViewedIds: number[];
	profile: CandidateProfile;
	alertKeywords: string[];
	toggleSaveJob: (jobId: number) => void;
	applyToJob: (jobId: number) => void;
	addRecentlyViewed: (jobId: number) => void;
	updateProfile: (profile: Partial<CandidateProfile>) => void;
	addAlertKeyword: (keyword: string) => void;
	removeAlertKeyword: (keyword: string) => void;
};

const CandidateContext = createContext<CandidateContextType | undefined>(undefined);

export const CandidateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [savedJobIds, setSavedJobIds] = useState<number[]>([]);
	const [appliedJobs, setAppliedJobs] = useState<AppliedJobInfo[]>([]);
	const [recentlyViewedIds, setRecentlyViewedIds] = useState<number[]>([]);
	const [profile, setProfile] = useState<CandidateProfile>({
		fullname: "Guest User",
		email: "user@workpath.com",
		resumeName: "",
		portfolioUrl: "",
	});
	const [alertKeywords, setAlertKeywords] = useState<string[]>(["Frontend", "React"]);

	// Load from localStorage on mount
	useEffect(() => {
		const storedSaved = localStorage.getItem("wp_saved_jobs");
		const storedApplied = localStorage.getItem("wp_applied_jobs");
		const storedViewed = localStorage.getItem("wp_viewed_jobs");
		const storedProfile = localStorage.getItem("wp_profile");
		const storedAlerts = localStorage.getItem("wp_alerts");

		if (storedSaved) setSavedJobIds(JSON.parse(storedSaved));
		if (storedApplied) setAppliedJobs(JSON.parse(storedApplied));
		if (storedViewed) setRecentlyViewedIds(JSON.parse(storedViewed));
		if (storedProfile) setProfile(JSON.parse(storedProfile));
		if (storedAlerts) setAlertKeywords(JSON.parse(storedAlerts));
	}, []);

	const toggleSaveJob = (jobId: number) => {
		setSavedJobIds((prev) => {
			const updated = prev.includes(jobId)
				? prev.filter((id) => id !== jobId)
				: [...prev, jobId];
			localStorage.setItem("wp_saved_jobs", JSON.stringify(updated));
			return updated;
		});
	};

	const applyToJob = (jobId: number) => {
		setAppliedJobs((prev) => {
			if (prev.some((item) => item.jobId === jobId)) return prev;
			const newApply: AppliedJobInfo = {
				jobId,
				date: new Date().toLocaleDateString("id-ID", {
					day: "numeric",
					month: "short",
					year: "numeric",
				}),
				status: "Submitted",
			};
			const updated = [...prev, newApply];
			localStorage.setItem("wp_applied_jobs", JSON.stringify(updated));
			return updated;
		});
	};

	const addRecentlyViewed = (jobId: number) => {
		setRecentlyViewedIds((prev) => {
			const filtered = prev.filter((id) => id !== jobId);
			const updated = [jobId, ...filtered].slice(0, 5); // keep last 5
			localStorage.setItem("wp_viewed_jobs", JSON.stringify(updated));
			return updated;
		});
	};

	const updateProfile = (newProfile: Partial<CandidateProfile>) => {
		setProfile((prev) => {
			const updated = { ...prev, ...newProfile };
			localStorage.setItem("wp_profile", JSON.stringify(updated));
			return updated;
		});
	};

	const addAlertKeyword = (keyword: string) => {
		setAlertKeywords((prev) => {
			if (prev.includes(keyword)) return prev;
			const updated = [...prev, keyword];
			localStorage.setItem("wp_alerts", JSON.stringify(updated));
			return updated;
		});
	};

	const removeAlertKeyword = (keyword: string) => {
		setAlertKeywords((prev) => {
			const updated = prev.filter((k) => k !== keyword);
			localStorage.setItem("wp_alerts", JSON.stringify(updated));
			return updated;
		});
	};

	return (
		<CandidateContext.Provider
			value={{
				savedJobIds,
				appliedJobs,
				recentlyViewedIds,
				profile,
				alertKeywords,
				toggleSaveJob,
				applyToJob,
				addRecentlyViewed,
				updateProfile,
				addAlertKeyword,
				removeAlertKeyword,
			}}
		>
			{children}
		</CandidateContext.Provider>
	);
};

export const useCandidate = () => {
	const context = useContext(CandidateContext);
	if (!context) {
		throw new Error("useCandidate must be used within CandidateProvider");
	}
	return context;
};
