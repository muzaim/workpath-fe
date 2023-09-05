import React from "react";

const LoadingBar = ({ progress, total }: any) => {
	const widthPercentage = (progress / total) * 100;

	return (
		<div className="relative w-full h-3 bg-gray-300 mt-3">
			<div
				className="absolute left-0 top-0 h-3 bg-green-400"
				style={{ width: `${widthPercentage}%` }}
			></div>
		</div>
	);
};

export default LoadingBar;
