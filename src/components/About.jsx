import React from "react";
import { styles } from "../styles";
import Nushrat from "../assets/Nushrat-2.png";
import Fade from "react-reveal/Slide";
import { aboutMe } from "../constants/index.js";
import "./style.css";
import { useState } from "react";

const About = () => {
  const [fold, setFold] = useState(true);
	return (
		<section id='about' className='w-full sm:h-screen h-[800px] mx-auto '>
			<div
				className={`${styles.paddingX} h-full grid sm:grid-cols-3 grid-cols-1 items-center justify-center sm:gap-20`}>
				<Fade left>
					<div className='sm:order-first order-last  flex items-center justify-center w-full'>
						<img
							className='sm:h-72 h-60 sm:mt-10 -mt-20 rounded-lg outline-4  outline-primary -outline-offset-8 outline-double border-2 border-primary p-4 pr-0 NushratImage2'
							src={Nushrat}
							alt='Nushrat'
						/>
					</div>
				</Fade>
				<Fade right cascade>
        <div className='sm:col-span-2 flex sm:items-center gap-5'>
					<div className='flex flex-col justify-center items-center sm:mt-10'>
						<div className='w-5 h-5 rounded-full bg-primary' />
						<div className='w-1 h-80 bg-gradient-to-b from-primary' />
					</div>
					<div>
						<h3 className={`${styles.bannerHeadText}`}>
							Let me Introduce myself
						</h3>
						<h2 className={`${styles.orangeHeader}`}>
							About Me
						</h2>
						<h1 className={`${styles.heroHeadText} `}>Nushrat Jahan</h1>

            {fold ? (
						<>
							<div>
								<p>{aboutMe.substring(0,397)}.....</p>
								<div className={`${styles.shadowButton} shadowButton px-8 mt-5`} onClick={() => setFold(!fold)}>
									Read More
								</div>
							</div>
						</>
					) : (
						<>
							<div>
              <p className="text-sm">{aboutMe}</p>
								<div className={`${styles.shadowButton} shadowButton px-8 mt-5 sm:mb-0 mb-16`} onClick={() => setFold(!fold)}>
									Read Less
								</div>
							</div>
						</>
					)}
					</div>
				</div>
        </Fade>
			</div>
		</section>
	);
};

export default About;
