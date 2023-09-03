import React, { useEffect, useState } from "react";
import { CgArrowLongDownR } from "react-icons/cg";
import { CgArrowLongDown } from "react-icons/cg";
import { styles } from "../styles";
const Academic = () => {
	const [academics, setAcademics] = useState([]);
	useEffect(() => {
		fetch("/academic.json")
			.then((res) => res.json())
			.then((data) => setAcademics(data));
	}, []);
	// console.log(academics)
	return (
		<section id='academic' className='py-28 w-full mx-auto'>
			<div className={`${styles.paddingX} top-[80px]  text-center`}>
				<h3 className={`${styles.bannerHeadText}`}>
					expert in anything was also once a beginner
				</h3>
				<h2 className={`${styles.sectionWhiteHeading}`}>
					Academic Qualifications
				</h2>
				<div className='grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-10 mt-10 border-t-[1px] border-primary border-opacity-50'>
					{academics.map((academic) => (
						<div key={academic.id}>
							<div className='flex flex-col justify-center items-center md:border-t-[0px] border-t-[1px] border-primary'>
								<CgArrowLongDownR className='text-3xl opacity-50 text-primary' />
								<div className='rounded-full  bg-neutral'>
									<img className='h-12 w-12 p-2' src={academic.icon} alt='' />
								</div>
								
								<div className='text-xl leading-none text-primary opacity-50'>
									|
								</div>
								<div className='py-3 px-5 rounded-tl-3xl rounded-br-3xl bg-white bg-opacity-10 text-sm'>
									{academic.duration}
								</div>
								<div className='text-xl leading-none text-primary opacity-50'>
									|
								</div>
								<div className=' bg-white'>
									<img className='h-14' src={academic.logo} alt='' />
								</div>
								<CgArrowLongDown className='text-4xl opacity-50 text-primary' />
								<div className='academic-box p-6 rounded-tl-3xl rounded-br-3xl flex items-center justify-center bg-white bg-opacity-10 md:w-full w-auto  lg:h-54 md:h-64 h-auto'>
									<div>
										<h2 className='text-primary font-semibold tracking-wider mb-2'>
											{academic.degree}
										</h2>
										<div className="text-sm">
											<p className='mb-2'>
												{academic.group}
											</p>
											<p>{academic.institute}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Academic;
