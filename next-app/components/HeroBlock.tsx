// components/HeroBlock.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type HeroBlockProps = {
  heading: string;
  text: string;
  link?: {
    link: string;
    title: string;
    isExternal: boolean;
  };
  image?: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
};

const HeroBlock = ({ heading, text, link, image }: HeroBlockProps) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const imageUrl = image ? `${apiUrl}${image.data.attributes.url}` : "";

  return (
    <section>
      <h1>{heading}</h1>
      <p>{text}</p>
      {link && (
        <Button variant={"link"} className="">
          <Link href={link.link}>{link.title}</Link>
        </Button>
      )}
      {image && (
        <Image
          src={imageUrl}
          alt={image.data.attributes.alternativeText || "Hero Image"}
          width={200}
          height={200}
        />
      )}
    </section>
  );
};

export default HeroBlock;
