import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    // console.log(services)
	return (
		<section id='services' className='relative w-full sm:h-screen h-[750px] mx-auto bg-black-100'>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[50px] max-w-7xl text-center`}>
				<h3 className={`${styles.bannerHeadText}`}>What I will do for you</h3>
                <h2 className={`${styles.orangeHeader} text-3xl my-5`}>Services</h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center gap-5 items-center">
                    {
                        services.map(service => 
                            <Service key={service.id}></Service>)
                    }
                </div>
			</div>
			
		</section>
	);
};

export default Services;
