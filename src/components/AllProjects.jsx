import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { styles } from '../styles';
import Project from './Project';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[]);
    return (
        <section id='services' className='py-20 w-full mx-auto bg-black-100'>
            <div className={`${styles.paddingX} top-[80px] max-w-7xl text-center`}>
            <h3 className={`${styles.bannerHeadText}`}>Each project is a unique piece of development</h3>
                <h2 className={`${styles.sectionWhiteHeading}`}>All <span className='text-primary'>Projects</span></h2>
                <div className='grid grid-cols-1 justify-center items-center gap-10 mt-10'>
                    {
                         projects.map(project => 
                            <Project key={project.id} {...project} />
                            )
                    }
                </div>
            </div>
        </section>
    );
};

export default AllProjects;