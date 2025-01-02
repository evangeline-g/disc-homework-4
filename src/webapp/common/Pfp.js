import React from "react";

export default function Pfp(props) {

    return (
        <img
          src={props.image}
          className={`pfp ${props.size === "small" ? "small" : ""}`}
          alt=""
        />
      )
}