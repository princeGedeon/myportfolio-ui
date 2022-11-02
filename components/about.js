import Image from 'next/image';
import React from 'react';

import down from '../assets/img/Down.svg'

import me from '../assets/img/cover-r4x3w1000-5eaad8ec2032c-aibrevet.jpg';

const AboutSection = () => {
    return (
        <div>
             <section id="about" className=" min-h-[500px] px-10  py-5 mt-5 flex justify-center items-center dark:bg-[#2F2F36]">
            <div className="flex justify-center items-center  ">
            <div className="">
            <h1 className="my-4 font-bold text-3xl px-5 mb-3 text-center md:text-start dark:text-white">About Me</h1>
            
            <div className="w-full min-h-fit py-5 flex flex-col-reverse gap-14 justify-center items-center md:flex-row  ">

              
                <div className="w-full px-5">

                   
                    <div className="flex gap-2 justify-center md:justify-start min-w-[10px]">
                        <div className="bg-black dark:bg-white dark:text-black text-white text-sm py-0.5 px-4">
                            <h1>Python</h1> 
                        </div>

                        <div className="bg-black dark:bg-white dark:text-black text-white text-sm py-0.5 px-4">
                            <h1>Node js</h1>
                        </div>

                        <div className="bg-black dark:bg-white dark:text-black text-white text-sm py-0.5 px-4">
                            <h1>Next</h1>
                        </div>

                    </div>

                    <div className="mt-6 py-2">
                        <p className="text-center md:text-justify dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nisi sit pariatur? Labore, harum exercitationem. Tenetur earum, illo aperiam doloribus quasi obcaecati! Tenetur saepe aliquam natus ad mollitia ullam dolore.</p>

                    </div>
                    <div className="flex justify-center md:justify-start">
                    <button className="py-2 px-5 mt-5 mb-8 bg-[#FEBA15] dark:text-white rounded-md shadow-md">See my Work</button>
                </div>
                </div>

                <div className="w-full flex justify-center  ">

                    
                    <div className=" min-w-[200px] min-h-[250px] relative border border-2 border-black dark:border-white ">
                        <div className="absolute bg-slate-900 h-full w-full -top-5 -left-5 ">
                          <div className='bg-red-500 h-full realtive'>
                           <Image src={me} objectFit="cover" layout="fill" placeholder="empty" className='relative'/>
                           </div> 
                        </div>

                        <div className="rounded-full p-2 w-12 animate-pulse h-12 bg-white  -rotate-90 absolute -bottom-7 -left-7 border border-black dark:border-white  border-2 h-15 w-15">

                            <Image src={down}  className="text-white" alt=""/>
                        </div>

                    </div>




                </div>
            </div>
            </div>

        </div>


         </section>
            
        </div>
    );
}

export default AboutSection;
