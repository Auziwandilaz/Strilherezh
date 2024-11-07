import clsx from "clsx"
import { Children, ReactNode } from "react";
import Image from "next/image";

interface Props {
    variant?: "barrels" | "cliff-sea" | "fields";
    className?: string;
    children?: React.ReactNode;
}

export const HistoryBannerCard = ({
    variant,
    className,
    children,
}:Props) => {
    switch (variant) {
        case "barrels":
        return (
            <div className="relative w-full h-[30rem] py-[11.25rem] px-[8.12rem]">
                <Image
                    src="/img/tonneaux-bois-placeholder.webp"
                    alt="fond de présentation de tonneaux en bois"
                    className="w-full h-full object-cover brightness-50"
                    layout="fill"
                />
                    {children}
            </div>
        );
        case "cliff-sea":
        return (
            <div className="relative w-full h-[30rem] py-[11.25rem] px-[8.12rem]">
                <Image
                    src="/img/cliff-sea-placeholder.webp"
                    alt="fond de présentation d'une vue sur la mer"
                    className="w-full h-full object-cover brightness-50"
                    layout="fill"
                />
                    {children}
            </div>
        );
        case "fields":
        return (
            <div className="relative w-full h-[30rem] py-[11.25rem] px-[8.12rem]">
                <Image
                    src="/img/fields-placeholder.webp"
                    alt="fond de présentation d'un champ de pommiers"
                    className="w-full h-full object-cover brightness-50"
                    layout="fill"
                />
                    {children}
            </div>
        );
        
    };
}