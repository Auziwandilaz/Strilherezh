import clsx from "clsx";
import { Typography } from "../../design-system/typography/Typography";
import { CrossIconOutline } from "../../design-system/svg/CrossOutlineIcon";
import { FilterIcon } from "../../design-system/svg/FilterIcon";
import { ReloadIcon } from "../../design-system/svg/ReloadIcon";
import { ArrowDown } from "../../design-system/svg/ArrowDown";



interface Props {
    variant?: "closed" | "filter-by" | "contenant" | "volume";
    className?: string;
}

export const FilterBar = ({
    variant = "closed",
    className,
}:Props) => {
    switch (variant) {
        case "closed":
        return (
            <div className="bg-white h-fit w-full py-[3.125rem] px-[3.125rem] flex flex-row jusify-between align-middle"
            >
                <div
                className="flex flex-row align-middle justify-between gap-[2.81rem] w-fit h-fit">
                    <div className="flex gap-[0.62rem]">
                        <Typography 
                        variant="p"
                        color="gray"
                        font="outfit"
                        className="after: content-[''] after: h-5/6 w-px bg-gray "
                        >
                            Trier par
                        </Typography>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-bold"
                        >
                            Nouveautés
                        </Typography>
                    </div>
                </div>

            </div>
        );
    }
}