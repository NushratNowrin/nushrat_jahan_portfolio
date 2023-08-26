import { motion } from "framer-motion";
import { styles } from "../styles";
import Nushrat from "../assets/Nushrat.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import Typed from 'react-typed';
import "./style.css";

const Hero = () => {
	return (
		<section className='relative w-full h-screen mx-auto '>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex sm:flex-row flex-col items-center justify-between sm:mb-36 `}>
				<Slide left>
					<div className='flex items-center gap-5'>
						<div className='flex flex-col justify-center items-center mt-4'>
							<div className='w-5 h-5 rounded-full bg-primary' />
							<div className='w-1 h-80 bg-gradient-to-b from-primary' />
						</div>
						<div>
							<h3 className={`text-white font-semibold text-2xl`}>
								Hi, It&apos;s me,{" "}
							</h3>
							<h1 className={`${styles.heroHeadText} `}>Nushrat Jahan</h1>
							<h2 className='sm:text-3xl text-2xl font-bold'>
								I&apos;m a{" "}
                <Typed className='text-primary'
                strings={[
                    'Full-stack Developer',
                    'MERN Developer',
                    'Front-end Developer',
                    ]}
                    typeSpeed={50}
                    backSpeed={40}
                    loop >
                </Typed>
							</h2>
							<p className={`${styles.heroSubText} text-white-100`}>
								I currently working on MERN stack web development,{" "}
								<br className='sm:block hidden' />  along with
								3D visuals.
							</p>
							<div className='flex items-center gap-5 sm:my-5 my-3'>
								<div className={`${styles.bannerIcon} icon-shadow`}>
									<a href=''>
										<FaLinkedinIn />
									</a>
								</div>
								<div className={`${styles.bannerIcon} icon-shadow`}>
									<a href=''>
										<FaTwitter />
									</a>
								</div>
								<div className={`${styles.bannerIcon} icon-shadow`}>
									<a href=''>
										<FaFacebookF />
									</a>
								</div>
								<div className={`${styles.bannerIcon} icon-shadow`}>
									<a href=''>
										<FaBehance className='' />
									</a>
								</div>
							</div>
							<div className='inline-block text-black text-sm font-semibold py-2 bg-primary  rounded-3xl button-shadow'>
								<a
									className='px-8 '
									href='https://drive.google.com/file/d/1ul4PTM0jUm_ddPwGXYyUfAI6t1S8YwcD/view?usp=drive_link'
									target='_blank'
									rel='noreferrer'>
									View CV
								</a>
							</div>
						</div>
					</div>
				</Slide>
				<Slide right>
					<div>
						<img className='h-72 rounded-full border-b-4 border-white NushratImage' src={Nushrat} alt='Nushrat' />  
					</div>
				</Slide>
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
