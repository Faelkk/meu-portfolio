import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Container from "../../Components/Container/Container";
import { useLanguage } from "../../app/i18n/LanguageContext";

const Experience = () => {
  const { content } = useLanguage();

  return (
  <Container className="section-shell bg-gray-100/70 dark:bg-white/[.025]" id="experience">
    <section className="experience-layout w-full max-w-7xl px-6 lg:px-10">
      <div className="experience-intro">
        <h2 className="section-title">{content.experience.title}</h2>
        <p>{content.experience.intro}</p>
        <a href="https://www.linkedin.com/in/achtenrafael/" target="_blank" rel="noreferrer">
          {content.experience.linkedin} <ArrowTopRightIcon />
        </a>
      </div>

      <div className="experience-timeline">
        {content.experience.entries.map((experience) => (
          <article className="experience-card" key={experience.role}>
            <div className="experience-meta">
              <span>{experience.period}</span>
              <a href="https://www.linkedin.com/company/15190353/" target="_blank" rel="noreferrer" aria-label={content.experience.companyLabel}>
                <ArrowTopRightIcon />
              </a>
            </div>
            <h3>{experience.company}</h3>
            <p className="experience-role">{experience.role}</p>
            <p className="experience-context">{experience.context}</p>
            <ul>
              {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  </Container>
  );
};

export default Experience;
