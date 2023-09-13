import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsClock, BsGlobe } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { GoPeople } from "react-icons/go";

import TravelokaIcon from "public/img/icon/trav.png";
import { useRouter } from "next/router";

const fotoSampul =
	"https://radartasikmalaya.tv/wp-content/uploads/2023/07/Sejarah-Singkat-Perusahaan-Traveloka-dan-Perkembangannya.jpg";

const jobNow = [
	{
		id: 1,
		title: "Senior Web Developer",
		createdAt: "10m",
		location: "Full Remote",
		salary: "IDR 10.000.000 - 15.000.000",
	},
	{
		id: 2,
		title: "Penetration tester",
		createdAt: "12m",
		location: "Full Remote",
		salary: "IDR 7.000.000 - 9.000.000",
	},
	{
		id: 3,
		title: "Quality assurance engineer",
		createdAt: "22m",
		location: "Bandung",
		salary: "IDR 10.000.000",
	},
	{
		id: 4,
		title: "human resources",
		createdAt: "47m",
		location: "Jakarta",
		salary: "IDR 12.000.000 - 13.000.000",
	},
	{
		id: 5,
		title: "content creator",
		createdAt: "51m",
		location: "Surabaya",
		salary: "IDR 11.000.000 - 15.000.000",
	},
	{
		id: 6,
		title: "backend developer (golang)",
		createdAt: "2h",
		location: "Nganjuk",
		salary: "IDR 7.000.000",
	},
];

const photos = [
	{
		id: 1,
		src: "https://cdn.techinasia.com/data/images/PD1Iot306apnFQNwBdyirIZ54xpPJZWxcmC9j2yO.jpeg",
	},
	{
		id: 2,
		src: "https://cdn.techinasia.com/data/images/6wH9LEG8cufL8s7ddFXfiCVtotqNLEN2UdEWJJvg.jpeg",
	},
	{
		id: 3,
		src: "https://cdn.techinasia.com/data/images/PO9CyFaWXstkLXy0rTZLE4rwrMa8VFihdCOYZ9t6.jpeg",
	},
	{
		id: 4,
		src: "https://cdn.techinasia.com/data/images/AFwBey3En6Ugtv3LlH3S5Noul1AYhkblrWQs4AJY.jpeg",
	},
	{
		id: 5,
		src: "https://cdn.techinasia.com/data/images/Z9YIRpKYBRfkPpiMsUfsHvBilPiFCjRWYj0Gj9Bc.jpeg",
	},
	{
		id: 6,
		src: "https://cdn.techinasia.com/data/images/qBytXB7wGVLDrvUpSeukYcKnT1pP3AooV6i1bmUb.jpeg",
	},
];

