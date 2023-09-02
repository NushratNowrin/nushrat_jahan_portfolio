import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Main = () => {
	return (
		<div className='relative z-0 bg-secondary'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Main;
