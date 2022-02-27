import React from 'react';
import './recipe.css';

import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/Sidebar';
import DripCover from '../../Assets/Drip-Cover.jpeg';

export default function Recipe() {
    
    return (
        <>
        <Header />
        <div>
            <div className='recipe'>
                <div className='recipeImg'>
                    <img src={DripCover} alt="" className="recipeImg" />
                </div>
                <div className='recipeSection'>
                    <div className='recipeInfo'>
                        <h3 className="recipeTitle">Coffee Cherry Seed Juice</h3>
                        <p className="recipeP">
                            With a global industy worth over $102 billion and employing 125 million people, it's safe to say 
                            coffee is a craze that isn't going away any time soon. On average, there are 400 billion cups consumed 
                            each year.

                            Add a box to reveal a hidden answer to a question
                            Question: Which country consumes the most coffee per capita?
                            Answer: Finland at about 26lbs per year!
                        </p>
                        <ul className="recipesList">
                            <li className='recipeItem'></li>
                            <li className='recipeItem'></li>
                            <li className='recipeItem'></li>
                            <li className='recipeItem'></li>
                            <li className='recipeItem'></li>
                        </ul>
                    </div>
                    <SideBar />
                </div>
            </div>
        </div>
        </>
    );

}