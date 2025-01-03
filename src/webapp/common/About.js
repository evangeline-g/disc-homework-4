import React from "react";
import Pfp from '../common/Pfp.js';
import Save from "./Save.js";
import { FaEdit } from "react-icons/fa";

export default function About(props) {
    return (
        <div className="about">
            <div>
                <div className="cardlayout spreadlayout">
                    {props.page === "profile" ?
                        <FaEdit size={35} color="#3d3d3d" />
                        : <Save user={props.user}/>}
                    <div className="verticalCenter">
                        <div className="cardlayout">
                            <div className="label infoLabel">{props.user.gender}</div>
                            <div className="label infoLabel">{props.user.major}</div>
                            <div className="label infoLabel">{props.user.year}</div>
                        </div>
                        <h2>{props.user.firstname} {props.user.lastname}</h2>
                    </div>
                </div>
                <h3>{props.user.bio}</h3>
                <h5>{props.user.intro}</h5>
            </div>
            <div className="verticalCenter">
                <Pfp size="large" />
                <h5>Talk to me about...</h5>
                <div className="label">label1</div>
                <div className="label">label2</div>
                <div className="label">label3</div>
            </div>
            <div className="smallCards">
                <h5>{props.page === "profile" ?
                        "Your friends:"
                        : `${props.user.name} is friends with...` }</h5>
                <div className="cardlayout">
                    <div className="card smallCard">
                        <Pfp />
                        <h5>Some user</h5>
                    </div>
                    <div className="card smallCard">some other card</div>
                </div>
            </div>
        </div>
    )
}