import Image from 'next/image';
import React from 'react';
import demo from '../assets/img/Twitter Circled.svg'

const BlocService = () => {
    return (
        <div>
             <div className=" min-h-fit  md:h-[150px]   rounded-md shadow-lg bg-black mx-5 py-8 px-5 dark:bg-white dark:text-black dark:shadow-2xl">
                    <div className="flex justify-start gap-2">
                    <Image src={demo} className="bg-white w-10 h-10" alt=""/>
                    <h1 className="text-white dark:text-black font-semibold text-md">IA Mahine Learning Ing</h1>
                </div>
                <p className="text-white dark:text-black text-sm font-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dolorum minima natus laborum assumenda, harum aperiam qui corporis error inventore!</p>
                </div>
            
        </div>
    );
}

export default BlocService;
