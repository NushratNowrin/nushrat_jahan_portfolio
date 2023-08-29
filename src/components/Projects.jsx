import React from 'react';
import { styles } from '../styles';

const Projects = () => {
    return (
        <section id='services' className='relative w-full md:h-screen xs:h-[900px] h-[1550px] mx-auto bg-black-100'>
            <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl text-center`}>
            <h3 className={`${styles.bannerHeadText}`}>Each project is a unique piece of development</h3>
                <h2 className={`${styles.sectionWhiteHeading}`}>Projects</h2>

            </div>
        </section>
    );
};

export default Projects;