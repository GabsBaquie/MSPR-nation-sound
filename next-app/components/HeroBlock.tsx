import Image from "next/image";
import Link from "next/link";
import { HeroBlockController } from "../controller/HeroBlockController";
import { HeroBlockProps } from "../models/HeroBlockModel";
import { Button } from "../ui/button";

const HeroBlock = (props: HeroBlockProps) => {
  const controller = new HeroBlockController(props);
  const model = controller.getModel();

  return (
    <section className="flex flex-col text-center h-full mx-12% w-full px-5">
      <div className="flex flex-wrap pl-10 lg:flex-nowrap ">
        {/* Contenu principal */}
        <div className="flex flex-col w-screen max-w-md mx-auto mt-5 text-center md:mt-12 md:gap-4 align-center">
          <div>
            <h1 className="p-2 text-lg font-bold lg:mb-4 md:text-4xl">
              {model.title}
            </h1>
            <p className="p-2 text-sm md:mb-4 md:text-xl">{model.text}</p>
          </div>

          {/* Boutons */}
          <div className="flex flex-row justify-center mt-4 space-x-4 ">
            {model.BtnLink?.map((btn, index) => (
              <Button
                key={index}
                variant={
                  btn.type === "primary" || btn.type === "secondary"
                    ? (btn.type.toLocaleLowerCase() as "primary" | "secondary")
                    : "primary"
                }
                className="py-2 w-36 md:w-auto">
                <Link
                  className="text-xs text-wrap md:text-nowrap md:text-base"
                  href={btn.link || "#"}
                  target={btn.isExternal ? "_blank" : "_self"}
                  rel={btn.isExternal ? "noopener noreferrer" : ""}>
                  {btn.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Image héroïque */}
        {model.image && (
          <div className="relative items-center max-w-xl mx-auto my-10 lg:m-0 md:w-full min-w-sm">
            <Image
              className="lg:absolute top-8 lg:top-[-50px] lg:right-24 z-10"
              src={model.image}
              alt="Hero Image"
              width={550}
              height={450}
              objectFit="contain"
              priority
            />
          </div>
        )}
      </div>

      {/* Section */}
      <div className="relative">
        <h1 className="text-lg font-bold lg:mb-4 md:text-4xl">
          {model.section?.title}
        </h1>
        {/* Image de la section Hero */}
        {model.section?.imageUrl && (
          <div className="float-left" style={{ borderRadius: "50%" }}>
            <Image
              src={model.section.imageUrl}
              alt="Hero Image"
              width={150}
              height={150}
              objectFit="contain"
              priority
            />
          </div>
        )}
        {/* Texte qui entoure l'image */}
        <div className="text-justify">
          <p className="text-sm md:mb-4 md:text-xl">
            {model.section?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