const DetailCompany = () => {
	const Router = useRouter();

	return (
		<div className="px-4 container mx-auto py-10 flex flex-col gap-5 justify-center items-center pt-24">
			{/* INTRO */}
			<img
				src={fotoSampul}
				alt=""
				className="w-full h-[25rem] object-cover hidden lg:block "
			/>
			<div className="flex flex-col  gap-3 justify-start items-start shadow-lg py-5 px-2 rounded-xl lg:w-3/4 lg:-mt-[10rem] bg-white">
				<div className="grid grid-cols-12  w-full border-b border-gray-200">
					<div className="col-span-8 lg:order-2 lg:pb-5">
						<h1 className="text-3xl font-bold font-poppins mb-2">
							Traveloka Ind.
						</h1>
						<p className="text-gray-500 mb-3 -mt-2 hidden lg:block">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Modi, ducimus.
						</p>
						<div className="flex flex-col gap-3 justify-start items-start lg:flex-row">
							<div className="flex flex-col gap-2">
								<div className="flex  gap-2 justify-start items-center">
									<CiLocationOn />
									<h1 className="text-sm  font-poppins">
										Jakarta Pusat
									</h1>
								</div>
								<div className="flex gap-2 justify-start items-center">
									<BsGlobe />
									<Link
										href={"https://glints.com/id"}
										className="text-md  text-blue-500 font-poppins"
									>
										https://glints.com/id
									</Link>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<div className="flex  gap-2 justify-start items-center">
									<TbBuildingSkyscraper />
									<h1 className="text-md  font-poppins">
										Legal Service
									</h1>
								</div>
								<div className="flex gap-2 justify-start items-center">
									<GoPeople />
									<h1 className="text-md  font-poppins">
										51 - 200 Karyawan
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-4 flex items-center justify-center lg:order-1 ">
						<Image
							src={TravelokaIcon}
							alt=""
							width="0"
							height="0"
							className="w-20 h-20 lg:w-32 lg:h-32"
						/>
					</div>
				</div>

				<div className="flex justify-end flex-col items-center gap-5 lg:flex-row lg:pt-3 lg:px-4 w-full">
					<div className="lg:hidden">
						<p className="text-start text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Reprehenderit voluptatem natus necessitatibus
							facere corrupti asperiores hic accusantium aut,
							debitis enim.
						</p>
						<p className="text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Laborum culpa.
						</p>
					</div>
					<div className="flex gap-2 items-center">
						<FiBookmark className="text-xl" />
						<span className="text-lg font-bold">Mark</span>
					</div>

					<button className="rounded-lg py-3 px-8 bg-blue-600 shadow-lg text-white font-semibold ">
						See all opportunity
					</button>
				</div>
			</div>
			{/* BAWAH */}
			<div className="grid grid-cols-12 gap-5">
				<div className="col-span-12 md:col-span-9">
					{/* JOB */}
					<div className="w-full h-max shadow-xl rounded-xl">
						<h1 className="px-9 py-5 font-bold border-b border-gray-200 text-lg">
							6 Jobs available
						</h1>
						<ul className="px-4">
							{jobNow.map((item) => (
								<li
									key={item.id}
									className="p-5 border-b border-gray-200"
								>
									<div className="flex justify-between items-center">
										<h1 className="text-blue-700 font-poppins text-lg capitalize cursor-pointer">
											{item.title}
										</h1>
										<span className="text-gray-400 text-sm flex items-center gap-1">
											<BsClock className="text-sm" />
											{item.createdAt}
										</span>
									</div>
									<h1 className="text-gray-400  text-sm font-poppins">
										{item.location}
									</h1>
									<h1 className="text-blue-400   font-poppins text-sm">
										{item.salary}
									</h1>
								</li>
							))}
						</ul>
						<h1 className="px-9 py-5 font-semibold border-b border-gray-200 text-lg  flex items-center justify-end gap-2">
							More <AiOutlineArrowDown />
						</h1>
					</div>
					{/* CULTURE */}
					<div className="w-full h-max shadow-xl rounded-xl">
						<h1 className="px-9 py-5 font-bold border-b border-gray-200 text-lg">
							Culture
						</h1>
						<div className="p-8 flex flex-col gap-3  font-poppins">
							<div>
								<h1 className="font-bold text-md ">
									What’s it like working at SIGMATECH?
								</h1>
								<div className="flex flex-col gap-2 mt-2">
									<p className="text-gray-500 text-sm">
										SIGMATECH is collaborative, progressive,
										energetic, innovative and open.
									</p>
									<p className="text-gray-500 text-sm">
										SIGMATECH has established itself as the
										trusted partner for use in
										mission-critical applications and
										service clientele from SME to 500
										Fortune company.
									</p>
								</div>
							</div>
							<div>
								<h1 className="font-bold text-md ">
									Benefits and perks of working with us
									include:
								</h1>
								<div className="flex flex-col gap-1 mt-1">
									<h1 className="text-sm">
										Compensation :{" "}
										<span className="text-gray-500">
											Competitive salaries
										</span>
									</h1>
									<h1 className="text-sm">
										Lifestyle :{" "}
										<span className="text-gray-500">
											Casual dresscode
										</span>
									</h1>
									<h1 className="text-sm">
										Progression :
										<span className="text-gray-500">
											Professional development (Webinars &
											Prime Class)
										</span>
									</h1>
									<h1 className="text-sm">
										Welfire :
										<span className="text-gray-500">
											BPJS, Private Insurance, Transport
											Allowance
										</span>
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* PHOTO */}
				<div className="col-span-12 md:col-span-3 w-full h-max shadow-xl rounded-xl">
					<h1 className="px-9 py-5 font-bold border-b border-gray-200 text-lg">
						Gallery
					</h1>
					<div className="p-4 grid grid-cols-12 gap-3 lg:p-8 lg:gap-5">
						{photos.map((item) => (
							<div
								key={item.id}
								className="col-span-6 sm:col-span-4 md:col-span-12"
							>
								<img
									src={item.src}
									alt=""
									className="w-full hover:scale-110 transition-all duration-300 ease-in-out rounded-lg"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailCompany;
