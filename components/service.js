import React from 'react';
import BlocService from './bloc_service';


const ServiceSection = () => {
    return (
        <section id="service" className=" py-5 min-h-screen dark:bg-[#2F2F36]">
            <div className="md:my-10">
            <h1 className="text-center my-3 text-[#E4A400]">SERVICES</h1>
            <h1 className="text-center font-bold text-2xl dark:text-white mb-4">What do I offer? </h1>
        </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 px-5 py-3  ">
                
               
            <BlocService />
            <BlocService />
                
            <BlocService />
                
            <BlocService />
                
            <BlocService />
            <BlocService />
                
                

            </div>

         </section>
    );
}

export default ServiceSection;
