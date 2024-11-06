import React from "react";

interface Props {
    className?: string;
}

    export const CheckMark = ({ className = ""}: Props) => {
    return (
        <svg 
        width="10" 
        height="8" 
        viewBox="0 0 10 8" 
        fill="#E0AA3E" 
        xmlns="http://www.w3.org/2000/svg">
            <path 
            d="M1 4.00024L4 7.00024L9 1.00024" stroke="white"/>
        </svg>
        );
    };