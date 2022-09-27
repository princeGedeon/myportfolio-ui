import React from 'react';
import { useRef } from 'react';

const Contact = () => {
    const name=useRef();
    const message = useRef();
    const email=useRef();

    const handleForm=e=>{
        e.preventDefault();
        console.log(name.current.value);
        console.log(message.current.value);
    }
    return (
        <div>
            <section id="contact">

<div  class="pt-10 pb-5 bg-[#E7E4DD]  dark:bg-[#302C23]">

    <div class="container pt-9 mx-auto">
       
        <div class="container mx-auto">
           
            <div class="flex flex-col gap-3 items-center">
            <h1 class="text-[#E4A400] font-bold">CONTACT</h1>
           <h1 class="text-3xl text-[#000000] dark:text-white">Have a Question?</h1>
           
        </div>

      
        <form onSubmit={handleForm} class="mt-3 p-8  flex  flex-col gap-4 justify-center items-center " method="POST"  action="">
            <input ref={name} class="p-2 dark:border-1 bg-[#E7E4DD]  placeholder-gray-700 dark:placeholder-white dark:bg-[#302C23] dark:text-white dark:ring-0 w-full  xl:w-1/2  ring-1 ring-slate-800 dark:ring-white text-[#000000]  rounded-sm" type="text" placeholder="Name "/>
            <input ref={email} class ="p-2 dark:border-1 bg-[#E7E4DD]  placeholder-gray-700 dark:placeholder-white dark:bg-[#302C23] dark:text-white dark:ring-0  w-full xl:w-1/2 ring-1 ring-slate-800 dark:ring-white text-[#000000]  rounded-sm" type="email" placeholder="Email"/>
            <textarea ref={message} class="p-2 dark:border-1 bg-[#E7E4DD] placeholder-gray-700  dark:placeholder-white dark:bg-[#302C23]  dark:text-white dark:ring-0  w-full xl:w-1/2  ring-1 ring-slate-800 dark:ring-white text-[#000000]  rounded-sm" name="message" id="msg" cols="30" 
            placeholder="Message ..."
            rows="7"></textarea>
            <button class="  w-full xl:w-1/2 bg-[#E4A400] dark:text-white text-black font-medium px-3 py-2 rounded-md">Send my message</button>
        </form>
    </div>
</div>
</div>

</section>
        </div>
    );
}

export default Contact;
