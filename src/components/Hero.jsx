import { motion } from "framer-motion";
import { styles } from "../styles";
import Nushrat from "../assets/Nushrat.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import Fade from "react-reveal/Slide";
import Typed from 'react-typed';
import "./style.css";

const Hero = () => {
	return (
		<section className='relative w-full sm:h-screen h-[750px] '>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[100px] mx-auto  flex sm:flex-row flex-col items-center sm:justify-between sm:mb-20`}>
				<Fade left cascade>
					<div className='flex sm:items-center gap-5'>
						<div className='flex flex-col justify-center items-center mt-5'>
							<div className='w-5 h-5 rounded-full bg-primary' />
							<div className='w-1 h-72 bg-gradient-to-b from-primary' />
						</div>
						<div>
							<h3 className={`${styles.bannerHeadText}`}>
								Hi, It&apos;s me,{" "}
							</h3>
							<h1 className={`${styles.heroHeadText} `}>Nushrat Jahan</h1>
							<h2 className={`${styles.orangeHeader}`}>
								I&apos;m a{" "}
                <Typed className='text-primary'
                strings={[
                    'Full-stack Developer',
                    'MERN Developer',
                    'Front-end Developer',
					'React Developer',
					'UI Designer'
                    ]}
                    typeSpeed={50}
                    backSpeed={40}
                    loop >
                </Typed>
							</h2>
							<p className={`${styles.heroSubText} text-gray-300`}>
								I currently working on MERN stack web development,{" "}
								<br className='sm:block hidden' />  and connected with Web Development field since 2020.
							</p>
							<div className='flex items-center gap-5 sm:my-5 my-3'>
								<div className={`${styles.bannerIcon} icon-shadow`}>
									<a href='https://www.linkedin.com/in/nushrat-jahan-nowrin/' target='_blank'
									rel='noreferrer'>
										<FaLinkedinIn />
									</a>
								</div>
								<div className={`${styles.bannerIcon} icon-shadow`}>
									<a href='https://twitter.com/Nushrat_Jahan27' target='_blank'
									rel='noreferrer'>
										<FaTwitter />
									</a>
								</div>
								<div className={`${styles.bannerIcon} icon-shadow`}>
									<a href='https://www.facebook.com/nushratjahan.nowrin' target='_blank'
									rel='noreferrer'>
										<FaFacebookF />
									</a>
								</div>
								<div className={`${styles.bannerIcon} icon-shadow`}>
									<a href='https://www.behance.net/nushrat_jahan' target='_blank'
									rel='noreferrer'>
										<FaBehance className='' />
									</a>
								</div>
							</div>
							<div className={`${styles.shadowButton} shadowButton`}>
								<a
									className='px-8'
									href='https://drive.google.com/file/d/1Lrrdzww2Oep1l2t-NwXLA6KccqhTsdYu/view?usp=drive_link'
									target='_blank'
									rel='noreferrer'>
									Resume
								</a>
							</div>
						</div>
					</div>
				</Fade>
				<Fade right>
					<div>
						<img className='h-72 sm:mt-10 rounded-full border-4  outline-dotted outline-2 outline-primary -outline-offset-8 border-primary p-4 NushratImage' src={Nushrat} alt='Nushrat' />  
	
					</div>
				</Fade>
			</div>
			<div className='absolute xs:bottom-10 bottom-32 w-full sm:flex justify-center items-center sm:visible hidden'>
				<a href='#about'>
					<div className='w-[35px] h-[64px] rounded-3xl border-4 border-neutral-400 flex justify-center items-start p-2'>
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className='w-3 h-3 rounded-full bg-neutral-400 mb-1'
						/>
					</div>
				</a>
				
			</div>
			
		</section>
	);
};

export default Hero;
