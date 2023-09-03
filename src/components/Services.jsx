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
		<section id='services' className='w-full mx-auto bg-black-100'>
			<div
				className={`${styles.paddingX} py-28  text-center`}>
				<h3 className={`${styles.bannerHeadText}`}>What I will do for you</h3>
                <h2 className={`${styles.sectionWhiteHeading}`}>Services</h2>
                <div className="grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 justify-center items-center gap-8 mt-10">
                    {
                        services.map(service => 
                            <Service key={service.id} {...service}></Service>)
                    }
                </div>
			</div>
			
		</section>
	);
};

export default Services;
