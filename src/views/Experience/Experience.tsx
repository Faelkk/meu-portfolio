import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Container from "../../Components/Container/Container";

const experiences = [
  {
    company: "Trilhante",
    role: "Desenvolvedor de Software Júnior",
    context: "Tempo integral · Remoto",
    period: "mar 2026 · atual · 6 meses",
    highlights: [
      "Atuação full stack em aplicações web escaláveis com TypeScript, Next.js, React, Node.js, PostgreSQL e Prisma ORM.",
      "Entrega de funcionalidades ponta a ponta, abrangendo interfaces, APIs, regras de negócio e deploy em produção.",
      "Otimização de PostgreSQL que reduziu entre 32% e 48% o tempo de execução de uma rotina crítica.",
      "Integração com três provedores de IA e workflows assíncronos com filas, jobs, retentativas e tratamento de falhas.",
      "Testes automatizados, PostHog, Amazon S3, Vercel, controles de acesso, auditoria e evolução do design system.",
    ],
  },
  {
    company: "Trilhante",
    role: "Estagiário em Desenvolvimento de Software",
    context: "Estágio · Remoto",
    period: "fev 2026 · mar 2026 · 2 meses",
    highlights: [
      "Desenvolvimento de interfaces, APIs, integrações e regras de negócio.",
      "Autenticação com OAuth, conteinerização com Docker e utilização de serviços AWS.",
      "Participação em decisões de arquitetura e melhorias de desempenho, segurança, estabilidade e qualidade do código.",
    ],
  },
];

const Experience = () => (
  <Container className="section-shell bg-gray-100/70 dark:bg-white/[.025]" id="experience">
    <section className="experience-layout w-full max-w-7xl px-6 lg:px-10">
      <div className="experience-intro">
        <h2 className="section-title">Experiência profissional.</h2>
        <p>
          Sete meses na Trilhante, evoluindo de estágio para uma posição júnior com responsabilidade ponta a ponta.
        </p>
        <a href="https://www.linkedin.com/in/achtenrafael/" target="_blank" rel="noreferrer">
          Ver perfil no LinkedIn <ArrowTopRightIcon />
        </a>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.role}>
            <div className="experience-meta">
              <span>{experience.period}</span>
              <a href="https://www.linkedin.com/company/15190353/" target="_blank" rel="noreferrer" aria-label="Visitar Trilhante no LinkedIn">
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

export default Experience;
