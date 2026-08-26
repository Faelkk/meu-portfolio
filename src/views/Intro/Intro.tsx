import { ArrowDownIcon, FileTextIcon } from "@radix-ui/react-icons";
import Container from "../../Components/Container/Container";
import { useLanguage } from "../../app/i18n/LanguageContext";

const technologies = [
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS",
  "React",
  "Next.js",
  "AngularJS",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "C#",
  "ASP.NET",
  ".NET Framework",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "MongoDB",
  "Redis",
  "SQL",
  "Prisma ORM",
  "APIs REST",
  "OAuth 2.0",
  "LLM integrations",
  "Amazon Web Services",
  "Amazon EC2",
  "Amazon S3",
  "Cloud computing",
  "Cloud storage",
  "Vercel",
  "Docker",
  "Containerization",
  "Git",
  "GitHub",
  "CI/CD",
  "PostHog",
  "Test automation",
  "E2E testing",
  "Software observability",
  "Web Performance Monitoring",
  "Software architecture",
  "SOLID principles",
  "Scrum",
  "Kanban",
];

const technologyLabelsPt: Record<string, string> = {
  "LLM integrations": "Integração com LLMs",
  "Cloud computing": "Computação em nuvem",
  "Cloud storage": "Armazenamento em nuvem",
  "Containerization": "Conteinerização",
  "Test automation": "Automação de testes",
  "E2E testing": "Testes E2E",
  "Software observability": "Observabilidade de software",
  "Software architecture": "Arquitetura de software",
  "SOLID principles": "Princípios SOLID",
};

const Intro = () => {
  const { language, content } = useLanguage();
  const localizedTechnologies = technologies.map((technology) =>
    language === "pt" ? technologyLabelsPt[technology] ?? technology : technology,
  );

  return (
    <Container className="" id="inicio">
      <section className="flex min-h-[calc(100dvh-81px)] w-full max-w-7xl flex-col justify-center px-6 py-16 lg:px-10">
        <div className="hero-copy max-w-5xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            {content.intro.eyebrow}
          </p>

          <h1 className="max-w-5xl text-[clamp(3.1rem,8vw,7.8rem)] font-semibold leading-[0.91] tracking-[-0.07em] text-gray-950 dark:text-white">
            {content.intro.title}
            <span className="block text-accent">{content.intro.accent}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
            {content.intro.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#projects">
              {content.intro.projects}
              <ArrowDownIcon />
            </a>
            <a className="button-secondary" href="#contact">{content.intro.contact}</a>
            <a
              className="button-secondary"
              href={language === "pt" ? "/curriculos/rafael-achtenberg-curriculo-pt.pdf" : "/curriculos/rafael-achtenberg-resume-en.pdf"}
              target="_blank"
              rel="noreferrer"
            >
              {language === "pt" ? content.intro.resumePt : content.intro.resumeEn}
              <FileTextIcon />
            </a>
          </div>
        </div>

        <div className="hero-marquee mt-14" aria-label={`${content.intro.technologies}: ${localizedTechnologies.join(", ")}`}>
          <div className="hero-marquee-track">
            {[0, 1].map((group) => (
              <div className="hero-marquee-group" aria-hidden="true" key={group}>
                {localizedTechnologies.map((technology) => (
                  <span key={`${group}-${technology}`}><i />{technology}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Intro;
