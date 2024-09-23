import PostCard from "./PostCard";
import { useState,useEffect } from "react";
import axios from "axios";
function PostList(){

const[posts, setPosts] = useState([]);
useEffect(()=> {
    async function fetchPosts () {
        try{
         const responsse = await axios.get('https://31cd5fb9484ea519.mokky.dev/post');
         setPosts(responsse.data);
        } catch(error) {
            console.log(error);
        }
    }
    fetchPosts();
}, []);

    return(
        <div class="all-news-block">
            {posts.map((post) =>(
                <PostCard  key={post.id} post={post}/>
            ))}
        </div>
    );
}

export default PostList;