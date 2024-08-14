import axios from "axios";
import { GetStaticProps } from "next";
import { LandingPageModel } from "../models/LandingPageModel";

export const getLandingPageData: GetStaticProps = async () => {
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
