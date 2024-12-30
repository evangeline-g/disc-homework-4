import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaHeart, FaUser } from "react-icons/fa";

export default function Layout() {
    const [chosen, setChosen] = useState("home");

    const switchTab = (index) => {
        setChosen(index);
    }

    // change the chosen state and display of tabs in response to mouse click
    return (
        <>
        <nav>
            <div class="logo">Logo</div>
            <Link class={`tab ${chosen === "home" ? "chosen" : ""}`} onClick={() => switchTab("home")} to="/">
                <FaHome />
                <h5>Home</h5>
            </Link>
            <Link class={`tab ${chosen === "saved" ? "chosen" : ""}`} onClick={() => switchTab("saved")} to="/saved">
                <FaHeart />
                <h5>Saved</h5>
            </Link>
            <Link class={`tab ${chosen === "profile" ? "chosen" : ""}`} onClick={() => switchTab("profile")} to="/profile">
                <FaUser />
                <h5>Profile</h5>
            </Link>
        </nav>
        
        <Outlet />
        </>
    );
}