import React from 'react';

const Skill = (skill) => {
    const {img, name} = skill
    return (
        <div>
            <div className='  flex items-center  justify-center'><img className='h-16 w-16 bg-white rounded-xl' src={img} alt={name} /></div>
        </div>
    );
};

export default Skill;