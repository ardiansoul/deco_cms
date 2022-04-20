import { useState } from "react";
import { Icon_menu, Icon_user } from "../assets/icons";

const Header = () => {
	const [showNavigation, setShowNavigation] = useState(false)


	return (
		<div className="relative">
			<div className="w-full h-24 shadow-xl">
				<div className="w-full h-full flex justify-between items-center px-10">
					<span className="font-light text-lg">Deco.</span>
					<nav className="w-32 h-full flex justify-between">
						<button
							className="w-16 h-full flex centered"
							onClick={() => console.log("trigered")}>
							<img src={Icon_user} alt="user" />
						</button>
						<button
							className="w-16 h-full flex centered"
							onClick={() => setShowNavigation(!showNavigation)}>
							<img src={Icon_menu} alt="menu" />
						</button>
					</nav>
				</div>
			</div>
			<div className={`w-60 ${showNavigation ? "h-auto" : "h-0"} overflow-hidden bg-white border-[0.5px] shadow-xl absolute right-0 border-solid flex flex-col self-end`}>
				<button className="w-full h-16">
					<span>Articles</span>
				</button>
				<button className="w-full h-16">
					<span>Articles</span>
				</button>
				<button className="w-full h-16">
					<span>Articles</span>
				</button>
				<button className="w-full h-16">
					<span>Articles</span>
				</button>
			</div>
		</div>
	);
};

export default Header;
