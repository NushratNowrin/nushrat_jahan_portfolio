import React from "react";
import { FiLink } from "react-icons/fi";

const Project = (project) => {
	const { name, img, description, technologies, livelink } = project;
	console.log(livelink);
	return (
		<section
			id='projects'
			className='md:flex even:flex-row-reverse items-center justify-center gap-0 mx-auto my-5'>
			<div
				className={`md:w-1/2 h-80 project-img bg-[url('${img}')] bg-cover`}></div>
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/craftopia.png')]`}></div> */}
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/Princess-Palette.png')]`}></div> */}
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/deshi-delights.png')]`}></div> */}
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/career-flock.png')]`}></div> */}
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/Ema-john.png')]`}></div> */}
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/knowledge-station.png')]`}></div> */}
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/AI-universe.png')]`}></div> */}
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/Geometry-genius.png')]`}></div> */}
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/Quiz-hero.png')]`}></div> */}
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/bank-calculation.png')]`}></div> */}

			<div className='relative md:w-1/2 md:h-64 sm:h-52 h-80 p-5 bg-secondary  project-cart'>
				<h2 className='text-primary uppercase font-semibold text-xl tracking-widest mb-3'>
					{name}
				</h2>
				<p className='lg:text-sm text-xs text-neutral'>{description}</p>
				<p className='lg:text-sm text-xs text-neutral-200'>
					Technology Used: {technologies}
				</p>
				<div className='absolute -bottom-5 right-1/2 bg-secondary rounded-full w-10 h-10 z-30 arrow-box flex items-center justify-center'>
					<a href={livelink} target='_blank' rel='noreferrer'>
						<FiLink />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Project;
