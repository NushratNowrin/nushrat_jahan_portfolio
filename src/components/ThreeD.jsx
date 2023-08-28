import React from 'react';
import ComputersCanvas from "./canvas/Computers"
import { FaRegHandPointRight } from "react-icons/fa";
import { styles } from '../styles';
const ThreeD = () => {
    return (
        <div className='sm:px-32 relative w-full h-[400px] py-10 sm:flex justify-center items-center threeD '>
            <div className='-mt-5 sm:text-left text-center'>
            <h1 className={`${styles.heroHeadText} text-primary`} >Fun Fact</h1>
            <p className={`${styles.bannerHeadText}`}>Just Drag and move the computer</p>
            <div className='hand-icon hidden sm:flex '>
                <FaRegHandPointRight className='text-5xl my-2' />
            </div>
            </div>
           
           <ComputersCanvas/>
           
        </div>
    );
};

export default ThreeD;