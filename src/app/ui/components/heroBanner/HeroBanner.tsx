import clsx from "clsx";
import Image from "next/image";
import { BackArrowIcon } from "../../design-system/svg/BackArrowIcon";
import { Typography } from "../../design-system/typography/Typography";
import { useNavigate } from "react-router-dom";


interface Props {
    variant?: "profil" | "favorites" | "account" | "all-products" | "history";
    className?: string;
}

export const HeroBanner = ({
    variant = "profil",
    className,
}: Props) => {
    const navigate = useNavigate();

    switch (variant) {
        case "all-products":
            return (
                <div className="relative w-full h-[700px] max-xl:h-[600px] max-lg:h-[580px] max-md:h-[500px] max-sm:h-[400px] max-sx:h-[400px]">
                    <Image
                        src="/img/alcool-breton-bg.png"
                        alt="fond de présentation d'alcool breton"
                        className="w-full h-full object-cover brightness-50"
                        layout="fill"
                    />
                    <div className=" absolute inset-0
                    flex flex-row align-middle justify-between w-fit h-[1.5rem] gap-[0.62rem] px-[3.12rem] py-[1.25rem]
                    ">
                        <button onClick={() => navigate(-1)}>
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
                            <span className="text-white">/</span>
                            <Typography
                                variant="p-small"
                                color="white"
                                font="quicksand"
                                className="">
                                Votre compte
                            </Typography>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Typography
                            font="outfit"
                            variant="h2"
                            color="gold"
                            className="text-center max-sm:text-[25px] leading-5"
                        >
                            STRILHEREZH
                        </Typography>
                        <Typography
                            font="outfit"
                            variant="h1"
                            color="white"
                            className="text-center max-sm:text-[50px] capitalize"
                        >
                            {"TOUS NOS PRODUITS"}
                        </Typography>
                    </div>
                </div>
            );
            case "history":
            return (
                <div className="relative w-full h-[700px] max-xl:h-[600px] max-lg:h-[580px] max-md:h-[500px] max-sm:h-[400px] max-sx:h-[400px]">
                    <Image
                        src="/img/hero-banner-history-placeholder.webp"
                        alt="fond de présentation d'un phare sur la cote d'une plage"
                        className="w-full h-full object-cover brightness-50"
                        layout="fill"
                    />
                    <div className=" absolute inset-0
                    flex flex-row align-middle justify-between w-fit h-[1.5rem] gap-[0.62rem] px-[3.12rem] py-[1.25rem]
                    ">
                        <button onClick={() => navigate(-1)}>
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
                            <span className="text-white">/</span>
                            <Typography
                                variant="p-small"
                                color="white"
                                font="quicksand"
                                className="">
                                Votre compte
                            </Typography>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Typography
                            font="outfit"
                            variant="h2"
                            color="gold"
                            className="text-center max-sm:text-[25px] leading-5"
                        >
                            STRILHEREZH
                        </Typography>
                        <Typography
                            font="outfit"
                            variant="h1"
                            color="white"
                            className="text-center max-sm:text-[50px] capitalize"
                        >
                            {"NOTRE HISTOIRE"}
                        </Typography>
                    </div>
                </div>
            );
        case "account":
            return (
                <section className="
            bg-hero-banner bg-cover bg-center w-full h-18.75rem flex flex-col gap-[0.625rem] py-[1.25rem] px-[2.5rem]
            ">
                    <div className="
                flex flex-row align-middle justify-between w-[13.4rem] h-[1.5rem] gap-[0.62rem] 
                ">
                        <button onClick={() => navigate(-1)}>
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
                        <button onClick={() => navigate(-1)}>
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
                        <button onClick={() => navigate(-1)}>
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
