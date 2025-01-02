import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [savedUsers, setSavedUsers] = useState([]);

    const updateUser = (user) => {
        const isSaved = savedUsers.some((savedUser) => savedUser.id === user.id);
        if (isSaved) {
            setSavedUsers(savedUsers.filter((savedUser) => savedUser.id !== user.id));
        } else {
            setSavedUsers([...savedUsers, user]);
        }
    }

    return (
        <UserContext.Provider value={{ savedUsers, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};