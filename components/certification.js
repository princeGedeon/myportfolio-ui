import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const Certification = () => {
    return (
       
        <div className='py-10 w-3/4 mx-auto'>
            <div className="md:my-10">
            <h1 className="text-center my-3 text-[#E4A400]">CERIFICATIONS</h1>
            <h1 className="text-center font-bold text-2xl dark:text-white mb-4">Ma certifs </h1>
        </div>
          

<div id="animation-carousel" class="relative" data-carousel="static">
    
    <div class="relative min-h-[300px] sm:h-50 overflow-hidden rounded-lg md:min-h-[500px] md:h-96">
        
        <div class="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="">
            <img src="https://animecorner.me/wp-content/uploads/2022/10/the-eminence-in-shadow-episode-1-preview-thumbnail.png" class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div class="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
            <img src="https://animecorner.me/wp-content/uploads/2022/10/the-eminence-in-shadow-episode-1-preview-thumbnail.png" class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div class="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
            <img src="https://cdn.pixabay.com/photo/2018/10/20/03/26/young-3760179__340.jpg" className='object-cover w-full h-full' alt="..."/>
        </div>
        
        <div class="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
            <img src="https://animecorner.me/wp-content/uploads/2022/10/the-eminence-in-shadow-episode-1-preview-thumbnail.png" class="absolute block w-full -translate-x-1/2  object-cover w-full h-full -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="">
            <img src="https://cdn.pixabay.com/photo/2018/10/20/03/26/young-3760179__340.jpg" class="absolute block w-full object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

      
        </div>
    );
}

export default Certification;
