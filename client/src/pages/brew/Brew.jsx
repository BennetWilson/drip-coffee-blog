import React from 'react';
import './brew.css';

import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/Sidebar';
import DripCover from '../../Assets/Drip-Cover.jpeg';

export default function Brew() {
    
    return (
        <>
        <Header />
        <div>
            <div className='brew'>
                <div className='brewImg'>
                    <img src={DripCover} alt="" className="brewImg" />
                </div>
                <div className='aboutSection'>
                    <h3 className="brewTitle">Brewing Methods</h3>
                    <SideBar />
                </div>
            </div>
        </div>
        </>
    );
}