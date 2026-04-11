import { useState, useEffect } from "react";
import { close, menu } from "../assets";
import teamupnologo from "../assets/teamupnologo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigation = useNavigate();
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`w-full flex py-5 justify-between items-center navbar transition-all duration-300 ${scrolled ? "navbar-glass" : ""}`}>
			<img
				src={teamupnologo}
				alt="fotologo"
				className="w-[200px] h-full cursor-pointer transition-transform duration-300 hover:scale-105"
				onClick={() => navigation("/home")}
			/>

			{localStorage.getItem("access_token") ? (
				<ul className="list-none sm:flex hidden justify-end items-center flex-1">
					<li
						className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white transition-all duration-300 hover:text-[#D7385E] group relative`}>
						<Link to="/home">Home</Link>
						<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D7385E] transition-all duration-300 group-hover:w-full"></span>
					</li>
				</ul>
			) : (
				<ul className="list-none sm:flex hidden justify-end items-center flex-1">
					<li
						className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white transition-all duration-300 hover:text-[#D7385E] group relative`}>
						<Link to="/login">Login</Link>
						<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D7385E] transition-all duration-300 group-hover:w-full"></span>
					</li>
					<li
						className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white transition-all duration-300 hover:text-[#D7385E] group relative`}>
						<Link to="/register">Register</Link>
						<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D7385E] transition-all duration-300 group-hover:w-full"></span>
					</li>
				</ul>
			)}

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain transition-transform duration-300 hover:scale-110"
					onClick={() => setToggle((men) => !men)}
				/>

				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					{localStorage.getItem("access_token") ? (
						<ul className="list-none flex flex-col justify-end items-center flex-1">
							<li
								className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white transition-all duration-300 hover:text-[#D7385E]`}>
								<Link to="/home">Home</Link>
							</li>
						</ul>
					) : (
						<ul className="list-none flex flex-col justify-end items-center flex-1">
							<li
								className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white transition-all duration-300 hover:text-[#D7385E]`}>
								<Link to="/login">Login</Link>
							</li>
							<li
								className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white transition-all duration-300 hover:text-[#D7385E]`}>
								<Link to="/register">Register</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
