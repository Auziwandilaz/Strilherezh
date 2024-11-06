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

interface showFilterProps {
    closeClicked?:boolean;
    filterByClicked?:boolean;
    contenantClicked?:boolean;
    volumeClicked?:boolean;
    allFiltersClicked?:boolean;
}

const ShowFilters = (
    {
        closeClicked = false, 
        filterByClicked = false, 
        contenantClicked = false, 
        volumeClicked = false, 
        allFiltersClicked = false
    }:showFilterProps) => {
    
    if (closeClicked) {
        return (
            <FilterBar variant="closed">
            </FilterBar>
        )
    } 
    else if (filterByClicked) {
        return (
            <FilterBar variant="filter-by">
            </FilterBar>
        )
    }
    else if (contenantClicked) {
        return (
            <FilterBar variant="contenant">
            </FilterBar>
        )
    }
    else if (volumeClicked) {
        return (
            <FilterBar variant="volume">
            </FilterBar>
        )
    }
    else if (allFiltersClicked) {
        return (
            <FilterBar variant="all-filters">
            </FilterBar>
        )
    } else {
        return (
            <FilterBar variant="closed"/>
        )
    }
}


export default function AllProduct () {

    return (
        <main className="">
            <Header></Header>
            <HeaderStrilherezh></HeaderStrilherezh>
            <HeroBanner
            variant="all-products"
            ></HeroBanner>
            <ShowFilters/>
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