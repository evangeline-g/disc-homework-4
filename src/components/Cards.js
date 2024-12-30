import React, { useState, useEffect } from "react";
import Pfp from './Pfp.js';
import Save from "./Save.js";

export default function Cards() {
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
        <div className="cards">
            {users.map((user) => (
                <div class="card">
                    <div class="cardlayout">
                        <Pfp image={user.profilepicture} size="large" />
                        <h5>{user.firstname} {user.lastname}</h5>
                    </div>
                    <h6>{user.bio}</h6>
                    {/* <div class="cardlayout">
                        <div class="label">{props.label1}</div>
                        <div class="label">{props.label2}</div>
                        <div class="label">{props.label3}</div>
                    </div> */}
                    <div class="cardlayout">
                        <Save user={user} />
                        {/* displays the list of mutuals (friends of the user who are also friends with the viewer)
                        <div>
                            <div class="cardlayout">
                                {props.mutuals.map(mutual => (
                                    <Pfp image={mutual} size="small" />
                                ))}
                            </div>
                            /* but if there's no mutual friend, display nothing
                            <h6>{props.mutuals.length === 0 ? "" : "mutual"}</h6>
                        </div> */}
                    </div>
                </div>
            ))
            }
        </div>
    )
}