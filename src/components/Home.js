import React from "react";
import { FaTimes, FaSearch, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";
import Card from './Card.js';
import Pfp from "./Pfp.js";

export default function Home() {
    // the array of users
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetch API whenever only on the first render
    useEffect(() => {
        const fetchUsers = async () => {
            // this is a server that hosts all our data
            const response = await fetch(
                "https://disc-assignment-5-users-api.onrender.com/api/users"
            );
            const data = await response.json();
            // when the database responds, we are no longer loading
            setLoading(false);
            setUsers(data);
        };

        fetchUsers();
    }, []);

    // based on the loading status of the page, show loading or the page content
    return loading ? (
        <div className="cards">Loading...</div>
    ) : (
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
            <div className="cards">
            {users.map((user) => (
                <Card user={user} />
            ))
            }
        </div>
            <footer>
                <h4>Made by Evangeline Gong</h4>
                <FaEnvelope size={28} color='#3d3d3d' />
                <div class="logo">Logo</div>
            </footer>
        </div>
    )
}