import Container from "../../Components/Container/Container";
import { useLanguage } from "../../app/i18n/LanguageContext";

const About = () => {
  const { content } = useLanguage();

  return (
    <Container className="section-shell" id="about">
      <section className="grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[.7fr_1.3fr] lg:gap-24 lg:px-10">
        <div>
          <h2 className="section-title">{content.about.title}</h2>
        </div>

        <div className="space-y-8">
          <p className="text-2xl font-medium leading-snug tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
            {content.about.lead}
          </p>
          <p className="max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
            {content.about.description}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {content.about.principles.map(([number, title, principleCopy]) => (
              <article className="principle-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{principleCopy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
