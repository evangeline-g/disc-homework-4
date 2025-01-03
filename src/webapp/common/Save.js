import React, { useState, useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserContext } from "../context/UserContext";

export default function Save({ user }) {
    const { savedUsers, updateUser } = useContext(UserContext);
    const isSaved = savedUsers.some((savedUser) => savedUser.id === user.id);
    const [saved, setSaved] = useState(isSaved);

    const handleClick = () => {
        if (saved) {
            setSaved(false);
        } else {
            setSaved(true);
        }
        updateUser(user);
    }

    // change display of elements in accordance to the saved/not saved state of the user
    return (
        <div class="save" onClick={handleClick}>
            {saved ? <FaHeart size={28} /> : <FaRegHeart size={28} />}
            <h6>{saved ? "unsave" : "save"}</h6>
        </div>
    )
}