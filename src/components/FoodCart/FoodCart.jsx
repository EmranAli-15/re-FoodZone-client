import React from 'react';
import { FaHandHoldingHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FoodCart = ({ food }) => {
    const { chefName, chefPhoto, yearsOfExperience, numberOfRecipes, numberOfLikes } = food;
    return (
        <div className='border-2 rounded-md p-4'>
            <div className='flex justify-evenly items-center py-4 mb-6'>
                <img className='h-32 w-32 rounded-full opacity-75' src={chefPhoto} alt="" />
                <h1 className='text-2xl font-bold'>{chefName}</h1>
            </div>
            <h1 className='text-xl font-medium'>Number of recipes: {numberOfRecipes}</h1>
            <h1 className='text-xl font-semibold'>Years of experience: {yearsOfExperience}</h1>
            <div className='flex justify-between place-items-center px-4 mt-6'>
                <div className='flex items-center gap-x-3'>
                    <FaHandHoldingHeart className='text-red-400 h-10 w-8'></FaHandHoldingHeart>
                    <h1 className='text-lg'>
                        {numberOfLikes}
                    </h1>
                </div>
                <button className="btn btn-xs btn-success">
                    <Link to="/chefRecipe">view recipes</Link>
                    </button>
            </div>
        </div>
    );
};

export default FoodCart;