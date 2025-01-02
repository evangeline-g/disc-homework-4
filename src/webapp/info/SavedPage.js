import React, { useContext } from "react";
import Card from "../common/Card";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { UserContext } from "../context/UserContext";

export default function Saved() {

    const { savedUsers } = useContext(UserContext);

    return (
        <div>
            <Header />
            <div className="cards">
                {savedUsers.map((savedUser) => (
                    <Card user={savedUser} />
                ))}
            </div>
            <Footer />
        </div>
    )
}