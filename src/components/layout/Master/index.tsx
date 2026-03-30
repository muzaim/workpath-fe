import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";

type PropsType = {
	children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/login", "/signup", "/404"];
const MasterLayout = (props: PropsType) => {
	const { children } = props;
	const { pathname } = useRouter();
	return (
		<main>
			{!disableNavbar.includes(pathname) && <Navbar />}
			{children}
			{!disableNavbar.includes(pathname) && <Footer />}
		</main>
	);
};

export default MasterLayout;
