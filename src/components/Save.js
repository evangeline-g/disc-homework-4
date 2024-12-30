import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const savedUsers = [];

export default function Save({ user }) {
    const [saved, setSaved] = useState(false);

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
            const index = savedUsers.indexOf(user);
            savedUsers.splice(index, 1);
        } else {
            savedUsers.push(user);
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