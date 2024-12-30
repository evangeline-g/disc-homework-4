import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Save({ user }) {
    const [saved, setSaved] = useState(false);
    const [savedUsers, setSavedUsers] = useState([])

    const switchSaved = () => {
        if (saved) {
            setSaved(false);
        } else {
            setSaved(true);
        }
    }

    // update the saved list of users to include or remove users when the saved state is changed
    useEffect(() => {
        if (savedUsers.includes(user)) {
            setSavedUsers(savedUsers.filter((saveduser, i) => saveduser !== user))
        } else {
            setSavedUsers([...savedUsers, user])
        };
    }, [saved])

    // change display of elements in accordance to the saved/not saved state of the user
    return (
        <div class="save" onClick={switchSaved}>
            {saved ? <FaHeart size={28} /> : <FaRegHeart size={28} />}
            <h6>{saved ? "unsave" : "save"}</h6>
        </div>
    )
}