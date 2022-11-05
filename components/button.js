import React from 'react';

const Button = ({filter,button}) => {
    return (
        <div className='my-5 flex flex-wrap justify-center items-center gap-5'>

           {
            button.map((cat,i)=>{
                return <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={()=>filter(cat)} type='button'>{cat}</button>
            })
           }
        </div>
    );
}

export default Button;
