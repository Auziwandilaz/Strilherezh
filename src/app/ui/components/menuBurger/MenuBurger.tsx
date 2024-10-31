import Image from "next/image";
import { MenuBurgerItem } from "../menuBurgerItem/MenuBurgerItem";
import { Button } from "../../design-system/button/Button";
import { CrossIcon } from "../../design-system/svg/CrossIcon";
import { Typography } from "../../design-system/typography/Typography";



export default function MenuBurger() {
    return (
        <section className="absolute z-10 top-0 left-0 w-[90%] h-full flex justify-center flex-col align-top">
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
}