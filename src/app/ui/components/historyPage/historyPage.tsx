"use client";

import { Header } from "../header/Header";
import { HeaderStrilherezh } from "../header/HeaderStrilherezh";
import { HeroBanner } from "../heroBanner/HeroBanner";
import { HistorySection } from "../historySection/HistorySection";
import { HistoryBannerCard } from "../historyBannerCard/HistoryBannerCard";
import { Typography } from "../../design-system/typography/Typography";
import { ProductDescCard } from "../productDescriptionCard/ProductDescCard";
import { Footer } from "../footer/Footer";



export default function HistoryPage () {

    return (
        <main className="">
            <Header></Header>
            <HeaderStrilherezh></HeaderStrilherezh>
            {/* ---------------- */}
            <HeroBanner
            variant="history"
            ></HeroBanner>

            {/* ---------------- */}

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

            {/* ---------------- */}

            <HistoryBannerCard variant="barrels">
                <div className="absolute z-10 inset-0 flex flex-col items-start justify-center text-left height-[12.5rem] w-[62rem] py-[11.25rem] px-[8.12rem]">
                    <Typography
                    variant="h2"
                    color="white"
                    font="outfit"
                    className="mb-[1.88rem] font-normal"
                    >
                        La distillerie Strilherezh Une symphonie de savoir-faire breton
                    </Typography>
                    <Typography
                    variant="p-small"
                    color="white"
                    font="quicksand"
                    >
                        Située au cœur de la Bretagne, la Distillerie du Triskel est un joyau de la tradition et de l'innovation, mêlant l'art ancestral de la production de cidre, de vin et de whisky. Fondée par une famille passionnée par les richesses de leur terre natale, cette distillerie incarne l'excellence bretonne à travers une diversité de produits qui célèbrent le terroir et le savoir-faire local.
                    </Typography>
                </div>
            </HistoryBannerCard>
            <HistoryBannerCard variant="cliff-sea">
                <div className="absolute z-10 inset-0 flex flex-col items-end justify-center text-right height-[12.5rem] w-[65rem] py-[11.25rem] px-[8.12rem] ml-auto">
                    <Typography
                    variant="h2"
                    color="white"
                    font="outfit"
                    className="mb-[1.88rem] font-normal w-full"
                    >
                        Un Terroir Bénit des Dieux
                    </Typography>
                    <Typography
                    variant="p-small"
                    color="white"
                    font="quicksand"
                    className="w-full"
                    >
                        La Bretagne, avec ses paysages pittoresques et son climat océanique, offre des conditions idéales pour la culture de la pomme, du raisin et des céréales. Les vergers de pommes à cidre s'étendent sur des hectares de collines, tandis que les vignobles bénéficient de la douceur du microclimat breton. Les champs de céréales, quant à eux, fournissent les grains nécessaires à la fabrication d'un whisky raffiné.
                    </Typography>
                </div>
            </HistoryBannerCard>
            <HistorySection variant="primary">
            <Typography
                    variant="h5"
                    color="black"
                    font="outfit"
                    className="my-[1.88rem]"
                    >
                        Une Expertise Multisectorielle
                </Typography>
                <Typography
                variant="p-small"
                color="gray"
                font="quicksand"
                >
                    À la Distillerie Strilherezh, chaque produit est le fruit d'un savoir-faire unique et d'une attention méticuleuse portée à chaque étape de la production.
                </Typography>
            </HistorySection>

            {/* ---------------- */}

            <div className="bg-lightsalmon grid grid-cols-2 grid-rows-2 gap-[2.5rem] p-[2.5rem] w-full h-fit">
                <ProductDescCard>
                    <Typography
                    variant="h5"
                    color="gold"
                    font="outfit"
                    className="font-normal mb-[1.25rem]"
                    >
                        Cidre Breton
                    </Typography>
                    <Typography
                    variant="p-small"
                    color="gray"
                    font="quicksand"
                    className="font-normal"
                    >
                        Le cidre, produit emblématique de la Bretagne, est élaboré selon des méthodes traditionnelles. Les pommes, récoltées à la main, sont soigneusement sélectionnées pour leur maturité et leur qualité. Le pressage et la fermentation lente permettent de capturer l'essence des fruits et de produire des cidres aux arômes complexes et équilibrés, parfaits pour accompagner les moments de convivialité.
                    </Typography>
                </ProductDescCard>
                <ProductDescCard>
                    <Typography
                    variant="h5"
                    color="gold"
                    font="outfit"
                    className="font-normal mb-[1.25rem]"
                    >
                        Vins Bretons
                    </Typography>
                    <Typography
                    variant="p-small"
                    color="gray"
                    font="quicksand"
                    >
                        Les vignobles de la distillerie produisent des raisins de qualité exceptionnelle. Les vins qui en résultent sont le reflet d'un terroir unique et d'une vinification soignée. Les vins blancs, rosés et rouges de la Distillerie du Triskel se distinguent par leur fraîcheur, leur élégance et leur caractère distinctif, offrant une nouvelle dimension à la tradition vinicole bretonne.
                    </Typography>
                </ProductDescCard>
                <ProductDescCard>
                    <Typography
                    variant="h5"
                    color="gold"
                    font="outfit"
                    className="font-normal mb-[1.25rem]"
                    >
                        Whisky Breton
                    </Typography>
                    <Typography
                    variant="p-small"
                    color="gray"
                    font="quicksand"
                    >
                        Les vignobles de la distillerie produisent des raisins de qualité exceptionnelle. Les vins qui en résultent sont le reflet d'un terroir unique et d'une vinification soignée. Les vins blancs, rosés et rouges de la Distillerie du Triskel se distinguent par leur fraîcheur, leur élégance et leur caractère distinctif, offrant une nouvelle dimension à la tradition vinicole bretonne.
                    </Typography>
                </ProductDescCard>
                <ProductDescCard>
                    <Typography
                    variant="h5"
                    color="gold"
                    font="outfit"
                    className="font-normal mb-[1.25rem]"
                    >
                        D'autres exclusivités
                    </Typography>
                    <Typography
                    variant="p-small"
                    color="gray"
                    font="quicksand"
                    >
                        Lorem ipsum dolor sit amet consectetur. Ullamcorper mi sollicitudin senectus sed facilisis. Egestas pharetra et scelerisque diam ultrices ut amet tincidunt montes. Massa vitae hendrerit aliquam sodales convallis nisl turpis. Nunc in quam aliquam at interdum. Purus nunc neque proin ut quam. Turpis lacinia sit aenean pellentesque auctor at amet purus velit. Sem lorem quis ante fermentum ipsum facilisi quam sit congue.
                    </Typography>
                </ProductDescCard>
            </div>
            {/* ---------------- */}

            <HistoryBannerCard variant="fields">
                <div className="absolute z-10 inset-0 flex flex-col items-start justify-center text-left height-[12.5rem] w-[65rem] py-[11.25rem] px-[8.12rem] mr-auto">
                    <Typography
                    variant="h2"
                    color="white"
                    font="outfit"
                    className="mb-[1.88rem] font-normal w-full"
                    >
                        Un Engagement pour la Durabilité
                    </Typography>
                    <Typography
                    variant="p-small"
                    color="white"
                    font="quicksand"
                    className="w-full"
                    >
                        La Distillerie du Triskel est profondément engagée dans une démarche écoresponsable. Les vergers, vignobles et champs de céréales sont cultivés sans pesticides chimiques, en respectant les principes de l'agriculture biologique. La distillerie utilise des énergies renouvelables et met en œuvre des pratiques de production durable pour minimiser son impact environnemental.
                    </Typography>
                </div>
            </HistoryBannerCard>
            <Footer></Footer>
        </main>
    )
}
