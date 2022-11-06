import React from 'react';2
import Image from 'next/image';
import Link from 'next/link';
import demo from '../assets/img/cover-r4x3w1000-5eaad8ec2032c-aibrevet.jpg'
import git from '../assets/img/GitHub.svg'
const BlocWork = ({item}) => {
    return (
        <div class="hover:scale-110 transition-all gap-0 ease-in-out transition-transform h-[320px] justify-between  w-[300px] rounded-md hover:shadow-md flex flex-col  overflow-hidden  ">
        <div className='  bg-red-100 h-2/3 '>
        <Image class="   object-cover" src={item.image} objectPosition="center" alt=""/>
        </div>
        <div class="h-1/3 py-2 flex flex-col justify-between  bg-slate-900 dark:bg-white">
           
            <h1 class="text-white  dark:text-black my-2 mx-4 h-1/3">{item.title}</h1>
            <div class="flex justify-between py-2 mx-5 h-2/3">
                <button class="py-1 px-2 text-sm mb-2  bg-[#FEBA15] dark:text-black  rounded-md shadow-md">View Demo</button>
                <Link href="">
                <a >
                <Image class="bg-white rounded-full" src={git} alt=""/>
                </a>
                </Link>
            </div>

        </div>

    </div>

    );
}

export default BlocWork;
