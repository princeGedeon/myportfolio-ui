import React from 'react';
import Card from './card';

const Menu = ({menuItem}) => {
    return (
        <div className=' grid gap-5 justify-center items-center  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {
                menuItem.map((item)=>{
                    return <Card className="w-full" item={item} key={item.id}/>
                    
                    
                    
        
                })
            }
            
        </div>
    );
}

export default Menu;
