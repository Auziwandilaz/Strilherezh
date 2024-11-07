import clsx from "clsx"
import { Children, ReactNode } from "react";
import Hermine from "../../design-system/svg/Hermine";

interface Props {
    variant?: "primary";
    className?: string;
    children?: React.ReactNode;
}

export const HistorySection = ({
    variant,
    className,
    children,
}:Props) => {
    switch (variant) {
        case "primary": 
        return (
            <div className="bg-white w-full h-fit px-[2.5rem] py-[6.25rem] text-center flex flex-col items-center justify-center">
                <Hermine></Hermine>
                <div className="w-[43.8rem] h-fit text-center max-md:w-[30rem]">
                    {children}
                </div>
            </div>
        )
    }
}