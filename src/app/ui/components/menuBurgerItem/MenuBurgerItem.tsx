"use client";

import clsx from "clsx";
import { ArrowIcon } from "../../design-system/svg/ArrowIcon";
import { Button } from "../../design-system/button/Button";
import { Typography } from "../../design-system/typography/Typography";
import { useEffect, useState } from "react";

interface Props {
    variant?: "primary" | "show-icon";
    font?: "outfit" | "quicksand";
    className?: string;
    icon?: any;
    children?: React.ReactNode;
}

export const MenuBurgerItem = ({
    variant = "primary",
    font = "outfit",
    className,
    children,
}: Props) => {
    switch (variant) {
        case "primary": 
            return (    
                <li className="w-full h-fit flex justify-between align-middle">
                    <a href="">
                        <Typography
                        font="outfit"
                        variant="h4"
                        color="black"
                        className={clsx(
                            "animate font-bold"
                        )}
                        >
                            {children}
                        </Typography>
                    </a>
                    <Button
                    variant="icon"
                    >
                        <ArrowIcon></ArrowIcon>
                    </Button>
                </li>
            );
        case "show-icon": 
            return (
                <li className="w-full h-fit flex justify-between align-middle">
                    <a href="">
                        <Typography
                        font="outfit"
                        variant="h4"
                        color="black"
                        className={clsx(
                            "animate font-bold"
                        )}
                        >
                            {children}
                        </Typography>
                    </a>
                    <Button
                    variant="icon"
                    >
                        <ArrowIcon></ArrowIcon>
                    </Button>
                </li>
            )
    }
} 

