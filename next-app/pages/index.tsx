// pages/index.tsx
import HeroBlock from "@/components/HeroBlock";
import NavBar from "@/components/navBar";
import axios from "axios";
import { GetStaticProps } from "next";
import "../app/globals.css";

interface LandingPageProps {
  title: string;
  description: string;
  blocks: any[];
}

const Home = ({ title, description, blocks }: LandingPageProps) => {
  return (
    <div>
      <NavBar />
      {blocks.map((block, index) => (
        <div key={index}>
          {/* Render each block based on its type */}
          {block.__component === "blocks.hero" && <HeroBlock {...block} />}
          {/* {block.__component === "blocks.row" && <RowBlock data={block} />} */}
          {/* {block.__component === "blocks.princing" && (
            <PricingBlock data={block} />
          )} */}
          {/* {block.__component === "blocks.cta" && <CtaBlock data={block} />} */}
          {/* {block.__component === "blocks.article" && (
            <ArticleBlock data={block} />
          )} */}
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    "http://localhost:1337/api/landing-pages?populate%5Bblocks%5D%5Bpopulate%5D=image,BtnLink,section.image"
  );
  const landingPage = res.data.data[0];

  return {
    props: {
      title: landingPage.title,
      description: landingPage.description,
      blocks: landingPage.blocks,
    },
  };
};

export default Home;
