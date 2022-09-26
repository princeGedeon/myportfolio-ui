import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import demo from '../assets/img/cover-r4x3w1000-5eaad8ec2032c-aibrevet.jpg'
import git from '../assets/img/GitHub.svg'
const BlocWork = () => {
    return (
        <div class="h-[400px] w-[300px] rounded flex flex-col  overflow-hidden  ">
        <Image class=" h-full object-cover" src={demo} objectFit='cover' alt=""/>

        <div class="h-[100px] bg-slate-900 dark:bg-white">
            <h1 class="text-white dark:text-black my-2 mx-4">Projet Ecommerce</h1>
            <div class="flex justify-between py-2 mx-5">
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
