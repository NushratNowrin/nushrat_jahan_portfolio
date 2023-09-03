import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import Project from './Project';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[]);
    // console.log(projects)
    const threeProjects = projects.slice(0, 3);
    return (
        <section id='projects' className='py-20 w-full mx-auto bg-black-100'>
            <div className={`${styles.paddingX} top-[80px] text-center`}>
            <h3 className={`${styles.bannerHeadText}`}>Each project is a unique piece of development</h3>
                <h2 className={`${styles.sectionWhiteHeading}`}>Projects</h2>
                <div className='grid grid-cols-1 justify-center items-center gap-10 mt-10'>
                    {
                         threeProjects.map(project => 
                            <Project key={project.id} {...project} />
                            )
                    }
                </div>
                <div className={`${styles.shadowButton} shadowButton mt-20`}>
                    <Link to="/all-projects" className='px-8'>Want to view more Project? Let&apos;s go</Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;