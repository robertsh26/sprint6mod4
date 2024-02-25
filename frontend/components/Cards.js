import React from "react";
import Fiqure from './Fiqure'

export default function Card({title, text, imageURL, date}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{text}</p>
            <Fiqure
                imageURL={imageURL}
                caption={date}
            />
        </div>
    )
}