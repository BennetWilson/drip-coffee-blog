import "./post.css";
import { useQuery } from "@apollo/client";
import { QUERY_POST } from '../../utils/queries';

import coffeeCherry from '../post/coffee-seeds.jpeg'
import { PlaceholderButton } from "react-bootstrap";

//QUERY_POST




export default function Post() {
   
       const {loading, data} = useQuery(QUERY_POST)
       const posts = data?.posts || []

    //  console.log(posts,loading)
    return(
    <>
        {loading?"still loading" : posts.slice(0).reverse().map(post => {

            return (<>
                <div className="post">
                    <a href={`/post/${post._id}`}>
                <img className="postImg"
                src={post.photo}
                alt=""
                />
                </a>
                <div className="postInfo">
                    <div className="postCats">
                       {/* <span className="postCat">Music</span> 
                       <span className="postCat">Life</span>  */}
                    </div>
                    <a classname='postTitle' href={`/post/${post._id}`}>
                    <span className="postTitle">
                    {post.title} 
                    </span>
                    </a>
                   
                    <span className='singlePostAuthor'>Author: <b>{post.username}</b></span>
                </div>
                <p className="postDesc">{post.desc}
                </p>
                <span className="postDate">{post.createdAt}</span>
            </div>
            </>
            )
        })
        
        }
     
        </>
    )


}