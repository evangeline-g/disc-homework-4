import React from "react";
import { useState, useEffect } from "react";
import Card from '../common/Card.js';
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";

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
            <Header />
            <div className="cards">
                {users.map((user) => (
                    <Card user={user} />
                ))}
            </div>
            <Footer />
        </div>
    )
}