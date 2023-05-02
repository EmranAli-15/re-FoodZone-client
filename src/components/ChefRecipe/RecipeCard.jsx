import React from 'react';

const RecipeCard = ({data}) => {
    const {recipeName, image, ingredients} = data;
    return (
        <div>
            <p>{image}</p>
        </div>
    );
};

export default RecipeCard;