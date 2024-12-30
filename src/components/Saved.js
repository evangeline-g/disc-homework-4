import React from "react";
import { savedUsers } from "./Save";
import Pfp from "./Pfp";
import { FaTimes, FaSearch, FaEnvelope } from "react-icons/fa";

export default function Saved() {
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
                <div className="cards">Todo</div>
                <footer>
                    <h4>Made by Evangeline Gong</h4>
                    <FaEnvelope size={28} color='#3d3d3d' />
                    <div class="logo">Logo</div>
                </footer>
            </div>
        )
}