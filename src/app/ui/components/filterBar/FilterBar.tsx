import React, { useState } from 'react';
import clsx from "clsx";
import { Typography } from "../../design-system/typography/Typography";
import { CrossIconOutline } from "../../design-system/svg/CrossOutlineIcon";
import { FilterIcon } from "../../design-system/svg/FilterIcon";
import { ReloadIcon } from "../../design-system/svg/ReloadIcon";
import { ArrowDown } from "../../design-system/svg/ArrowDown";
import { FilterCard } from "./FilterCard";

type VariantType = "closed" | "filter-by" | "contenant" | "volume" | "all-filters";

interface Props {
    variant?: VariantType;
    className?: string;
}


export const FilterBar = ({
    className,
}:Props) => {
    const typoStyle = "font-medium";
    const underlineAnimationBlack =
    "bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out cursor-pointer";
    const filterBarTransition = "@apply overflow-hidden w-full h-auto leading-20 box-border transition-[height] duration-[0.3s] ease-[ease-in-out] delay-[0.1s] left-0;";

    let countClick = 0;


    const [variant, setVariant] = useState<VariantType>("closed");

    const handleVariantChange = (newVariant: "closed" | "filter-by" | "contenant" | "volume" | "all-filters") => {

        setVariant(currentVariant => currentVariant === newVariant ? "closed" : newVariant); // Toggle to "closed" if clicking on the same variant
    };


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
                        onClick={ () => {handleVariantChange("filter-by")}}
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
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit max-sm:hidden">
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
                        onClick={ () => {handleVariantChange("contenant")}}
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
                            ></ArrowDown>
                        </button>
                    </div>
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit max-md:hidden">
                        <Typography 
                        variant="p"
                        color="gray"
                        font="outfit"
                        className="filter-bar-after"
                        >
                            Volume
                        </Typography>
                        <button
                        className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.31rem]" 
                        onClick={ () => {handleVariantChange("volume")}}
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
                        onClick={ () => {handleVariantChange("all-filters")}}
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
                        onClick={ () => {handleVariantChange("filter-by")}}
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
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit max-sm:hidden">
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
                        onClick={ () => {handleVariantChange("contenant")}}
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
                            ></ArrowDown>
                        </button>
                    </div>
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit max-md:hidden">
                        <Typography 
                        variant="p"
                        color="gray"
                        font="outfit"
                        className="filter-bar-after"
                        >
                            Volume
                        </Typography>
                        <button
                        className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.31rem]" 
                        onClick={ () => {handleVariantChange("volume")}}
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
                        onClick={ () => {handleVariantChange("all-filters")}}
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
                <ul className={clsx("list-none px-[3.125rem] py-[1.875rem] flex flex-col items-start justify-start gap-y-[1.25rem] w-full h-fit", filterBarTransition)}>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            Nouveautés
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            Prix Croissant
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            Prix décroissant
                        </Typography>
                    </li>
                </ul>
                <div className="flex flex-row items-center justify-center bg-white py-[0.62rem] px-[0.62rem] w-full">
                        <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] w-fit h-fit filter-bar-after">
                            <button
                            className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.62rem]"
                            >
                                <Typography
                                variant="p"
                                color="black"
                                font="outfit"
                                className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                                >
                                    Réinitialiser
                                </Typography>
                                <ReloadIcon></ReloadIcon>
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] ml-[0.62rem]">
                            <button
                            className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.62rem]"
                            onClick={ () => {handleVariantChange("closed")}}
                            >
                                <Typography
                                variant="p"
                                color="black"
                                font="outfit"
                                className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                                >
                                    Fermer
                                </Typography>
                                <CrossIconOutline></CrossIconOutline>
                            </button>
                        </div>
                    </div>
            </div>
        );


        case "contenant":
        return (
            <div className="bg-white h-fit w-full flex flex-col items-center justify-center p-0">
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
                        onClick={ () => {handleVariantChange("filter-by")}}
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
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit max-sm:hidden">
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
                        onClick={ () => {handleVariantChange("contenant")}}
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
                            ></ArrowDown>
                        </button>
                    </div>
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit max-md:hidden">
                        <Typography 
                        variant="p"
                        color="gray"
                        font="outfit"
                        className="filter-bar-after"
                        >
                            Volume
                        </Typography>
                        <button
                        className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.31rem]" 
                        onClick={ () => {handleVariantChange("volume")}}
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
                        onClick={ () => {handleVariantChange("all-filters")}}
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
                <ul className="list-none px-[3.125rem] py-[1.875rem] flex flex-col items-start justify-start gap-y-[1.25rem] w-full h-fit">
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            Canette & Bouteille
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            Canette
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            Bouteille
                        </Typography>
                    </li>
                </ul>
                <div className="flex flex-row items-center justify-center bg-white py-[0.62rem] px-[0.62rem] w-full">
                        <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] w-fit h-fit filter-bar-after">
                            <button
                            className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.62rem]"
                            >
                                <Typography
                                variant="p"
                                color="black"
                                font="outfit"
                                className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                                >
                                    Réinitialiser
                                </Typography>
                                <ReloadIcon></ReloadIcon>
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] ml-[0.62rem]">
                            <button
                            className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.62rem]"
                            onClick={ () => {handleVariantChange("closed")}}
                            >
                                <Typography
                                variant="p"
                                color="black"
                                font="outfit"
                                className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                                >
                                    Fermer
                                </Typography>
                                <CrossIconOutline></CrossIconOutline>
                            </button>
                        </div>
                    </div>
            </div>
        );


        case "volume":
        return (
            <div className="bg-white h-fit w-full flex flex-col items-center justify-center p-0">
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
                        onClick={ () => {handleVariantChange("filter-by")}}
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
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit max-sm:hidden">
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
                        onClick={ () => {handleVariantChange("contenant")}}
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
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit max-md:hidden">
                        <Typography 
                        variant="p"
                        color="gray"
                        font="outfit"
                        className="filter-bar-after"
                        >
                            Volume
                        </Typography>
                        <button
                        className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.31rem]" 
                        onClick={ () => {handleVariantChange("volume")}}
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
                        onClick={ () => {handleVariantChange("all-filters")}}
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
                <ul className="list-none px-[3.125rem] py-[1.875rem] flex flex-col items-start justify-start gap-y-[1.25rem] w-full h-fit">
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight capitalize filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            25cl
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight capitalize  filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            33cl
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight capitalize  filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            50cl
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight capitalize  filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            1l
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        variant="p"
                        color="black"
                        font="outfit"
                        className="font-extralight capitalize  filter-line-before mr-[0.2rem] transition-all ease-out delay-100 duration-200 hover:font-medium hover:cursor-pointer"
                        >
                            1.5l
                        </Typography>
                    </li>
                </ul>
                <div className="flex flex-row items-center justify-center bg-white py-[0.62rem] px-[0.62rem] w-full">
                        <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] w-fit h-fit filter-bar-after">
                            <button
                            className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.62rem]"
                            >
                                <Typography
                                variant="p"
                                color="black"
                                font="outfit"
                                className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                                >
                                    Réinitialiser
                                </Typography>
                                <ReloadIcon></ReloadIcon>
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] ml-[0.62rem]">
                            <button
                            className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.62rem]"
                            onClick={ () => {handleVariantChange("closed")}}
                            >
                                <Typography
                                variant="p"
                                color="black"
                                font="outfit"
                                className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                                >
                                    Fermer
                                </Typography>
                                <CrossIconOutline></CrossIconOutline>
                            </button>
                        </div>
                    </div>
            </div>
        );


        case "all-filters":
            return (
                <div className="bg-white h-fit w-full flex flex-col items-center justify-center">
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
                        onClick={ () => {handleVariantChange("filter-by")}}
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
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit max-sm:hidden">
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
                        onClick={ () => {handleVariantChange("contenant")}}
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
                    <div className="flex gap-[0.62rem] items-center justify-between h-fit max-md:hidden">
                        <Typography 
                        variant="p"
                        color="gray"
                        font="outfit"
                        className="filter-bar-after"
                        >
                            Volume
                        </Typography>
                        <button
                        className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.31rem]" 
                        onClick={ () => {handleVariantChange("volume")}}
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
                        onClick={ () => {handleVariantChange("all-filters")}}
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
                    <div className="bg-white w-full h-auto py-[1.875rem] flex flex-row flex-wrap justify-between items-start gap-y-1 group-last:border-none">
                        <FilterCard
                        title = "Trié par:"
                        list = {["Nouveautés", "Prix croissant", "Prix décroissant"]}
                        round = {true}
                        >
                        </FilterCard>
                        <FilterCard
                        title = "Contenant:"
                        list = {["Canette", "Bouteille"]}
                        >
                        </FilterCard>
                        <FilterCard
                        title = "Volume:"
                        list = {["25cl", "33cl", "50cl", "1L", "1.5L"]}
                        >
                        </FilterCard>
                        <FilterCard
                        title="Parfum:"
                        list={["Fruits rouges", "Orange sanguine", "Poire", "Fruit de la passion"]}
                        >
                        </FilterCard>
                        <FilterCard
                        title="Alcool:"
                        list={["Avec", "Sans"]}
                        >
                        </FilterCard>
                    </div>
                    <div className="flex flex-row items-center justify-center bg-white py-[0.62rem] px-[0.62rem] w-full">
                        <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] w-fit h-fit filter-bar-after">
                            <button
                            className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.62rem]"
                            >
                                <Typography
                                variant="p"
                                color="black"
                                font="outfit"
                                className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                                >
                                    Réinitialiser
                                </Typography>
                                <ReloadIcon></ReloadIcon>
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-x-[0.3125rem] ml-[0.62rem]">
                            <button
                            className="group transition-all duration-300 ease-in-out w-fit flex items-center gap-[0.62rem]"
                            onClick={ () => {handleVariantChange("closed")}}
                            >
                                <Typography
                                variant="p"
                                color="black"
                                font="outfit"
                                className={clsx(typoStyle, "max-sm:text-[0.875rem]",underlineAnimationBlack)}
                                >
                                    Fermer
                                </Typography>
                                <CrossIconOutline></CrossIconOutline>
                            </button>
                        </div>
                    </div>
                </div>
            );
    }
}