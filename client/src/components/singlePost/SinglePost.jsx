import React from 'react';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import './singlepost.css'

export default function SinglePost () {
    const { loading, data } = useQuery(QUERY_SINGLE_POST);

    const postList = data?.posts || [];

    const [formData, setFormData] = useState({
        
    })
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://via.placeholder.com/250" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">This is what you see after you click on one of the posts on the main page
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Ben</b></span>
                    <span className='singlePostDate'>1 hour ago </span>
                </div>
                <p className='singlePostDescription'>This would be that single description called using QUERY_SINGLE_POST.</p>
            </div>
        </div>
    );
}


