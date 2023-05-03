import React, { useState } from 'react';
import { FaRegHandPointRight } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ data }) => {
    const likedId = [];
    const { id, recipeName, image, ingredients, rating, cookingMethod } = data;
    const [liked, setLiked] = useState(null);

    const handleFavoriteBtn = (id) => {
        const existId = likedId.find(userId => userId === id);
        if (existId) {
            return toast.success('🦄 Wow so easy!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            likedId.push(id);
            setLiked(id);
            return toast("Thanks for liked my recipe !")
        }
    }
    return (
        <div className='shadow-lg p-4 rounded-sm'>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
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
                <h1 className='text-lg'> rating : {rating}</h1>
                <button onClick={() => handleFavoriteBtn(id)} disabled={liked}>
                    <FaRegHandPointRight className={`${liked ? 'text-blue-600' : 'text-gray-600'} w-8 h-8`}></FaRegHandPointRight>
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;