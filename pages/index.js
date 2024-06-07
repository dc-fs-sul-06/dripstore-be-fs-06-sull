import { BurgerMenu } from "@/components/BurgerMenu/BurgerMenu";
import { FeaturedProductList } from "@/components/FeaturedProductList/FeatureProductList";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { HighlightsSection } from "@/components/HighlightsSection";
import { SideBySide } from "@/components/SideBySide/SideBySide";
import { SmallHighlightSection } from "@/components/SmallHighlightSection/SmallHighlightSection";
import { getCollectionProducts } from "@/libs/controllers/collections";

export default function Home({ gamerComputerCollectionProducts }) {
  return (
    <div className="h-full min-h-screen w-full flex flex-col">
      <div className="z-40 h-[72px] lg:h-[140px]">
        <Header />
        <BurgerMenu />
      </div>
      <div className="bg-[#F5F5F5]">
        <Hero />
      </div>
      <div>
        <HighlightsSection />
      </div>
      <div>
        <SmallHighlightSection title={"Coleções em destaque"} />
      </div>
      <FeaturedProductList title={"Produtos em alta"} link={"Ver todos →"} gamerComputerCollectionProducts={gamerComputerCollectionProducts} />
      <SideBySide
        image={"air-jordan.png"}
        eyebrown={"Oferta especial"}
        title={"Air Jordan edição de colecionador"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        }
        ctaLink={"#"}
        ctaText={"Ver Oferta"}
      />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const gamerComputerCollectionsId = 1;
  const gamerComputerCollectionProducts = await getCollectionProducts(
    gamerComputerCollectionsId
  );

  return { props: { gamerComputerCollectionProducts } };
};
