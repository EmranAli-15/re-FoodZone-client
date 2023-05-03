import React from 'react';
import { FaRegHandPointRight } from "react-icons/fa";

const RecipeCard = ({ data }) => {
    const { recipeName, image, ingredients, rating, cookingMethod } = data;
    return (
        <div className='shadow-lg p-4 rounded-sm'>
            <div className='flex items-center justify-around'>
                <img className='w-[200px] h-[200px] rounded-lg' src="https://i.ibb.co/Lr95pVf/chef-1.jpg" alt="" />
                <h1 className='text-xl font-medium'>{recipeName}</h1>
            </div>
            <div className='my-4'>
                {
                    ingredients.map((list, index) => <li key={index}>{list}</li>)
                }
            </div>
            <p><span className='text-lg font-semibold'>Cooking Method :</span> {cookingMethod}</p>
            <hr className='mt-4' />
            <div className='flex justify-between mt-6'>
                <h1> rating : {rating}</h1>
                <button><FaRegHandPointRight className='text-blue-600 w-10 h-10'></FaRegHandPointRight></button>
            </div>
        </div>
    );
};

export default RecipeCard;