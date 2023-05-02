import React from 'react';
import { FaHandHoldingHeart } from "react-icons/fa";

const FoodCart = ({ food }) => {
    const { chefName, chefPhoto, yearsOfExperience, numberOfRecipes, numberOfLikes } = food;
    return (
        <div className='border-2 rounded-lg p-4'>
            <div className='flex justify-evenly items-center mb-6'>
                <img className='h-32 w-32 rounded-full' src={chefPhoto} alt="" />
                <h1 className='text-2xl font-bold'>{chefName}</h1>
            </div>
            <h1 className='text-xl font-semibold'>Number of recipes: {numberOfRecipes}</h1>
            <h1 className='text-xl font-semibold'>Years of experience: {yearsOfExperience}</h1>
            <div className='flex justify-between mt-6'>
                <div>
                    <div>
                        <FaHandHoldingHeart className='text-orange-500 h-10 w-10'></FaHandHoldingHeart>
                    </div>
                    <div>
                        {numberOfLikes}
                    </div>
                </div>
                <button>view recipes</button>
            </div>
        </div>
    );
};

export default FoodCart;