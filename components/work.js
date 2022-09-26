import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import demo from '../assets/img/cover-r4x3w1000-5eaad8ec2032c-aibrevet.jpg'
import git from '../assets/img/GitHub.svg'
import BlocWork from './bloc_work';
const WorkSection = () => {
    return (
        <div>
             <section id="work" class="min-h-[500px] px-10  py-5 mt-3 dark:bg-[#2F2F36]">
            <h1 class="my-2 font-bold text-3xl px-5 mb-3 text-center dark:text-white ">Work</h1>
          <div class="flex justify-center mt-10">
            <div class="w-3/4  flex flex-row flex-wrap items-center justify-evenly  gap-5 md:gap-8  ">

                <button class="py-1 min-h-fit w-24 text-[#E4A400] dark:bg-[#0D0D0D]  px-4 shadow-md dark:shadow-sm dark:shadow-slate-200 rounded-md">Python</button>

                <button class="py-1 min-h-fit w-24 text-[#E4A400] dark:bg-[#0D0D0D]  px-4 shadow-md dark:shadow-sm dark:shadow-slate-200 rounded-md">Django</button>
                <button class="py-1 min-h-fit w-24 text-[#E4A400] dark:bg-[#0D0D0D]  px-4 shadow-md dark:shadow-sm dark:shadow-slate-200 rounded-md">Node js</button>
                <button class="py-1 min-h-fit w-24 text-[#E4A400] dark:bg-[#0D0D0D]  px-4 shadow-md dark:shadow-sm dark:shadow-slate-200 rounded-md">Node js</button>
                <button class="py-1 min-h-fit w-24 text-[#E4A400] dark:bg-[#0D0D0D]  px-4 shadow-md dark:shadow-sm dark:shadow-slate-200 rounded-md">Next js</button>
                <button class="py-1 min-h-fit w-24 text-[#E4A400] dark:bg-[#0D0D0D]  px-4 shadow-md dark:shadow-sm dark:shadow-slate-200 rounded-md">Node js</button>
               
                
        </div>
    </div>

            <div class="py-5 flex flex-col md:flex-row flex-wrap  justify-evenly gap-10 md:gap-5 items-center ">

            <BlocWork />

            <BlocWork />

            <BlocWork />

            
           
               
          
            
                
            
                
                


                




            </div>
            <div>
                <div class="flex justify-center mt-5 ">
                <button class=" h-[70px] w-[70px] border bolder-2 border-black dark:border-white rounded-full ">
                <h1 class="   border-black dark:text-white rounded-full text-xs justify-center text-center">Load More</h1>
           
            </button>
            </div>
            </div>
           

         </section>
        </div>
    );
}

export default WorkSection;
