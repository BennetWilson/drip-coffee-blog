import React from 'react';
import './singlepost.css'

export default function SinglePost () {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://via.placeholder.com/250" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">You're right? Why pay $200 for 20 grams of coffee.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Ben</b></span>
                    <span className='singlePostDate'>1 hour ago </span>
                </div>
                <p className='singlePostDescription'>Because you're a champion. If you're one of the people who doesn't have the stomach to spend two hundred hard earned dollars on ingedients to make a cup of bean juice, you don't belong here. Get out of my sight.</p>
            </div>
        </div>
    );
}


