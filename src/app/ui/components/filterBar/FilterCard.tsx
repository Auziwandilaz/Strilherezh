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
        <form action="/filter" method="post" className="flex flex-col gap-[1.25rem] items-top justify-between h-fit w-fit px-[3.125rem]">
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
                            "text-gold w-[14px] h-[14px] border-px border-solid border-black rounded-[14px] bg-transparent focus:ring-gold focus:ring-2"
                            :
                            "w-[14px] h-[14px] border-px border solid border-black bg-transparent text-white focus:bg-gold"
                        )}
                        />
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
