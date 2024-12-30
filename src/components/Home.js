import React from "react";
import { FaTimes, FaSearch, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";
import Cards from './Cards.js';
import Pfp from "./Pfp.js";

export default function Home() {

    return (
        <div>
            <header>
                <div class="searchbar">
                    <h6>Search users...</h6>
                    <FaTimes />
                </div>
                <FaSearch size={28} />
                <button>Filter</button>
                <h3>Myfirstname Lastname</h3>
                <Pfp image="https://cdn-icons-png.flaticon.com/512/3093/3093496.png" size="large" />
            </header>
            <Cards />
            <footer>
                <h4>Made by Evangeline Gong</h4>
                <FaEnvelope size={28} color='#3d3d3d' />
                <div class="logo">Logo</div>
            </footer>
        </div>
    )
}