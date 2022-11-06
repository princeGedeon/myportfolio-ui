import React from 'react';
import BlocWork from './bloc_work';
import Card from './card';

const MenuThree = ({menuItem,searchTerm}) => {
    
    return (
        <div className='  grid gap-10  sm:grid-cols-2 md:grid-cols-3 mx-auto px-auto'>
            {

                menuItem

                .filter((val)=> {
                    return val.title.includes(searchTerm);
                })

                .slice(0,3)

             
                
                
                .map((val)=>{
                    return <BlocWork className="w-full" item={val} key={val.id}/>
                    
                    
                    
        
                })
            }
            
        </div>
    );
}

export default MenuThree;
