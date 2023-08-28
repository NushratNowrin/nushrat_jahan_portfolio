import React from 'react';
import { styles } from '../styles';

const Skills = () => {
    return (
        <section id="skills" className="relative w-full md:h-screen xs:h-[900px] h-[1550px] mx-auto">
            <div
				className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl text-center`}>
				<h3 className={`${styles.bannerHeadText}`}>My Technical skills</h3>
                <h2 className={`${styles.sectionWhiteHeading}`}>Skills</h2>
                <div className="grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 justify-center items-center gap-8 mt-10">
                    {/* {
                        services.map(service => 
                            <Service key={service.id} {...service}></Service>)
                    } */}
                </div>
			</div>
            Skills
        </section>
    );
};

export default Skills;