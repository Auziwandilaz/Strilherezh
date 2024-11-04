import clsx from "clsx";

import { BackArrowIcon } from "../../design-system/svg/BackArrowIcon";
import { Typography  } from "../../design-system/typography/Typography";


interface Props {
    variant?: "profil" | "favorites" | "account" | "all-products";
    className?: string;
}

export const HeroBanner = ({
    variant = "profil",
    className,
}: Props) => {
    switch (variant) {
        case "all-products": 
        return (
            <section className="
            bg-hero-banner bg-cover bg-center w-full h-18.75rem flex flex-col gap-[0.625rem] py-[1.25rem] px-[2.5rem]
            ">
                <div className="
                flex flex-row align-middle justify-between w-[13.4rem] h-[1.5rem] gap-[0.62rem] 
                ">
                    <button>
                        <BackArrowIcon></BackArrowIcon>
                    </button>
                    <div 
                    className="flex flex-row gap-[0.62rem] align-middle justify-between w-fit h-fit"
                    >
                        <Typography
                        variant="p-small"
                        color="white"
                        font="quicksand"
                        className=""
                        >
                            Skornenn
                        </Typography>
                        <span>/</span>
                        <Typography
                        variant="p-small"
                        color="white"
                        font="quicksand"
                        className="">
                            Cidres parfumés
                        </Typography>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col align-middle justify-center"
                >
                    <Typography
                    variant="h2"
                    color="gold"
                    font="outfit"
                    className="font-normal text-center w-full"
                    >
                        Strilherezh
                    </Typography>
                    <Typography
                    variant="h1"
                    color="black"
                    font="outfit"
                    className="font-light capitalize text-center w-full">
                        Mon Compte
                    </Typography>
                </div>
            </section>
        );
        case "account": 
        return (
            <section className="
            bg-hero-banner bg-cover bg-center w-full h-18.75rem flex flex-col gap-[0.625rem] py-[1.25rem] px-[2.5rem]
            ">
                <div className="
                flex flex-row align-middle justify-between w-[13.4rem] h-[1.5rem] gap-[0.62rem] 
                ">
                    <button>
                        <BackArrowIcon></BackArrowIcon>
                    </button>
                    <div 
                    className="flex flex-row gap-[0.62rem] align-middle justify-between w-fit h-fit"
                    >
                        <Typography
                        variant="p-small"
                        color="white"
                        font="quicksand"
                        className=""
                        >
                            Skornenn
                        </Typography>
                        <span>/</span>
                        <Typography
                        variant="p-small"
                        color="white"
                        font="quicksand"
                        className="">
                            Votre compte
                        </Typography>
                    </div>
                </div>
                <Typography
                variant="h1"
                color="black"
                font="outfit"
                className="font-light text-white capitalize text-center w-full">
                    Mon Compte
                </Typography>
            </section>
        );
        case "profil": 
        return (
            <section className="
            bg-hero-banner bg-cover bg-center w-full h-18.75rem flex flex-col gap-[0.625rem] py-[1.25rem] px-[2.5rem]
            ">
                <div className="
                flex flex-row align-middle justify-between w-[13.4rem] h-[1.5rem] gap-[0.62rem] 
                ">
                    <button>
                        <BackArrowIcon></BackArrowIcon>
                    </button>
                    <div 
                    className="flex flex-row gap-[0.62rem] align-middle justify-between w-fit h-fit"
                    >
                        <Typography
                        variant="p-small"
                        color="white"
                        font="quicksand"
                        className=""
                        >
                            Skornenn
                        </Typography>
                        <span>/</span>
                        <Typography
                        variant="p-small"
                        color="white"
                        font="quicksand"
                        className="">
                            Votre compte
                        </Typography>
                    </div>
                </div>
                <Typography
                variant="h1"
                color="black"
                font="outfit"
                className="font-light text-white capitalize text-center w-full">
                    Mon Profil
                </Typography>
            </section>
        );
        case "favorites": 
        return (
            <section className="
            bg-hero-banner bg-cover bg-center w-full h-18.75rem flex flex-col gap-[0.625rem] py-[1.25rem] px-[2.5rem]
            ">
                <div className="
                flex flex-row align-middle justify-between w-[13.4rem] h-[1.5rem] gap-[0.62rem] 
                ">
                    <button>
                        <BackArrowIcon></BackArrowIcon>
                    </button>
                    <Typography
                    variant="p-small"
                    color="white"
                    font="quicksand"
                    className=""
                    >
                        Skornenn
                    </Typography>
                    <span>/</span>
                    <Typography
                    variant="p-small"
                    color="white"
                    font="quicksand"
                    className="">
                        Mes favoris
                    </Typography>
                </div>
                <Typography
                variant="h1"
                color="black"
                font="outfit"
                className="font-light text-white capitalize text-center w-full">
                    Mes Favoris
                </Typography>
            </section>
        );
        default: 
            return null;
    };
};
