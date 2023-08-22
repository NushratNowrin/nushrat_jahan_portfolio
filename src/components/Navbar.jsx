import { useState } from "react";
import { styles } from "../styles.js";
import { navLinks } from "../constants/index.js";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
			<div className='w-full flex justify-between items-center max-w-7xl md:mx-20 mx-auto'>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}>
					<img src={logo} alt='logo' className='w-9 h-9 object-contain' />
					<p className='text-white text-base font-semibold cursor-pointer'>
						Nushrat Jahan
					</p>
				</Link>
				<ul className='list-none hidden sm:flex flex-row gap-10'>
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? "text-[#FF7C4E]" : "text-secondary"
							} hover:text-white text-base font-medium cursor-pointer`}
							onClick={() => {
								setActive(link.title);
							}}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				{/* for mobile menu */}
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={toggle ? close : menu}
						alt='menu'
						className='w-[26px] h-[26px] object-contain cursor-pointer'
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
						<ul className='list-none flex flex-col justify-end items-start gap-4'>
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title ? "text-[#FF7C4E]" : "text-secondary"
									} hover:text-white font-poppins text-base font-medium cursor-pointer`}
									onClick={() => {
                    setToggle(!toggle); // By clicking on the mobile menu, it automatically close the toggle
										setActive(link.title);
									}}>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
