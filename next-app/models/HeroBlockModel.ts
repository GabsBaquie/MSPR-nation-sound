// components/models/HeroBlockModel.ts
import { SectionModel, SectionProps } from "./HeroSectionModel";

export type HeroBlockProps = {
  title: string;
  text: string;
  BtnLink?: Array<{
    id: number;
    link: string;
    title: string;
    isExternal: boolean;
    type?: string;
  }> | null;
  image?: {
    url: string;
    alternativeText: string;
  };
  section?: SectionProps;
};

export class HeroBlockModel {
  title: string;
  text: string;
  BtnLink?: Array<{
    link: string;
    title: string;
    isExternal: boolean;
    type?: string;
  }> | null;
  image: string;
  section?: SectionModel;

  constructor(props: HeroBlockProps) {
    this.title = props.title;
    this.text = props.text;
    this.BtnLink = props.BtnLink;

    const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

    // Gestion de l'image du Hero
    this.image = props.image ? `${baseURL}${props.image.url}` : "";

    // Gestion de la section
    if (props.section) {
      this.section = new SectionModel(props.section);
    }
  }
}
