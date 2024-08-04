// pages/index.tsx
import HeroBlock from "@/components/HeroBlock";
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
    "http://localhost:1337/api/landing-pages?populate[blocks][populate]=image,link"
  );
  const landingPage = res.data.data[0];

  return {
    props: {
      title: landingPage.attributes.title,
      description: landingPage.attributes.description,
      blocks: landingPage.attributes.blocks,
    },
  };
};

export default Home;
