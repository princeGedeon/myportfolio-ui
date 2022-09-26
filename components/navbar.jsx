import React from 'react';

const Navbar = () => {
    return (
        <div className='z-30 bg-transparent'>
            <nav class="w-full   top-0 flex justify-between px-9 md:px-10 bg-transparent   dark:bg-[#302C23] ">
                <div class="container py-5 flex justify-between items-center">
                    <div class="flex items-center justify-center space-x-1">
                        
                        <span class="text-xl font-bold text-[#000000] dark:text-white">Prince </span>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>

                    <ul class="hidden md:flex space-x-10 text-[#000000]font-semibold text-sm  dark:text-gray-100">
                        <li class="hover:text-[#FEBA15]">
                            <a href="#home">Home</a>
                        </li>
                        <li class="hover:text-gray-500">
                            <a href="#about">About</a>
                        </li>
                        <li class="hover:text-gray-500">
                            <a href="#work">Work</a>
                        </li>
                        <li class="hover:text-gray-500">
                            <a href="#service">Services</a>
                        </li>

                        <li class="hover:text-gray-500">
                            <a href="#contact">Contacts</a>
                        </li>
                    </ul>
                    <div class="hidden md:block"></div>
                 
                   
                    <div id="hamberguer" class="space-y-1 = cursor-pointer md:hidden ">

                        <div class="w-6 h-0.5 bg-black"></div>
                        <div class="w-6 h-0.5 bg-black"></div>
                        <div class="w-6 h-0.5 bg-black"></div>
                        <div class="w-6 h-0.5 bg-black"></div>
                    </div>

                    <ul id="menu" class="hidden z-50 bg-[#E7E4DE] text-gray-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
                        <li >
                            <a class="hlink" href="#">HomePage</a>
                        </li>
                        <li >
                            <a class="hlink" href="#about">About</a>
                        </li>
                        
                        <li >
                            <a class="hlink" href="#work">Works</a>
                        </li>
                        <li >
                            <a class="hlink" href="#services">Mes Services</a>
                        </li>
                        <li >
                            <a class="hlink" href="#contact">Contacts</a>
                        </li>
                    </ul>
                </div>

            </nav> 
        </div>
    );
}

export default Navbar;
