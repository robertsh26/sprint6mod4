import React from "react";
import styled, {keyframes} from "styled-components"

const kf = keyframes`
    100% {
        opacity: 1;
        transform: scale(1)
    }
`

const StyledFiqure = styled.figure `
    opacity: 0;
    transform: scale(0);
    animation: ${kf} 0.5s ease-in-out forwards;

    max-width: 50%;

    figcaption {
        font-style: italic;
        font-weight: bold;
        font-size: 1.2em;
    }
`

export default function Fiqure({imageURL, caption}) {
    return (
        <StyledFiqure>
            <img src={imageURL} />
            <figcaption>Awesome pic taken on {caption}</figcaption>
        </StyledFiqure>
    )
}