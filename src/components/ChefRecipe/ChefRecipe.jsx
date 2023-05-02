import React from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefRecipe = () => {
    const data = useLoaderData();
    const { chefPhoto, chefName, yearsOfExperience, numberOfRecipes, numberOfLikes, bio, recipe } = data;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div>
                    <img src={chefPhoto} alt="Album" />
                </div>
                <div className='p-10'>
                    <div className='flex gap-x-24 mb-6 items-center'>
                        <h2 className="text-3xl font-bold">{chefName}</h2>
                        <div className='flex gap-x-2 items-center'>
                            <FaHandHoldingHeart className='text-red-400 h-10 w-8'></FaHandHoldingHeart>
                            <p className='font-semibold text-lg'>{numberOfLikes}</p>
                        </div>
                    </div>
                    <article>MySelf : {bio}</article>
                    <div className='flex justify-evenly mt-24 items-center'>
                        <h2>Recipes : {numberOfRecipes} items</h2>
                        <h2>Experience : {yearsOfExperience} years</h2>
                    </div>
                </div>
            </div>
            <div>
                {
                    recipe.map((data, index) => <RecipeCard key={index} data={data}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;