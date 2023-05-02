import React, { useEffect, useState } from 'react';
import FoodCart from '../FoodCart/FoodCart';

const Home = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://chef-recipes-emranali-15.vercel.app/chef')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <div className='h-[200px] md:h-[600px]'>
                <div className='flex bg-gray-500 ps-10' style={{ backgroundImage: 'url(https://i.ibb.co/ydCFN9r/banner.webp)', width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
                    <div className='flex flex-col gap-y-10 justify-center' style={{fontFamily: 'Dancing Script'}}>
                        <h1 className='text-white text-5xl font-bold text-orange-400'>Food Zone</h1>
                        <h1 className='text-white text-5xl'>Good Food, <br />Good Health</h1>
                    </div>
                </div>
            </div>
            <h1 className='text-center mt-16 text-3xl' style={{fontFamily:'Dancing Script'}}>
                Your Favorite Chefs
            </h1>
            <div className='grid md:grid-cols-3 gap-6 p-10'>
                {
                    foods.map(food => <FoodCart key={food.id} food={food}></FoodCart>)
                }
            </div>
        </div>
    );
};

export default Home;