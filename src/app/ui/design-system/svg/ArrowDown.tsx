import React from "react";
import "../../../../app/globals.css"

interface Props {
    className?: string;
}

    export const ArrowDown = ({ className = ""}: Props) => {
    return (
        <svg 
        width="14" 
        height="14" 
        id="arrow-down"
        viewBox="0 0 14 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 2871">
                <path 
                id="Line 646" 
                d="M12 4L7 9L2 4" 
                stroke="#505050" 
                strokeWidth="2"
                />
            </g>
        </svg>
        );
    };