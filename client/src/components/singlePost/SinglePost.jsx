import React, {useState} from 'react';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import {useQuery} from '@apollo/client';
import './singlepost.css';

export default function SinglePost () {
    const {postId} = useParams();
    console.log(postId);
    const [cardData, setCardData] = useState({})
    const {loading, data} = useQuery(QUERY_SINGLE_POST, {
        variables: {postId: postId }
    });
    //  useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);

    const post = data?.singlePost || {};
    console.log(post);
    console.log(data);
    if (loading) {
        return <div>Loading...</div>;
      }

    // setCardData(post);
    
        return(
   
        <>
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {/* post.photo needs ../ backticks like line 59 write.jsx */}
                <img src={post.photo} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">{post.title}
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>{post.username}</b></span>
                    <span className='singlePostDate'>{post.createdAt} </span>
                </div>
                <p className='singlePostDescription'>{post.desc}</p>
            </div>
        </div>
        </>
            
    )
            
}



