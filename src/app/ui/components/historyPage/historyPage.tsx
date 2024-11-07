"use client";

import { Header } from "../header/Header";
import { HeaderStrilherezh } from "../header/HeaderStrilherezh";
import { HeroBanner } from "../heroBanner/HeroBanner";
import { HistorySection } from "../historySection/HistorySection";
import { Typography } from "../../design-system/typography/Typography";
import Image from "next/image";
import Hermine from "../../design-system/svg/Hermine";
import { Footer } from "../footer/Footer";



export default function HistoryPage () {

    return (
        <main className="">
            <Header></Header>
            <HeaderStrilherezh></HeaderStrilherezh>
            <HeroBanner
            variant="history"
            ></HeroBanner>
            <HistorySection
            variant="primary"
            >
                <Typography
                    variant="h5"
                    color="black"
                    font="outfit"
                    className="my-[1.88rem]"
                    >
                        L'histoire de Strilherezh
                </Typography>
                <Typography
                variant="p-small"
                color="gray"
                font="quicksand"
                >
                    La Distillerie Strilherezh : Une Symphonie de Savoir-Faire Breton Située au cœur de la Bretagne, la Distillerie du Triskel est un joyau de la tradition et de l'innovation, mêlant l'art ancestral de la production de cidre, de vin et de whisky. Fondée par une famille passionnée par les richesses de leur terre natale, cette distillerie incarne l'excellence bretonne à travers une diversité de produits qui célèbrent le terroir et le savoir-faire local.
                </Typography>
            </HistorySection>
            <Footer></Footer>
        </main>
    )
}
