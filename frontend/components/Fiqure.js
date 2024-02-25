import React from "react";

export default function Fiqure({imageURL, caption}) {
    return (
        <fiqure>
            <img src={imageURL} />
            <figcaption>Awesome pic taken on {caption}</figcaption>
        </fiqure>
    )
}