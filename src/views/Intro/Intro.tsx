import { ArrowDownIcon } from "@radix-ui/react-icons";
import Container from "../../Components/Container/Container";

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
  "Integração com LLMs",
  "Amazon Web Services",
  "Amazon EC2",
  "Amazon S3",
  "Computação em nuvem",
  "Armazenamento em nuvem",
  "Vercel",
  "Docker",
  "Conteinerização",
  "Git",
  "GitHub",
  "CI/CD",
  "PostHog",
  "Automação de testes",
  "Testes E2E",
  "Observabilidade de software",
  "Web Performance Monitoring",
  "Arquitetura de software",
  "Princípios SOLID",
  "Scrum",
  "Kanban",
];

const Intro = () => {
  return (
    <Container className="" id="inicio">
      <section className="flex min-h-[calc(100dvh-81px)] w-full max-w-7xl flex-col justify-center px-6 py-16 lg:px-10">
        <div className="hero-copy max-w-5xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            Full Stack Developer
          </p>

          <h1 className="max-w-5xl text-[clamp(3.1rem,8vw,7.8rem)] font-semibold leading-[0.91] tracking-[-0.07em] text-gray-950 dark:text-white">
            Software completo.
            <span className="block text-accent">Do produto ao deploy.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
            Construo interfaces, APIs e infraestrutura para produtos rápidos, confiáveis e fáceis de evoluir.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#projects">
              Ver projetos
              <ArrowDownIcon />
            </a>
            <a className="button-secondary" href="#contact">Falar comigo</a>
          </div>
        </div>

        <div className="hero-marquee mt-14" aria-label={`Tecnologias: ${technologies.join(", ")}`}>
          <div className="hero-marquee-track">
            {[0, 1].map((group) => (
              <div className="hero-marquee-group" aria-hidden="true" key={group}>
                {technologies.map((technology) => (
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
