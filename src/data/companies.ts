import { StaticImageData } from "next/image";

import Alibaba from "public/img/icon/alibaba2.jpeg";
import AirBnb from "public/img/icon/zzz.jpeg";
import Facebook from "public/img/icon/unnamed.png";
import Goto from "public/img/icon/976805306.webp";
import GrabLogo from "public/img/icon/grab2.jpeg";
import Netflix from "public/img/icon/Netflix-Symbol.png";
import Shopee from "public/img/icon/shopee_logo.jpeg";
import TravelokaIcon from "public/img/icon/trav.png";

type CompanyOpening = {
	id: number;
	title: string;
	createdAt: string;
	location: string;
	salary: string;
};

export type CompanyItem = {
	id: number;
	logo: StaticImageData;
	company: string;
	tagline: string;
	desc: string;
	job: number;
	industry: string;
	secondaryIndustry: string;
	location: string;
	website: string;
	size: string;
	workplace: string;
	cover: string;
	overview: string[];
	benefits: string[];
	openings: CompanyOpening[];
	gallery: string[];
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

const companySeeds = [
	{
		company: "Traveloka",
		tagline: "Travel and lifestyle platform for Southeast Asia.",
		industry: "Travel Technology",
		secondaryIndustry: "Consumer Tech",
		location: "Jakarta Pusat",
		website: "https://www.traveloka.com",
		size: "1,000+ employees",
		workplace: "Hybrid",
	},
	{
		company: "Airbnb",
		tagline: "Designing how people belong anywhere in the world.",
		industry: "Hospitality Tech",
		secondaryIndustry: "Marketplace",
		location: "Singapore",
		website: "https://www.airbnb.com",
		size: "1,000+ employees",
		workplace: "Remote Friendly",
	},
	{
		company: "Meta",
		tagline: "Building products that help people connect at scale.",
		industry: "Social Technology",
		secondaryIndustry: "Advertising",
		location: "Singapore",
		website: "https://about.meta.com",
		size: "1,000+ employees",
		workplace: "Hybrid",
	},
	{
		company: "Grab",
		tagline: "Delivering everyday services across Southeast Asia.",
		industry: "Super App",
		secondaryIndustry: "Logistics",
		location: "Jakarta Selatan",
		website: "https://www.grab.com",
		size: "500 - 1,000 employees",
		workplace: "Hybrid",
	},
	{
		company: "Netflix",
		tagline: "Creating world-class entertainment experiences online.",
		industry: "Entertainment",
		secondaryIndustry: "Streaming",
		location: "Remote",
		website: "https://www.netflix.com",
		size: "1,000+ employees",
		workplace: "Remote",
	},
	{
		company: "Alibaba Cloud",
		tagline: "Helping businesses scale with cloud infrastructure.",
		industry: "Cloud Computing",
		secondaryIndustry: "Infrastructure",
		location: "Jakarta",
		website: "https://www.alibabacloud.com",
		size: "1,000+ employees",
		workplace: "Onsite",
	},
	{
		company: "GoTo",
		tagline: "Powering commerce, mobility, and financial access.",
		industry: "Ecosystem Platform",
		secondaryIndustry: "Fintech",
		location: "Jakarta",
		website: "https://www.gotocompany.com",
		size: "1,000+ employees",
		workplace: "Hybrid",
	},
	{
		company: "Shopee",
		tagline: "Reimagining commerce and seller growth in the region.",
		industry: "E-commerce",
		secondaryIndustry: "Marketplace",
		location: "Bandung",
		website: "https://shopee.co.id",
		size: "500 - 1,000 employees",
		workplace: "Hybrid",
	},
];

const roleTitles = [
	"Senior Web Developer",
	"Product Designer",
	"Quality Assurance Engineer",
	"People Operations Specialist",
	"Content Strategist",
	"Backend Developer",
];

const roleTimes = ["10m", "35m", "1h", "2h", "5h", "1d"];
const roleLocations = [
	"Full Remote",
	"Jakarta",
	"Bandung",
	"Yogyakarta",
	"Singapore",
	"Hybrid",
];
const roleSalaries = [
	"IDR 10.000.000 - 15.000.000",
	"IDR 8.000.000 - 12.000.000",
	"IDR 12.000.000 - 18.000.000",
	"IDR 7.000.000 - 10.000.000",
	"IDR 15.000.000 - 22.000.000",
	"IDR 9.000.000 - 13.000.000",
];

const galleryPool = [
	"https://cdn.techinasia.com/data/images/PD1Iot306apnFQNwBdyirIZ54xpPJZWxcmC9j2yO.jpeg",
	"https://cdn.techinasia.com/data/images/6wH9LEG8cufL8s7ddFXfiCVtotqNLEN2UdEWJJvg.jpeg",
	"https://cdn.techinasia.com/data/images/PO9CyFaWXstkLXy0rTZLE4rwrMa8VFihdCOYZ9t6.jpeg",
	"https://cdn.techinasia.com/data/images/AFwBey3En6Ugtv3LlH3S5Noul1AYhkblrWQs4AJY.jpeg",
	"https://cdn.techinasia.com/data/images/Z9YIRpKYBRfkPpiMsUfsHvBilPiFCjRWYj0Gj9Bc.jpeg",
	"https://cdn.techinasia.com/data/images/qBytXB7wGVLDrvUpSeukYcKnT1pP3AooV6i1bmUb.jpeg",
];

const covers = [
	"https://radartasikmalaya.tv/wp-content/uploads/2023/07/Sejarah-Singkat-Perusahaan-Traveloka-dan-Perkembangannya.jpg",
	"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
	"https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=80",
	"https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
];

export const allCompanies: CompanyItem[] = companySeeds.map((seed, index) => ({
	id: index + 1,
	logo: logos[index % logos.length],
	company: seed.company,
	tagline: seed.tagline,
	desc: `${seed.company} is building dependable products for millions of users, with a strong focus on collaboration, speed, and high-quality execution across teams.`,
	job: 4 + (index % 6) * 2,
	industry: seed.industry,
	secondaryIndustry: seed.secondaryIndustry,
	location: seed.location,
	website: seed.website,
	size: seed.size,
	workplace: seed.workplace,
	cover: covers[index % covers.length],
	overview: [
		`${seed.company} operates with a fast-moving, collaborative culture where teams are encouraged to solve meaningful problems and ship work that directly impacts customers.`,
		`People here usually thrive when they enjoy clear ownership, open communication, and working closely with cross-functional teams across product, design, operations, and engineering.`,
	],
	benefits: [
		"Competitive salary and performance review cycle",
		"Flexible work arrangement based on team needs",
		"Learning budget, workshops, and internal mentoring",
		"Health coverage and transport allowance",
	],
	openings: Array.from({ length: 6 }, (_, roleIndex) => ({
		id: roleIndex + 1,
		title: roleTitles[(index + roleIndex) % roleTitles.length],
		createdAt: roleTimes[(index + roleIndex) % roleTimes.length],
		location: roleLocations[(index + roleIndex) % roleLocations.length],
		salary: roleSalaries[(index + roleIndex) % roleSalaries.length],
	})),
	gallery: galleryPool.slice(0, 6),
}));

export const getCompanyById = (id: number) =>
	allCompanies.find((company) => company.id === id);
