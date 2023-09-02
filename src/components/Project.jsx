import React from "react";
import { FiLink } from "react-icons/fi";
import { BsServer } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Project = (project) => {
	const { name, img, description, technologies, livelink, github } =
		project;
	const server = project.server || "";
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
			{/* <div
				className={`md:w-1/2 h-80 project-img bg-[url('/Projects/react_with_tailwind.png')]`}></div> */}

			<div className='relative md:w-1/2 h-auto p-6 pb-4 bg-secondary  project-cart'>
				<h2 className='text-primary uppercase font-semibold text-xl tracking-widest mb-3'>
					{name}
				</h2>
				<p className='lg:text-sm text-xs text-neutral'>{description}</p>
				<p className='lg:text-sm text-xs text-neutral-200'>
					Technology Used: {technologies}
				</p>
				<div className=' translate-y-[2.25rem] z-30  flex items-center justify-center gap-10'>
					<div className='bg-secondary rounded-full flex justify-center items-center w-10 h-10 arrow-box'>
						<a
							href={livelink}
							target='_blank'
							rel='noreferrer'
							title='Live Link'>
							<FiLink />
						</a>
					</div>
					<div className="bg-secondary rounded-full w-10 h-10 arrow-box flex justify-center items-center">
						<a href={github} target='_blank' rel='noreferrer' title="Github client Repo">
							<BsGithub />
						</a>
					</div>
					<div className={`${server ? 'visible' : 'hidden'} bg-secondary rounded-full w-10 h-10 arrow-box flex justify-center items-center`}>
						<a href={server} target='_blank' rel='noreferrer' title="GitHub Server Repo">
							<BsServer />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
