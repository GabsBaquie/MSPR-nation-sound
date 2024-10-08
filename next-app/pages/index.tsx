import HeroBlock from "@/components/HeroBlock";
import NavBar from "@/components/navBar";
import { getLandingPageData } from "@/controller/LandingPageController";
import { LandingPageModel } from "@/models/LandingPageModel";
import { GetStaticProps } from "next";
import "../app/globals.css";

const Home = ({ blocks }: LandingPageModel) => {
  return (
    <div>
      <NavBar />
      {blocks.map((block, index) => (
        <div key={index}>
          {block.__component === "blocks.hero" && <HeroBlock {...block} />}
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = getLandingPageData;

export default Home;
