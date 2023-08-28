import React, { useEffect, useState } from 'react';
import Skill from './Skill'
import { styles } from '../styles';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(()=>{
        fetch('/skills.json')
        .then(res => res.json())
        .then(data => setSkills(data))
    },[]);
    // console.log(skills)
    return (
        <section id="skills" className="relative w-full md:h-screen xs:h-[700px] h-[950px] mx-auto">
            <div
				className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl text-center`}>
				<h3 className={`${styles.bannerHeadText}`}>My Technical skills</h3>
                <h2 className={`${styles.sectionWhiteHeading}`}>Skills</h2>
                <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 justify-center items-center gap-5 mt-8">
                    {
                        skills.map(skill => 
                            <Skill key={skill.id} {...skill}></Skill>
                            )
                    }
                </div>
			</div>
        </section>
    );
};

export default Skills;