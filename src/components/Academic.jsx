import React, { useEffect, useState } from 'react';
import { styles } from '../styles';

const Academic = () => {
    const [academics, setAcademics] = useState([]);
    useEffect(()=>{
        fetch('/academic.json')
        .then(res => res.json())
        .then(data => setAcademics(data))
    },[]);
    console.log(academics)
    return (
        <section id='academic' className='py-20 w-full mx-auto'>
            <div className={`${styles.paddingX} top-[80px] max-w-7xl text-center`}>
            <h3 className={`${styles.bannerHeadText}`}>expert in anything was also once a beginner</h3>
                <h2 className={`${styles.sectionWhiteHeading}`}>Academic Qualifications</h2>
                <div className='grid grid-cols-1 justify-center items-center gap-10 mt-10'>
                </div>
            </div>
        </section>
    );
};

export default Academic;