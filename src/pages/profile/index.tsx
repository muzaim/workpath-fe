import { useSession } from "next-auth/react";
import React from "react";

const ProfilePage = () => {
	const { data }: any = useSession();

	return (
		<div className="container mx-auto">Profile {data?.user?.fullname}</div>
	);
};

export default ProfilePage;
