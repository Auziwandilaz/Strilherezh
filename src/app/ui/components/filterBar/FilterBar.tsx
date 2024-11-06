import clsx from "clsx";
import { Typography } from "../../design-system/typography/Typography";
import { CrossIconOutline } from "../../design-system/svg/CrossOutlineIcon";
import { FilterIcon } from "../../design-system/svg/FilterIcon";
import { ReloadIcon } from "../../design-system/svg/ReloadIcon";
import { ArrowDown } from "../../design-system/svg/ArrowDown";
import { FilterCard } from "./FilterCard";


interface Props {
    variant?: "closed" | "filter-by" | "contenant" | "volume" | "all-filters";
    className?: string;
}

export const FilterBar = ({
    variant = "closed",
    className,
}:Props) => {
    const typoStyle = "font-medium";
    const underlineAnimationBlack =
    "bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out cursor-pointer";
    const rotate180 = "group-hover:animate-rotate180 transition-all duration-300 ease-out cursor-pointer"


    switch (variant) {
        case "closed":
        return (
            <div className="bg-white h-fit w-full py-[1.25rem] px-[3.125rem]  flex flex-row justify-between items-center border-y border-lightgray"
            >
                <div
                className="flex flex-row items-center justify-between gap-[2.81rem] w-fit h-fit">
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit">
                        <Typography 
                        variant="p"
                        color="gray"
                        font="outfit"
                        className="filter-bar-after"
                        >
                            Trier par
                        </Typography>
                        <button
                        className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.31rem]"
                        >
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                            >
                                Nouveautés
                            </Typography>
                            <ArrowDown
                            ></ArrowDown>
                        </button>
                    </div>
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit">
                        <Typography 
                        variant="p"
                        color="gray"
                        font="outfit"
                        className="filter-bar-after"
                        >
                            Contenant
                        </Typography>
                        <button
                        className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.31rem]"
                        >
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                            >
                                Tout
                            </Typography>
                            <ArrowDown
                            className="group-hover:filter-rotate-arrow"
                            ></ArrowDown>
                        </button>
                    </div>
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit">
                        <Typography 
                        variant="p"
                        color="gray"
                        font="outfit"
                        className="filter-bar-after"
                        >
                            Volume
                        </Typography>
                        <button
                        className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.31rem]">
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                            >
                                Tout
                            </Typography>
                            <ArrowDown
                            className="group-hover:filter-rotate-arrow"
                            ></ArrowDown>
                        </button>
                    </div>
                </div>
                <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                        <Typography 
                        variant="p"
                        color="gray"
                        font="outfit"
                        className="w-fit filter-bar-after"
                        >
                            16 Résultat(s) Trouvé(s)
                        </Typography>
                        <button
                        className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.62rem]"
                        >
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                            >
                                Filtres
                            </Typography>
                            <FilterIcon></FilterIcon>
                        </button>
                    </div>
            </div>
        );
        case "filter-by":
        return (
            <div className="bg-white h-fit w-full flex flex-col items-center justify-center">
                <div className="bg-white h-fit w-full py-[3.125rem] px-[3.125rem] flex flex-row jusify-between items-center border-y border-lightgray"
                >
                    <div
                    className="flex flex-row items-center justify-between gap-[2.81rem] w-fit h-fit">
                        <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
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
                            className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                            >
                                Nouveautés
                            </Typography>
                            <ArrowDown></ArrowDown>
                        </div>
                        <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                            <Typography 
                            variant="p"
                            color="gray"
                            font="outfit"
                            className="after: content-[''] after: h-5/6 w-px bg-gray "
                            >
                                Contenant
                            </Typography>
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                            >
                                Tout
                            </Typography>
                            <ArrowDown></ArrowDown>
                        </div>
                    </div>
                    <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                            <Typography 
                            variant="p"
                            color="gray"
                            font="outfit"
                            className="after: content-[''] after: h-5/6 w-px bg-gray "
                            >
                                16 Résultat(s) Trouvé(s)
                            </Typography>
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                            >
                                Filtres
                            </Typography>
                            <FilterIcon></FilterIcon>
                    </div>
                </div>
                <ul className="list-none px-[3.125rem] py-[1.875rem] flex flex-col align-top justify-start gap-y-[1.25rem]">
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight before:content-[''] before: w-[10px] before:h-px bg-black mr-[0.2rem]"
                        >
                            Nouveautés
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight before:content-[''] before: w-[10px] before:h-px bg-black mr-[0.2rem]"
                        >
                            Prix Croissant
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight before:content-[''] before: w-[10px] before:h-px bg-black mr-[0.2rem]"
                        >
                            Prix décroissant
                        </Typography>
                    </li>
                </ul>
                <div className="flex flex-row items-center justify-center bg-white py-[0.62rem] px-[0.62rem]">
                    <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] w-full h-fit after:content-[''] after:h-[1rem] after:w-px after:mx-[0.62rem]">
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                        >
                            Réinitialiser
                        </Typography>
                        <ReloadIcon></ReloadIcon>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] after:content-[''] after:h-[1rem] after:w-px after:mx-[0.62rem]">
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationWhite)}
                        >
                            Fermer
                        </Typography>
                        <CrossIconOutline></CrossIconOutline>
                    </div>
                </div>
            </div>
        );


        case "contenant":
        return (
            <div className="bg-white h-fit w-full flex flex-col items-center justify-center p-0">
                <div className="bg-white h-fit w-full py-[3.125rem] px-[3.125rem] flex flex-row jusify-between items-center border-y border-lightgray"
                >
                    <div
                    className="flex flex-row items-center justify-between gap-[2.81rem] w-fit h-fit">
                        <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
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
                            <ArrowDown></ArrowDown>
                        </div>
                        <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                            <Typography 
                            variant="p"
                            color="gray"
                            font="outfit"
                            className="after: content-[''] after: h-5/6 w-px bg-gray "
                            >
                                Contenant
                            </Typography>
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className="font-medium"
                            >
                                Tout
                            </Typography>
                            <ArrowDown></ArrowDown>
                        </div>
                    </div>
                    <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                            <Typography 
                            variant="p"
                            color="gray"
                            font="outfit"
                            className="after: content-[''] after: h-5/6 w-px bg-gray "
                            >
                                16 Résultat(s) Trouvé(s)
                            </Typography>
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className="font-medium"
                            >
                                Filtres
                            </Typography>
                            <FilterIcon></FilterIcon>
                    </div>
                </div>
                <ul className="list-none px-[3.125rem] py-[1.875rem] flex flex-col align-top justify-start gap-y-[1.25rem]">
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight before:content-[''] before: w-[10px] before:h-px bg-black mr-[0.2rem]"
                        >
                            Canette & Bouteille
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight before:content-[''] before: w-[10px] before:h-px bg-black mr-[0.2rem]"
                        >
                            Canette
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight before:content-[''] before: w-[10px] before:h-px bg-black mr-[0.2rem]"
                        >
                            Bouteille
                        </Typography>
                    </li>
                </ul>
                <div className="flex flex-row items-center justify-center bg-white py-[0.62rem] px-[0.62rem]">
                    <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] w-full h-fit after:content-[''] after:h-[1rem] after:w-px after:mx-[0.62rem]">
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-medium"
                        >
                            Réinitialiser
                        </Typography>
                        <ReloadIcon></ReloadIcon>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] after:content-[''] after:h-[1rem] after:w-px after:mx-[0.62rem]">
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-medium"
                        >
                            Fermer
                        </Typography>
                        <CrossIconOutline></CrossIconOutline>
                    </div>
                </div>
            </div>
        );


        case "volume":
        return (
            <div className="bg-white h-fit w-full flex flex-col items-center justify-center p-0">
                <div className="bg-white h-fit w-full py-[3.125rem] px-[3.125rem] flex flex-row jusify-between items-center border-y border-lightgray"
                >
                    <div
                    className="flex flex-row items-center justify-between gap-[2.81rem] w-fit h-fit">
                        <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                            <Typography 
                            variant="p"
                            color="gray"
                            font="outfit"
                            className="after:content-[''] after: h-5/6 w-px bg-gray "
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
                            <ArrowDown></ArrowDown>
                        </div>
                        <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                            <Typography 
                            variant="p"
                            color="gray"
                            font="outfit"
                            className="after: content-[''] after: h-5/6 w-px bg-gray "
                            >
                                Contenant
                            </Typography>
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className="font-medium"
                            >
                                Tout
                            </Typography>
                            <ArrowDown></ArrowDown>
                        </div>
                    </div>
                    <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                            <Typography 
                            variant="p"
                            color="gray"
                            font="outfit"
                            className="after: content-[''] after: h-5/6 w-px bg-gray "
                            >
                                16 Résultat(s) Trouvé(s)
                            </Typography>
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className="font-medium"
                            >
                                Filtres
                            </Typography>
                            <FilterIcon></FilterIcon>
                    </div>
                </div>
                <ul className="list-none px-[3.125rem] py-[1.875rem] flex flex-col align-top justify-start gap-y-[1.25rem]">
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight capitalize before:content-[''] before: w-[10px] before:h-px bg-black mr-[0.2rem]"
                        >
                            25cl
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight capitalize  before:content-[''] before: w-[10px] before:h-px bg-black mr-[0.2rem]"
                        >
                            33cl
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight capitalize  before:content-[''] before:w-[10px] before:h-px bg-black mr-[0.2rem]"
                        >
                            50cl
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight capitalize  before:content-[''] before:w-[10px] before:h-px bg-black mr-[0.2rem]"
                        >
                            1l
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight capitalize  after:content-[''] after: w-[10px] after:h-px bg-black mr-[0.2rem]"
                        >
                            1.5l
                        </Typography>
                    </li>
                </ul>
                <div className="flex flex-row items-center justify-center bg-white py-[0.62rem] px-[0.62rem]">
                    <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] w-full h-fit after:content-[''] after:h-[1rem] after:w-px after:mx-[0.62rem]">
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-medium"
                        >
                            Réinitialiser
                        </Typography>
                        <ReloadIcon></ReloadIcon>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] after:content-[''] after:h-[1rem] after:w-px after:mx-[0.62rem]">
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-medium"
                        >
                            Fermer
                        </Typography>
                        <CrossIconOutline></CrossIconOutline>
                    </div>
                </div>
            </div>
        );


        case "all-filters":
            return (
                <div className="bg-white h-fit w-full flex flex-col items-center justify-center">
                    <div className="bg-white h-fit w-full py-[3.125rem] px-[3.125rem] flex flex-row jusify-between items-center border-y border-lightgray"
                    >
                        <div
                        className="flex flex-row items-center justify-between gap-[2.81rem] w-fit h-fit">
                            <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                                <Typography 
                                variant="p"
                                color="gray"
                                font="outfit"
                                className="after:content-[''] after: h-5/6 w-px bg-gray "
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
                                <ArrowDown></ArrowDown>
                            </div>
                            <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                                <Typography 
                                variant="p"
                                color="gray"
                                font="outfit"
                                className="after: content-[''] after: h-5/6 w-px bg-gray "
                                >
                                    Contenant
                                </Typography>
                                <Typography
                                variant="p"
                                color="black"
                                font="outfit"
                                className="font-medium"
                                >
                                    Tout
                                </Typography>
                                <ArrowDown></ArrowDown>
                            </div>
                        </div>
                        <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                                <Typography 
                                variant="p"
                                color="gray"
                                font="outfit"
                                className="after: content-[''] after: h-5/6 w-px bg-gray "
                                >
                                    16 Résultat(s) Trouvé(s)
                                </Typography>
                                <Typography
                                variant="p"
                                color="black"
                                font="outfit"
                                className={clsx("font-medium", underLineAnimationWhite)}
                                >
                                    Filtres
                                </Typography>
                                <FilterIcon></FilterIcon>
                        </div>
                    </div>
                    <div className="bg-white w-full h-fit py-[1.875rem] flex flex-row flex-wrap justify-between items-center">
                        <FilterCard
                        title = "Trié par:"
                        list = {["Nouveautés", "Prix croissant", "Prix décroissant"]}
                        round = {true}
                        className="border-r-[1px] border-solid border-r-black"
                        >
                        </FilterCard>
                        <FilterCard
                        title = "Contenant:"
                        list = {["Canette", "Bouteille"]}
                        className="border-r-[1px] border-solid border-r-black"
                        >
                        </FilterCard>
                        <FilterCard
                        title = "Volume:"
                        list = {["25cl", "33cl", "50cl", "1l", "1.5l"]}
                        className="border-r-[1px] border-solid border-r-black"
                        >
                        </FilterCard>
                        <FilterCard
                        title="Parfum:"
                        list={["Fruits rouges", "Orange sanguine", "Poire", "Fruit de la passion"]}
                        className="border-r-[1px] border-solid border-r-black"
                        >
                        </FilterCard>
                        <FilterCard
                        title="Alcool:"
                        list={["Avec", "Sans"]}
                        >
                        </FilterCard>
                    </div>
                    <div className="flex flex-row items-center justify-center bg-white py-[0.62rem] px-[0.62rem]">
                        <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] w-full h-fit after:content-[''] after:h-[1rem] after:w-px after:mx-[0.62rem]">
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className="font-medium"
                            >
                                Réinitialiser
                            </Typography>
                            <ReloadIcon></ReloadIcon>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] after:content-[''] after:h-[1rem] after:w-px after:mx-[0.62rem]">
                            <Typography
                            variant="p"
                            color="black"
                            font="outfit"
                            className="font-medium"
                            >
                                Fermer
                            </Typography>
                            <CrossIconOutline></CrossIconOutline>
                        </div>
                    </div>
                </div>
            );
    }
}