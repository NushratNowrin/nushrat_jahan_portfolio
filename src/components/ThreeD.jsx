import React from 'react';
import ComputersCanvas from "./canvas/Computers"
const ThreeD = () => {
    return (
        <div className='relative w-full sm:h-[400px] h-[300px] flex justify-center items-center bg-zinc-500'>
            <ComputersCanvas />
        </div>
    );
};

export default ThreeD;