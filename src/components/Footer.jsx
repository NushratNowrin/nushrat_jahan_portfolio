import React from "react";

const Footer = () => {
	return (
		// <footer>
		//     <div className='grid sm:grid-cols-2 grid-cols-1 flex-col justify-between items-center'>
		//         <div className='bg-secondary px-16 h-80 flex-row items-center justify-center'>
		//
		//         </div>
		//         <div className='bg-black-100 px-32 py-20 h-80'>kwjeij</div>
		//     </div>
		// </footer>
		<footer className='text-white'>
			<div className='md:grid grid-cols-2 text-neutral-content'>
				<div className='bg-secondary p-16 text-center md:pl-40'>
					<h2>Nushrat Jahan</h2>
					<h3>MERN Developer</h3>
					<p>
						Introduce myself as a dedicated MERN developer. Creating compelling eye-catchy web pages and delivering excellent user experience is my first objective.
					</p>
				</div>
				<div className='bg-black-100 p-16 text-center md:pr-40'>
					<h2 className='font-medium text-lg mb-5'>Follow US</h2>
					<p className='text-sm '>Join us on social media</p>
					<div className='flex justify-center items-center gap-5 mt-5'>
						{/* <Link to="/"><FaFacebookF /></Link>
                        <Link to="/"><FaInstagram /></Link>
                        <Link to="/"><FaTwitter /></Link> */}
					</div>
				</div>
			</div>
			<div className='footer p-4 bg-black text-white text-center'>
				<div>
					<p>Copyright © 2023 - Portfolio. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
