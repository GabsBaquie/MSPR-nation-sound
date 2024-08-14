export type SectionProps = {
  title: string;
  description: string;
  image?: {
    url: string;
    alternativeText: string;
  };
  button?: {
    link: string;
    title: string;
    isExternal: boolean;
    type?: string;
  };
};

export class SectionModel {
  title: string;
  description: string;
  imageUrl: string;
  button?: {
    link: string;
    title: string;
    isExternal: boolean;
    type?: string;
  };

  constructor(props: SectionProps) {
    const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

    this.title = props.title;
    this.description = props.description;
    this.imageUrl = props.image ? `${baseURL}${props.image.url}` : "";
    this.button = props.button;
  }
}
