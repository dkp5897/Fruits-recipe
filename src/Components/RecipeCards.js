import React from "react";
import "./RecipeCards.css"

const RecipeCards=({item,index}) => {
  console.log(index);
  return (
    <>
      <div className="cards" key={index}>
        <div className="card">
         <img src={item.recipe.image} alt='recipe'/>
          <div className="card__info">
            <span className="card__category">{item.recipe.label}</span>
            <h3 className="card__title">{item.recipe.source}</h3>
            <a href={item.recipe.url} target="_blank" rel="noreferrer">
              <button>Details</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCards;
