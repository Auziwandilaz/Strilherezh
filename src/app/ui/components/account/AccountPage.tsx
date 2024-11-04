import clsx from "clsx"; 
import Image from "next/image";
import { Header } from "../../components/header/Header";
import { HeaderStrilherezh } from "../header/HeaderStrilherezh";
import { ArrowIcon } from "../../design-system/svg/ArrowIcon";
import { Button } from "../../design-system/button/Button";
import { Typography } from "../../design-system/typography/Typography";
import { HeroBanner } from "../heroBanner/HeroBanner";
import { Footer } from "../footer/Footer";

export default function AccountPage () {
    const typoStyle = "font-extralight";

    return (
        <main className="">
        <Header></Header>
        <HeroBanner
        variant="account"
        className=""
        ></HeroBanner>
        <div>
        
        </div>
        <Footer></Footer>
        </main>
    )
}