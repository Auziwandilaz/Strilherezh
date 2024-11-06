import clsx from "clsx";
import { Typography } from "../../design-system/typography/Typography";

interface Props { 
    list?: any;
    title?: string;
    round?: boolean
    className?: string;
}


export const FilterCard = ({
    list, 
    title, 
    round = false,
    className,
}:Props) => {
    return (
        <form action="/filter" method="post" className="flex flex-col gap-[1.25rem] items-top justify-between h-fit w-[15rem] px-[3.125rem]">
                <label>
                    <Typography
                    variant="p"
                    color="black"
                    font="outfit"
                    className="font-medium"
                    >
                        {title}
                    </Typography>
                </label>
                {list.map(content => (
                    <p className="flex items-center justify-between w-fit h-fit">
                        <input 
                        type={clsx(round ? "radio" : "checkbox")} 
                        name={clsx(`${title}`)} 
                        value=""
                        className={clsx(
                            round ? 
                            "appearance-none forced-colors:appearance-auto accent-gold text-gold w-[14px] h-[14px] border-[1px] border-solid border-black rounded-[14px] bg-transparent mr-[0.62rem] checked:border-white checked:text-white checked:bg-gold checked:ring checked:ring-gold cursor-pointer transition-all ease-out delay-75 relative"
                            :
                            "appearance-none forced-colors:appearance-auto accent-gold w-[14px] h-[14px] border-[1px] border-solid border-black default:ring-2 rounded-none bg-transparent text-white checked:bg-gold mr-[0.62rem] cursor-pointer transition-all ease-out delay-75 relative",
                        )}
                        />
                        <svg className="absolute z-[5] inset-0 fill-current invisible peer-checked:visible" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4.00024L4 7.00024L9 1.00024" stroke="white"/>
                        </svg>
                        <label>
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className="font-extralight"
                            >
                                {content}
                            </Typography>
                        </label>
                    </p>
                ))}
        </form>
    );
}
