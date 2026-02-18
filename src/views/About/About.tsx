
import { useIsVisibleItemOnScreen } from "../../app/hooks/useIsVisibleItemOnScreen";
import { cn } from "../../app/utils/cn/cn";

import imgCoding from "../../assets/defaults/Hand coding-bro.svg";
import Container from "../../Components/Container/Container";
import { aboutData } from "../../mock/about/About";

const About = () => {
  const { isVisible, elementRef } = useIsVisibleItemOnScreen();

   const renderParagraph = (text: string) => {
    const words = text.split(" ");

    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,]/g, "");

      if (aboutData.highlightedTechnologies.includes(cleanWord)) {
        return (
          <strong key={index} className="font-semibold">
            {word}{" "}
          </strong>
        );
      }

      return word + " ";
    });
  };

  return (
    <Container className="mt-6" id="about">
      <section
        ref={elementRef}
        className={cn(
          "flex md:justify-between items-center w-[90%]",
          isVisible ? "animate-startSlideRight" : ""
        )}
      >
        <div className="hidden md:w-[50%] md:max-w-[50%] md:h-full lg:flex">
          <img
            src={imgCoding}
            className="lg:w-100 2xl:w-175 2xl:h-150"
            alt="Imagem de Coding"
          />
        </div>

        <div className="flex flex-col justify-center items-center lg:w-[50%] gap-4">
          <h2 className="font-bold text-4xl mb-10 text-gray-950 dark:text-gray-200">Sobre mim</h2>

          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index} className="2xl:text-[1.2rem] text-woodsmoke-700 dark:text-woodsmoke-300">
              {renderParagraph(paragraph)}
            </p>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default About;
