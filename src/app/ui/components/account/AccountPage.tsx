import clsx from "clsx"; 
import Image from "next/image";
import { Header } from "../../components/header/Header";
import { HeaderStrilherezh } from "../header/HeaderStrilherezh";
import { ArrowIcon } from "../../design-system/svg/ArrowIcon";
import { Button } from "../../design-system/button/Button";
import { Typography } from "../../design-system/typography/Typography";
import { Footer } from "../footer/Footer";

export default function AccountPage () {
    const typoStyle = "font-extralight";

    return (
        <main className="">
        <Header></Header>
        <section className="w-full height-clamp--banner_account relative flex align-middle justify-center flex-col">
            <div
            className="flex flex-row align-middle absolute inset-7 "
            >
                <ArrowIcon></ArrowIcon>
                <Typography
                variant="p-small"
                className="text-white font-quicksand"
                >
                    Skornenn / Votre compte
                </Typography>
            </div>
            <Typography 
            variant="h1"
            className="capitalize text-white font-outfit text-center">
                mon compte
            </Typography>
        </section>
        <div>

        </div>
        <Footer></Footer>
        </main>
    )
}