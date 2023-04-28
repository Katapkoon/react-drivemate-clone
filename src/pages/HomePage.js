import React from "react";
import "./home-page.css"
import ResponsiveAppBar from '../components/AppBar';
import { Component,useState } from 'react';
function Home() {
    const token = localStorage.getItem('accessToken');
    const [authorized, setAuthorized] = useState(false);
    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/';
    }
    return (
        <div>
            <div>
                { token ? (<ResponsiveAppBar toChild = {true} logOut = {handleLogOut}/>) : (<ResponsiveAppBar toChild = {false}/>) }
            </div>
            This is the home page.
        </div>
    )
}

export default Home;