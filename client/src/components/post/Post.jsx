import "./post.css"

export default function Post() {
    return(
        <div className="post">
            <img className="postImg"
            src="https://via.placeholder.com/250"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                   <span className="postCat">Music</span> 
                   <span className="postCat">Life</span> 
                </div>
                <span className="postTitle">
                   Coffee, the best kind of bean for any occasion 
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Have you ever had a dream where you could and you could if you and you if you want to you could do anyone if you could and if you if you want to?

            </p>
        </div>
    )
}