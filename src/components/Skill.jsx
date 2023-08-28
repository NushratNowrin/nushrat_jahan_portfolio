import React from "react";

const Skill = (skill) => {
	const { img, name } = skill;
	return (
		<div className="">
			<div className='skill-container  flex items-center  justify-center'>
				<img
					className='h-16 w-16 bg-white border-2 border-white rounded-xl skill front relative'
					src={img}
					alt={name}
				/>
                {/* <p className='h-16 w-16 bg-white border-2 border-white rounded-xl skill back text-black text-xs p-2 absolute'>
                    {name}
                </p> */}
			</div>
		</div>
	);
};

export default Skill;
