import React,{useState} from 'react';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import {useQuery} from '@apollo/client'
import './singlepost.css'

export default function SinglePost () {
    const {loading, data} = useQuery(QUERY_SINGLE_POST)
       
       console.log(data)
   
    return(
        // <>
        // {loading?"still loading" : posts.map(post => {
        //     return (
        
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://via.placeholder.com/250" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">{data.title}
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Ben</b></span>
                    <span className='singlePostDate'>{data.createdAt} </span>
                </div>
                <p className='singlePostDescription'>{data.desc}</p>
            </div>
        </div>
        
            
//         )
//         }
//         )
         
//     }
// </>
    );
}


