import React from 'react';
import './Home.css'

import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/Sidebar'
import axios from "axios"
import {useState, useEffect} from "react"


export default function Home () {
    const [posts, setPosts] = useState([]);

//     useEffect(() =>{
//         const fetchPosts = async () =>{
//             axios.get("")
//         }
// },[])

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


