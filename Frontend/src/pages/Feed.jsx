import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://ik.imagekit.io/ikmedia/website-2024/about-us-page/team_pic_hero.jpg?updatedAt=1712717876739&tr=w-770,h-417",
            caption: "A beautiful day",
        }
    ]);
    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then ((res) =>{
            setPosts(res.data.posts)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <section className="feed-section">
            <h2>Feed</h2>

            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className="post-card"> 
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : ( 
                <h1>No posts available</h1>
            )}
            
        </section>
    );
};

export default Feed;