import clsx from "clsx";
import { Children } from "react";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const ProductDescCard = ({
    className,
    children,
}:Props) => {
    return (
        <article
        className="bg-white py-[2.5rem] px-[1.88rem] w-fit h-auto"
        >
            {children}
        </article>
    );
}