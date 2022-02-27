import React  from 'react';
import './Home.css'

import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/Sidebar'
// import Post from '../../components/post/Post'

import {useState, useEffect} from "react"


export default function Home () {
    const [posts, setPosts] = useState([]);


    return (
        <>
        <Header />
        <div className ='home'>
            
            <Posts />
            <SideBar />

        </div>
        </>
    );
}


