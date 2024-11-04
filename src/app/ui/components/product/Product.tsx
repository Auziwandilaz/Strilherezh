"use client";

import clsx from "clsx";
import Image from "next/image";
import { HeartIcon } from "../../design-system/svg/HeartIcon";
import { Typography } from "../../design-system/typography/Typography";
import { useEffect, useState } from "react";

interface Props {
    favorie?: boolean;
    className?: string;
}

export const Product = ({ favorie = false, className }: Props) => {

    const [isFavorie, setIsFavorie] = useState(favorie);

    const handleToggleFavorie = () => {
        setIsFavorie(!isFavorie);
    };

    useEffect(() => {

    }, [isFavorie])


    return (
        <main className="">
            
        </main>
    );
};