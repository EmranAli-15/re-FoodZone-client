import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefRecipe = () => {
    const data = useLoaderData();
    const { chefPhoto, chefName, yearsOfExperience, numberOfRecipes, numberOfLikes, bio, recipe } = data;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 p-4 shadow-xl">
                <div>
                    <img className='rounded-lg' src={chefPhoto} alt="Album" />
                </div>
                <div className='p-10'>
                    <div className='flex gap-x-24 mb-6 items-center'>
                        <h2 className="text-3xl font-bold">{chefName}</h2>
                        <div className='flex gap-x-2 items-center'>
                            <FaHeart className='text-red-400 h-8 w-6'></FaHeart>
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
            <div className='grid md:grid-cols-2 gap-8 my-8 px-4'>
                {
                    recipe.map((data, index) => <RecipeCard key={index} data={data}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;