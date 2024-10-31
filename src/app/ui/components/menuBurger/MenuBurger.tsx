import Image from "next/image";
import { MenuBurgerItem } from "../menuBurgerItem/MenuBurgerItem";
import { Button } from "../../design-system/button/Button";
import { Typography } from "../../design-system/typography/Typography";



export default function MenuBurger() {
    return (
        <section className="relative w-[90%] h-full">
            <div className="flex justify-between align-middle">
                <Typography
                font="outfit"
                variant="h2"
                color="black"
                className="border-b-[1px] border-solid border-black"
                >
                    Nos maisons
                </Typography>
                <Button className="hover: scale-125"
                variant="icon">

                </Button>
            </div>
            <ul>
                <MenuBurgerItem></MenuBurgerItem>
                <MenuBurgerItem></MenuBurgerItem>
                <MenuBurgerItem></MenuBurgerItem>
                <MenuBurgerItem></MenuBurgerItem>
                <MenuBurgerItem></MenuBurgerItem>
            </ul>


        </section>
    )
