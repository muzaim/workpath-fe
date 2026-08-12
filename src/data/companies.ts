type CompanyOpening = {
	id: number;
	title: string;
	createdAt: string;
	location: string;
	salary: string;
};

export type CompanyItem = {
	id: number;
	logo: string;
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

export const allCompanies: CompanyItem[] = [
	{
		id: 1,
		logo: "https://zonalogo.com/assets/logo-gojek.webp",
		company: "GoTo",
		tagline: "Powering commerce, mobility, and financial access.",
		desc: "GoTo is the largest technology group in` Indonesia, bringing together Gojek, Tokopedia, and GoTo Financial into a single, unified ecosystem that empowers millions of users, drivers, and merchants daily.",
		job: 3,
		industry: "Ecosystem Platform",
		secondaryIndustry: "Fintech",
		location: "Jakarta",
		website: "https://www.gotocompany.com",
		size: "1,000+ employees",
		workplace: "Hybrid",
		cover: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
		overview: [
			"GoTo operates with a fast-moving, collaborative culture where teams are encouraged to solve meaningful problems and ship work that directly impacts customers across Southeast Asia.",
			"People here usually thrive when they enjoy clear ownership, open communication, and working closely with cross-functional teams across product, design, operations, and engineering."
		],
		benefits: [
			"Competitive salary and performance review cycle",
			"Flexible work arrangement based on team needs",
			"Learning budget, workshops, and internal mentoring",
			"Health coverage and transport allowance"
		],
		openings: [
			{ id: 1, title: "Frontend Developer", createdAt: "10m", location: "Jakarta", salary: "IDR 12.000.000 - 18.000.000" },
			{ id: 2, title: "QA Engineer", createdAt: "1d", location: "Bandung", salary: "IDR 8.000.000 - 12.000.000" },
			{ id: 3, title: "Mobile Engineer (Android/iOS)", createdAt: "2h", location: "Jakarta", salary: "IDR 14.000.000 - 20.000.000" }
		],
		gallery: [
			"https://cdn.techinasia.com/data/images/PD1Iot306apnFQNwBdyirIZ54xpPJZWxcmC9j2yO.jpeg",
			"https://cdn.techinasia.com/data/images/6wH9LEG8cufL8s7ddFXfiCVtotqNLEN2UdEWJJvg.jpeg",
			"https://cdn.techinasia.com/data/images/PO9CyFaWXstkLXy0rTZLE4rwrMa8VFihdCOYZ9t6.jpeg"
		]
	},
	{
		id: 2,
		logo: "https://cdn.brandfetch.io/domain/traveloka.com/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed",
		company: "Traveloka",
		tagline: "Travel and lifestyle platform for Southeast Asia.",
		desc: "Traveloka is Southeast Asia's leading travel and lifestyle platform, providing a seamless experience for users to discover and purchase a wide range of travel, local activities, and financial services products.",
		job: 3,
		industry: "Travel Technology",
		secondaryIndustry: "Consumer Tech",
		location: "Jakarta Pusat",
		website: "https://www.traveloka.com",
		size: "1,000+ employees",
		workplace: "Hybrid",
		cover: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
		overview: [
			"Traveloka is a technology company based in Jakarta, Indonesia. Founded in 2012 by ex-Silicon Valley engineers, we are now one of the most prominent tech startups in the region.",
			"We believe in a culture of high performance and empathy, where engineers and product teams collaborate to simplify complex travel needs for global tourists."
		],
		benefits: [
			"Competitive compensation package",
			"Hybrid working space in Jakarta and Tangerang",
			"Medical insurance and wellness programs",
			"Professional certification sponsorship"
		],
		openings: [
			{ id: 1, title: "UI/UX Designer", createdAt: "1d", location: "Jakarta", salary: "IDR 10.000.000 - 15.000.000" },
			{ id: 2, title: "Account Executive", createdAt: "3d", location: "Yogyakarta", salary: "IDR 6.000.000 - 8.000.000" },
			{ id: 3, title: "Growth Marketing Lead", createdAt: "5h", location: "Jakarta", salary: "IDR 24.000.000 - 36.000.000" }
		],
		gallery: [
			"https://cdn.techinasia.com/data/images/AFwBey3En6Ugtv3LlH3S5Noul1AYhkblrWQs4AJY.jpeg",
			"https://cdn.techinasia.com/data/images/Z9YIRpKYBRfkPpiMsUfsHvBilPiFCjRWYj0Gj9Bc.jpeg",
			"https://cdn.techinasia.com/data/images/qBytXB7wGVLDrvUpSeukYcKnT1pP3AooV6i1bmUb.jpeg"
		]
	},
	{
		id: 3,
		logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg",
		company: "Shopee",
		tagline: "Reimagining commerce and seller growth in the region.",
		desc: "Shopee is the leading e-commerce platform in Southeast Asia and Taiwan. It is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support.",
		job: 3,
		industry: "E-commerce",
		secondaryIndustry: "Marketplace",
		location: "Jakarta",
		website: "https://shopee.co.id",
		size: "1,000+ employees",
		workplace: "Onsite",
		cover: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=80",
		overview: [
			"At Shopee, we are dedicated to building a platform that connects digital sellers with consumers. We value execution, scale, and customer-first operations.",
			"Working here exposes you to highly concurrent transaction scales and logistically demanding fulfillment scenarios that require highly performant distributed software systems."
		],
		benefits: [
			"Dynamic and high-growth environment",
			"Comprehensive health insurance and meal allowances",
			"Structured onboarding and continuous training courses",
			"Regular employee gathering and interactive team events"
		],
		openings: [
			{ id: 1, title: "Backend Engineer", createdAt: "10m", location: "Jakarta", salary: "IDR 18.000.000 - 25.000.000" },
			{ id: 2, title: "Lead Product Manager", createdAt: "1h", location: "Jakarta", salary: "IDR 32.000.000 - 48.000.000" },
			{ id: 3, title: "Operations Coordinator", createdAt: "45m", location: "Surabaya", salary: "IDR 6.500.000 - 9.000.000" }
		],
		gallery: [
			"https://cdn.techinasia.com/data/images/PD1Iot306apnFQNwBdyirIZ54xpPJZWxcmC9j2yO.jpeg",
			"https://cdn.techinasia.com/data/images/AFwBey3En6Ugtv3LlH3S5Noul1AYhkblrWQs4AJY.jpeg",
			"https://cdn.techinasia.com/data/images/Z9YIRpKYBRfkPpiMsUfsHvBilPiFCjRWYj0Gj9Bc.jpeg"
		]
	},
	{
		id: 4,
		logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOE-TWGU3QDcmhbJdrNiMoSE2ljivPju5GHVBRfs4Jag5dw5RJq0_JCg&s=10",
		company: "Alibaba Cloud",
		tagline: "Helping businesses scale with cloud infrastructure.",
		desc: "Alibaba Cloud offers a suite of cloud computing services including elastic computing, database, storage, security, and management. It provides powerful computing infrastructures for tech ecosystems worldwide.",
		job: 2,
		industry: "Cloud Computing",
		secondaryIndustry: "Infrastructure",
		location: "Jakarta",
		website: "https://www.alibabacloud.com",
		size: "1,000+ employees",
		workplace: "Onsite",
		cover: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
		overview: [
			"Alibaba Cloud provides state-of-the-art enterprise cloud hosting to modern companies. Our teams in Jakarta lead deployment, migration, and local cloud compliance operations.",
			"If you enjoy deep systems architecture, Kubernetes clustering, network security, and infrastructure automation, our team offers the perfect playground."
		],
		benefits: [
			"Competitive compensation packages with performance bonuses",
			"Onsite cloud research labs and hardware testing suites",
			"Fully covered health and dental programs",
			"Mentoring from global senior cloud architects"
		],
		openings: [
			{ id: 1, title: "DevOps Specialist", createdAt: "2d", location: "Jakarta", salary: "IDR 20.000.000 - 28.000.000" },
			{ id: 2, title: "Financial Analyst", createdAt: "5h", location: "Jakarta", salary: "IDR 11.000.000 - 16.000.000" }
		],
		gallery: [
			"https://cdn.techinasia.com/data/images/6wH9LEG8cufL8s7ddFXfiCVtotqNLEN2UdEWJJvg.jpeg",
			"https://cdn.techinasia.com/data/images/PO9CyFaWXstkLXy0rTZLE4rwrMa8VFihdCOYZ9t6.jpeg",
			"https://cdn.techinasia.com/data/images/qBytXB7wGVLDrvUpSeukYcKnT1pP3AooV6i1bmUb.jpeg"
		]
	},
	{
		id: 5,
		logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
		company: "Airbnb",
		tagline: "Designing how people belong anywhere in the world.",
		desc: "Airbnb operates an online marketplace focused on short-term homestays and tourism experiences. It is driven by design-first methodologies that focus on building community trust and worldwide belonging.",
		job: 2,
		industry: "Hospitality Tech",
		secondaryIndustry: "Marketplace",
		location: "Remote Friendly",
		website: "https://www.airbnb.com",
		size: "1,000+ employees",
		workplace: "Remote Friendly",
		cover: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
		overview: [
			"Airbnb's culture is rooted in deep design values, active collaboration, and visual product storytelling. We run a fully remote-friendly global organization.",
			"We encourage our engineers, writers, and designers to think creatively, respect qualitative user feedback, and develop accessible products."
		],
		benefits: [
			"Fully remote work options with flexible scheduling",
			"Travel credit to stay at Airbnb homes worldwide",
			"Learning budget for conferences and design books",
			"Generous wellness and ergonomic workspace stipends"
		],
		openings: [
			{ id: 1, title: "Product Designer", createdAt: "12m", location: "Remote", salary: "IDR 25.000.000 - 35.000.000" },
			{ id: 2, title: "SEO Content Strategist", createdAt: "4d", location: "Remote", salary: "IDR 10.000.000 - 14.000.000" }
		],
		gallery: [
			"https://cdn.techinasia.com/data/images/AFwBey3En6Ugtv3LlH3S5Noul1AYhkblrWQs4AJY.jpeg",
			"https://cdn.techinasia.com/data/images/Z9YIRpKYBRfkPpiMsUfsHvBilPiFCjRWYj0Gj9Bc.jpeg",
			"https://cdn.techinasia.com/data/images/PO9CyFaWXstkLXy0rTZLE4rwrMa8VFihdCOYZ9t6.jpeg"
		]
	},
	{
		id: 6,
		logo: "https://images.seeklogo.com/logo-png/33/1/grab-logo-png_seeklogo-332942.png",
		company: "Grab",
		tagline: "Delivering everyday services across Southeast Asia.",
		desc: "Grab is Southeast Asia's leading superapp. We provide vital everyday services such as ride-hailing, food deliveries, package logistics, and digital mobile payment solutions to millions across the region.",
		job: 3,
		industry: "Super App",
		secondaryIndustry: "Logistics",
		location: "Jakarta Selatan",
		website: "https://www.grab.com",
		size: "1,000+ employees",
		workplace: "Hybrid",
		cover: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=80",
		overview: [
			"Grab operates with the 4H principle: Heart, Honor, Humility, and Hunger. We collaborate as one team to solve pressing transport and digital transaction challenges.",
			"Engineers and analysts here analyze massive location and transaction metrics to dynamic route couriers and optimize driver dispatch systems."
		],
		benefits: [
			"Flexible hybrid work environment",
			"Comprehensive family medical coverage",
			"Grab transport and delivery credits",
			"Internal promotion tracks and continuous learning classes"
		],
		openings: [
			{ id: 1, title: "Data Analyst", createdAt: "1d", location: "Singapore", salary: "IDR 15.000.000 - 22.000.000" },
			{ id: 2, title: "Senior Frontend Developer", createdAt: "30m", location: "Jakarta Selatan", salary: "IDR 20.000.000 - 28.000.000" },
			{ id: 3, title: "Talent Acquisition Specialist", createdAt: "2h", location: "Jakarta", salary: "IDR 9.000.000 - 13.000.000" }
		],
		gallery: [
			"https://cdn.techinasia.com/data/images/6wH9LEG8cufL8s7ddFXfiCVtotqNLEN2UdEWJJvg.jpeg",
			"https://cdn.techinasia.com/data/images/Z9YIRpKYBRfkPpiMsUfsHvBilPiFCjRWYj0Gj9Bc.jpeg",
			"https://cdn.techinasia.com/data/images/qBytXB7wGVLDrvUpSeukYcKnT1pP3AooV6i1bmUb.jpeg"
		]
	},
	{
		id: 7,
		logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
		company: "Netflix",
		tagline: "Creating world-class entertainment experiences online.",
		desc: "Netflix is the world's leading streaming entertainment service with paid memberships in over 190 countries, enjoying TV series, documentaries, and feature films across a wide variety of genres and languages.",
		job: 2,
		industry: "Entertainment",
		secondaryIndustry: "Streaming",
		location: "Remote",
		website: "https://www.netflix.com",
		size: "1,000+ employees",
		workplace: "Remote",
		cover: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
		overview: [
			"Netflix operates under a unique freedom and responsibility corporate culture. We focus on hiring self-motivated individuals who thrive under low oversight.",
			"Working here is about delivering the highest quality user experiences, streaming algorithms, and regionalized video delivery infrastructure."
		],
		benefits: [
			"Fully remote workspace options",
			"Unlimited vacation policy based on performance reviews",
			"Generous stock option purchase programs",
			"Top-tier health, wellness, and parenting support packages"
		],
		openings: [
			{ id: 1, title: "HR Manager", createdAt: "1h", location: "Remote", salary: "IDR 30.000.000 - 45.000.000" },
			{ id: 2, title: "Site Reliability Engineer", createdAt: "45m", location: "Remote", salary: "IDR 28.000.000 - 40.000.000" }
		],
		gallery: [
			"https://cdn.techinasia.com/data/images/PD1Iot306apnFQNwBdyirIZ54xpPJZWxcmC9j2yO.jpeg",
			"https://cdn.techinasia.com/data/images/AFwBey3En6Ugtv3LlH3S5Noul1AYhkblrWQs4AJY.jpeg",
			"https://cdn.techinasia.com/data/images/PO9CyFaWXstkLXy0rTZLE4rwrMa8VFihdCOYZ9t6.jpeg"
		]
	},
	{
		id: 8,
		logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
		company: "Meta",
		tagline: "Building products that help people connect at scale.",
		desc: "Meta builds technologies that help people connect, find communities, and grow businesses. When Facebook launched in 2004, it changed the way people connect. Apps like Messenger, Instagram and WhatsApp further empowered billions around the world.",
		job: 2,
		industry: "Social Technology",
		secondaryIndustry: "Advertising",
		location: "Singapore",
		website: "https://about.meta.com",
		size: "1,000+ employees",
		workplace: "Hybrid",
		cover: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
		overview: [
			"At Meta, we are focused on designing the metaverse, interactive community systems, and efficient advertising metrics. We believe in moving fast and taking risks.",
			"Our teams in Singapore manage regional merchant advertising tools, user data metrics, and creator relationship platforms."
		],
		benefits: [
			"Market-leading salary structures",
			"Modern tech workspace hubs with free catering services",
			"Health, vision, and mental wellness coverage plans",
			"Sabbatical leaves and corporate wellness allowances"
		],
		openings: [
			{ id: 1, title: "Social Media Specialist", createdAt: "4h", location: "Singapore", salary: "IDR 7.000.000 - 10.000.000" },
			{ id: 2, title: "Interaction Designer", createdAt: "5d", location: "Remote", salary: "IDR 12.000.000 - 18.000.000" }
		],
		gallery: [
			"https://cdn.techinasia.com/data/images/PO9CyFaWXstkLXy0rTZLE4rwrMa8VFihdCOYZ9t6.jpeg",
			"https://cdn.techinasia.com/data/images/Z9YIRpKYBRfkPpiMsUfsHvBilPiFCjRWYj0Gj9Bc.jpeg",
			"https://cdn.techinasia.com/data/images/qBytXB7wGVLDrvUpSeukYcKnT1pP3AooV6i1bmUb.jpeg"
		]
	}
];

export const getCompanyById = (id: number) =>
	allCompanies.find((company) => company.id === id);
