import { StaticImageData } from "next/image";

import Alibaba from "public/img/icon/alibaba2.jpeg";
import AirBnb from "public/img/icon/zzz.jpeg";
import Facebook from "public/img/icon/unnamed.png";
import Goto from "public/img/icon/976805306.webp";
import GrabLogo from "public/img/icon/grab2.jpeg";
import Netflix from "public/img/icon/Netflix-Symbol.png";
import Shopee from "public/img/icon/shopee_logo.jpeg";
import TravelokaIcon from "public/img/icon/trav.png";

export type JobItem = {
	id: number;
	logo: StaticImageData;
	title: string;
	company: string;
	location: string;
	type: string;
	category: string;
	level: string;
	posting: string;
	featured: boolean;
	applied: number;
	capacity: number;
	salary: string;
	education: string;
	experience: string;
	workSetup: string;
	about: string;
	description: string[];
	qualifications: string[];
	requirements: string[];
	skills: string[];
	companyOverview: string;
	industry: string;
	companySize: string;
};

const logos = [
	TravelokaIcon,
	AirBnb,
	Facebook,
	GrabLogo,
	Netflix,
	Alibaba,
	Goto,
	Shopee,
];

const companies = [
	"Traveloka",
	"Airbnb",
	"Meta",
	"Grab",
	"Netflix",
	"Alibaba Cloud",
	"GoTo",
	"Shopee",
];

const titles = [
	"Frontend Developer",
	"Backend Engineer",
	"UI/UX Designer",
	"Product Designer",
	"DevOps Specialist",
	"Data Analyst",
	"HR Manager",
	"Social Media Assistant",
	"Account Executive",
	"QA Engineer",
];

const locations = [
	"Jakarta",
	"Yogyakarta",
	"Surabaya",
	"Bandung",
	"Jakarta Selatan",
	"Singapore",
	"Kuala Lumpur",
	"Remote",
];

const types = ["Full Time", "Freelance", "Contract", "Part Time", "Remote"];
const categories = [
	"Engineering",
	"Design",
	"Marketing",
	"Technology",
	"Finance",
	"Operations",
	"Human Resources",
	"Product",
];
const postings = [
	"Today",
	"1 day ago",
	"2 days ago",
	"3 days ago",
	"4 days ago",
	"5 days ago",
	"1 week ago",
];

const levels = ["Entry Level", "Mid Level", "Senior Level", "Lead Level"];

const salaryRanges = [
	"6.000.000 - 8.000.000",
	"8.000.000 - 12.000.000",
	"10.000.000 - 15.000.000",
	"12.000.000 - 18.000.000",
	"15.000.000 - 20.000.000",
	"18.000.000 - 25.000.000",
];

const skillsByCategory: Record<string, string[]> = {
	Engineering: ["React JS", "Node JS", "TypeScript", "REST API", "Git"],
	Design: ["Figma", "Design System", "Wireframing", "Prototyping", "UI Audit"],
	Marketing: ["Campaign Planning", "Copywriting", "Meta Ads", "Analytics", "SEO"],
	Technology: ["AWS Cloud", "CI/CD", "Linux", "Docker", "Monitoring"],
	Finance: ["Financial Reporting", "Excel", "Budgeting", "Forecasting", "Analysis"],
	Operations: ["Project Management", "Documentation", "Dashboard", "Coordination", "Reporting"],
	"Human Resources": ["Recruitment", "Interviewing", "People Ops", "HRIS", "Communication"],
	Product: ["Roadmap", "User Research", "PRD", "Prioritization", "Stakeholder Mgmt"],
};

const getDeterministicWeight = (job: JobItem) => {
	return (job.id * 37 + job.company.length * 17 + job.title.length * 13) % 97;
};

const baseJobs: JobItem[] = Array.from({ length: 50 }, (_, index) => {
	const id = index + 1;
	const company = companies[index % companies.length];
	const category = categories[index % categories.length];
	const title = titles[index % titles.length];
	const location = locations[index % locations.length];
	const type = types[index % types.length];
	const posting = postings[index % postings.length];
	const salary = salaryRanges[index % salaryRanges.length];
	const applicants = (index % 18) + 2;
	const capacity = applicants + 8 + (index % 10);

	return {
		id,
		logo: logos[index % logos.length],
		title,
		company,
		location,
		type,
		category,
		level: levels[index % levels.length],
		posting,
		featured: index % 6 === 0 || index % 9 === 0,
		applied: applicants,
		capacity,
		salary,
		education: index % 3 === 0 ? "Bachelor Degree" : "Diploma / Bachelor Degree",
		experience: `${(index % 4) + 1} - ${(index % 4) + 3} years`,
		workSetup: location === "Remote" ? "Remote" : index % 2 === 0 ? "Hybrid" : "Onsite",
		about: `${company} is hiring a ${title.toLowerCase()} to help strengthen cross-functional execution and deliver better product experiences for users across the region.`,
		description: [
			`You will work closely with internal teams to deliver high-quality outcomes in the ${category.toLowerCase()} domain and improve day-to-day execution.`,
			`This role is suitable for candidates who enjoy collaboration, ownership, and building reliable workflows in a fast-moving environment.`,
		],
		qualifications: [
			`Minimum ${Math.max(1, index % 5)} years of relevant experience in ${category.toLowerCase()}.`,
			"Strong communication skills and ability to work with cross-functional stakeholders.",
			"Comfortable working with modern tools, reporting, and performance-oriented processes.",
			"Detail-oriented mindset with strong problem-solving ability.",
		],
		requirements: [
			`Experience as a ${title.toLowerCase()} or in a closely related role.`,
			"Ability to manage priorities and maintain quality in a fast-paced environment.",
			"Good understanding of team workflows, documentation, and execution standards.",
			"Available to follow the company work setup and business hours.",
		],
		skills: skillsByCategory[category],
		companyOverview: `${company} is a growing regional company focused on building dependable digital products and services for millions of users.`,
		industry: category === "Finance" ? "Financial Services" : "Technology",
		companySize: index % 2 === 0 ? "500 - 1,000 employees" : "1,000+ employees",
	};
});

export const allJobs: JobItem[] = [...baseJobs].sort((firstJob, secondJob) => {
	return getDeterministicWeight(firstJob) - getDeterministicWeight(secondJob);
});

export const getJobById = (id: number) => allJobs.find((job) => job.id === id);
