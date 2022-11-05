import React,{useState} from 'react';
import items from './../../datas/allDatas';
import Menu from '../../components/menu';
import Button from '../../components/button';

const allCategories=['All',...new Set(items.map(item => item.category))];


const Index = () => {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setbuttons] = useState(allCategories);

    const filter=(button)=>{
        if(button=== 'All'){
            setMenuItem(items);
            return ;
        }
        const filterdData = items.filter(item => item.category === button);
        setMenuItem(filterdData);
    }
    return (
        <div>
            <div className='title my-5 text-center'>
                <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">Portfolio
                    <span className="text-yellow-500">Filter</span>s
                    </h1>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perferendis?</p>
        
 <Button button={buttons} filter={filter} />    
 <div className='mt-5 mx-10'>          
<Menu menuItem={menuItem}/>
</div> 
               
            </div>
        </div>
    );
}

export default Index;
