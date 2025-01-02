import React from "react";
import Pfp from "./Pfp";
import { FaTimes, FaSearch } from "react-icons/fa";

export default function Header() {
    return (
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
    )
}