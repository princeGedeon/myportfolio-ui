import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import WorkSection from '../components/work'
import ServiceSection from '../components/service'
import Navbar from '../components/navbar'
import Contact from '../components/contact'

import ellipse from '../assets/img/Ellipse 2.svg'
import boyimage from '../assets/img/firefox.tmp/boy-gc1a3b2402_1280.png'
import montimage from '../assets/img/OBJECTS.svg'
import down from '../assets/img/Down.svg'

import linkdin from '../assets/img/LinkedIn Circled.svg'
import twitter from '../assets/img/Twitter Circled.svg'
import git from '../assets/img/GitHub.svg'


import AboutSection from '../components/about'
import Certification from '../components/certification'


export default function Home() {

  

  return (
    <div className="dark:bg-[#2F2F36] min-h-screen" >

<section id="home"> 
    <div class="  pt-5 min-h-screen min-w-screen  flex flex-col bg-[#E7E4DE] overflow-hidden  dark:bg-[#302C23]   ">
      
            
           
<Navbar />

            <div class="  grow   dark:bg-[#302C23] ">
    <div  className=" hidden  md:block absolute bottom-28 h-2/3 right-5   object-cover md:left-0 mx-auto"> 
        <Image
        layout='fill'
     
      src={ellipse}
      alt="ellipse"
      
     
    />
    </div>


<div className="bg-transparent absolute bottom-0 w-full z-10 min-h-[20em] md:min-h-[24em]  overflow-hidden">
        <Image
           src={boyimage}
        
           layout="fill"
           objectFit="contain"
       />
    
</div>

<div  className="absolute  bottom-0 z-0  w-full  n  ">
<div className="relative min-h-[400px] w-full  overflow-hidden">
        <Image
           src={montimage}
           alt="montagne cyberpunk"
           layout="fixed"
     
           objectFit="contain"
       />
    </div>
</div>

<div class="  px-9 md:px-10 pt-8    ">
    
            <h3 class="text-sm md:text-md dark:text-white ">Hi,👋 I &apos;m <span class="font-semibold">Prince Gédéon GUEDJE</span></h3>
            <div class="my-2">
            <h1 class="text-3xl md:text-4xl xl:text-5xl md:left-35  font-semibold dark:text-white">ML Engineer, Devops <br/>& Web Fullstack </h1>
        </div>
        <button onClick={()=>{alert('hi')}} class="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-yello00000000000000000w dark:hover:bg-blue-700 dark:focus:ring-blue-800  dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none py-2 px-5 mt-2 bg-[#FEBA15] rounded-md shadow-md dark:text-white">Hire me</button>


</div>
<div class="w-full flex justify-between items-center  absolute bottom-5 z-30">
    <div class="flex flex-col md:flex-row gap-2 px-9 md:px-10 ">
        <a href="#" className='  dark:shadow-white 00000000000000000    dark:bg-white rounded-full'><Image src={git} alt="social" /></a>
        <a href="#" className='  dark:shadow-white 00000000000000000    dark:bg-white rounded-full'><Image src={linkdin}     alt="social" /></a>
        <a href="#" className='  dark:shadow-white 00000000000000000    dark:bg-white rounded-full'><Image src={twitter}   alt="social" /></a>

    </div>
    <div>
        <a className='px-5 ' href="#footer" > <Image className=" animate-bounce  rounded-full  dark:bg-white     mr-8" src={down} alt="down"/></a>
    </div>

   

</div>

 
<div class="hidden md:block rotate-90 align-top absolute -right-12 min-w-fit  min-h-fit top-1/3 flex gap-2 items-center justify-end ">
    <div class="bg-black dark:bg-white h-0.5 w-5"></div>
         <h1 class="text-sm dark:text-white">Develop by princeGedeon</h1>
    <div class="bg-black dark:bg-white h-0.5 w-5"></div>
    
</div>
            

</div>

            

            
            </div>
        </section>


        <AboutSection />
        <WorkSection />
        <ServiceSection />
       <Certification/>
      
        <Contact />


    </div>
  )
}
