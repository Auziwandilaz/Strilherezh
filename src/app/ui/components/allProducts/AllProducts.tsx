"use client";

import clsx from "clsx";
import Image from "next/image";
import { Header } from "../header/Header";
import { HeaderStrilherezh } from "../header/HeaderStrilherezh";
import { SellCard } from "../sellCard/SellCard";
import { Typography } from "../../design-system/typography/Typography";
import { HeroBanner } from "../heroBanner/HeroBanner";
import { FilterBar } from "../filterBar/FilterBar";
import { Footer } from "../footer/Footer";


export default function AllProduct () {

    return (
        <main className="">
            <Header></Header>
            <HeaderStrilherezh></HeaderStrilherezh>
            <HeroBanner
            variant="all-products"
            ></HeroBanner>
            <FilterBar variant="all-filters">
            </FilterBar>
            <div className="grid grid-cols-4 grid-rows-4 gap-6 p-[2.5rem] border-b-2 border-solid border-gold max-lg:grid-cols-3 max-lg:grid-rows-5 max-md:grid-cols-2 max-md:grid-rows-7 max-sm:grid-cols-3 max-sm:grid-rows-5 max-xs:grid-cols-2 max-xs:grid-rows-8"
            >
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
                <SellCard/>
            </div>
            <Footer></Footer>
        </main>
    )
}