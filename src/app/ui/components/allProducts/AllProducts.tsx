"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { Header } from "../header/Header";
import { HeaderStrilherezh } from "../header/HeaderStrilherezh";
import { SellCard } from "../sellCard/SellCard";
import { Typography } from "../../design-system/typography/Typography";
import { HeroBanner } from "../heroBanner/HeroBanner";
import { FilterBar } from "../filterBar/FilterBar";
import { Button } from "../../design-system/button/Button";
import { ArrowIcon } from "../../design-system/svg/ArrowIcon";
import { Footer } from "../footer/Footer";

export default function AllProduct () {
    return (
        <main className="">
            <Header></Header>
            <HeroBanner
            variant="all-products"
            ></HeroBanner>
            <FilterBar
            variant="closed"
            >
            </FilterBar>
            <div className="grid grid-cols-4 grid-rows-4 gap-6 p-[2.5rem] border-b-2 border-solid border-gold"
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