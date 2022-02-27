import "./post.css";
import { useQuery } from "@apollo/client";
import { QUERY_POST } from '../../utils/queries';

import coffeeCherry from '../post/CoffeeCherry.png'

//QUERY_POST




export default function Post() {
   
       const {loading, data} = useQuery(QUERY_POST)
       const posts = data?.posts || []
    //  console.log(posts,loading)
    return(
    <>
        {loading?"still loading" : posts.map(post => {

            return (<>
                <div className="post">
                <img className="postImg"
                src={coffeeCherry}
                alt=""
                />
                <div className="postInfo">
                    <div className="postCats">
                       <span className="postCat">Music</span> 
                       <span className="postCat">Life</span> 
                    </div>
                    <span className="postTitle">
                    {post.title} 
                    </span>
                    <hr/>
                    <span className="postDate">{post.createdAt}</span>
                </div>
                <p className="postDesc">{post.desc}
                </p>
            </div>
            </>
            )
        })
        
        }
     
        </>
    )


}