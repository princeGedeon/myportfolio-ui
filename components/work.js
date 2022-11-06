import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
import demo from '../assets/img/cover-r4x3w1000-5eaad8ec2032c-aibrevet.jpg'
import git from '../assets/img/GitHub.svg';
import items from './../datas/allDatas';
import BlocWork from './bloc_work';
import Menu from './menu';
import Button from './button';
import MenuThree from './menuthree';

const allCategories=['All',...new Set(items.map(item => item.category))];
const WorkSection = () => {

    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setbuttons] = useState(allCategories);
    const [searchTerm, setSearchTerm] = useState("")

    const filter=(button)=>{
        if(button=== 'All'){
            setMenuItem(items);
            return ;
        }
        const filterdData = items.filter(item => item.category === button);
        setMenuItem(filterdData);
    }

    const handleSearch=(e)=>{
        let value=e.target.value;
        setSearchTerm(value);
      

    }

    return (
        <div>
             <section id="work" class="min-h-[500px] px-10  py-5 mt-3 dark:bg-[#2F2F36]">
            <h1 class="my-2 font-bold text-3xl px-5 mb-3 text-center dark:text-white ">Work</h1>

            
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative w-1/3 mx-auto">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input onChange={handleSearch} type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search  project" required=""/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>


            <Button button={buttons} filter={filter} />    
 <div className='mt-5 mx-10'>          
<MenuThree menuItem={menuItem} searchTerm={searchTerm}/>
</div> 



            <div>
                <div class="flex justify-center mt-5 ">
              
              <Link href="/work">
                <button class=" hover:animate-spin h-[70px] w-[70px] border-2 border-b-blue-600 border-r-yellow-300 border-t-3 border-t-yellow-900 border-black dark:border-white rounded-full ">
                <h1 class=" z-10 text-xl font-bold  border-black dark:text-white rounded-full text-xs justify-center text-center">Load More</h1>
           
            </button>
            </Link>
            </div>
            </div>
           

         </section>
        </div>
    );
}

export default WorkSection;
