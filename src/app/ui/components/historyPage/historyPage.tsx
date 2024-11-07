"use client";

import { Header } from "../header/Header";
import { HeaderStrilherezh } from "../header/HeaderStrilherezh";
import { HeroBanner } from "../heroBanner/HeroBanner";
import Image from "next/image";
import { FilterBar } from "../filterBar/FilterBar";
import { Footer } from "../footer/Footer";



export default function HistoryPage () {
    return (
        <main>
            <Header></Header>
            <HeaderStrilherezh></HeaderStrilherezh>
            <HeroBanner
            variant="history"
            ></HeroBanner>
            
            <Footer></Footer>
        </main>
    )
}