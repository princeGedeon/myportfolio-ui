import React from 'react';
import BlocWork from './bloc_work';
import Card from './card';

const Menu = ({menuItem,searchTerm}) => {
    
    return (
        <div className=' bg-blue grid gap-10  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {

                menuItem

                .filter((val)=> {
                    return val.title.includes(searchTerm);
                })

             
                
                
                .map((val)=>{
                    return <BlocWork className="w-full" item={val} key={val.id}/>
                    
                    
                    
        
                })
            }
            
        </div>
    );
}

export default Menu;
