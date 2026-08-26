import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "pt" | "en";

const copy = {
  pt: {
    navigation: {
      ariaLabel: "Navegação principal",
      homeLabel: "Rafael Achtenberg, início",
      openMenu: "Abrir menu",
      menu: "Menu",
      links: [
        ["Sobre", "#about"],
        ["Experiência", "#experience"],
        ["Tecnologias", "#skills"],
        ["Projetos", "#projects"],
        ["Contato", "#contact"],
      ],
      switchLanguage: "Mudar o site para inglês",
      theme: "Alternar tema",
    },
    intro: {
      eyebrow: "Full Stack Developer",
      title: "Software completo.",
      accent: "Do produto ao deploy.",
      description: "Construo interfaces, APIs e infraestrutura para produtos rápidos, confiáveis e fáceis de evoluir.",
      projects: "Ver projetos",
      contact: "Falar comigo",
      resumePt: "Ver currículo",
      resumeEn: "View resume",
      technologies: "Tecnologias",
    },
    about: {
      title: "Código com visão de produto.",
      lead: "Não entrego apenas telas ou endpoints. Entendo o contexto, tomo decisões técnicas e acompanho a solução até ela funcionar em produção.",
      description: "Atuo no desenvolvimento de interfaces, APIs, regras de negócio e integrações. Tenho experiência com sistemas orientados a dados, processamento assíncrono, IA, mensageria e infraestrutura em nuvem. Sempre equilibrando velocidade, qualidade e manutenção.",
      principles: [
        ["01", "Produto", "Clareza sobre o problema antes da solução."],
        ["02", "Arquitetura", "Soluções simples, robustas e fáceis de evoluir."],
        ["03", "Entrega", "Deploy, observabilidade e melhoria contínua."],
      ],
    },
    experience: {
      title: "Experiência profissional.",
      intro: "Sete meses na Trilhante, evoluindo de estágio para uma posição júnior com responsabilidade ponta a ponta.",
      linkedin: "Ver perfil no LinkedIn",
      companyLabel: "Visitar Trilhante no LinkedIn",
      entries: [
        {
          company: "Trilhante",
          role: "Desenvolvedor de Software Júnior",
          context: "Tempo integral · Remoto",
          period: "mar 2026 · atual · 6 meses",
          highlights: [
            "Atuação full stack em aplicações escaláveis com TypeScript, Next.js, React, Node.js, PostgreSQL e Prisma ORM.",
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
      ],
    },
    skills: {
      titleFirst: "Ferramentas certas.",
      titleSecond: "Decisões melhores.",
      description: "Tecnologias modernas para construir produtos completos, performáticos e observáveis sem perder a simplicidade.",
      dataCloud: "Dados & Cloud",
    },
    projects: {
      title: "Projetos.",
      allGithub: "Ver todos no GitHub",
      viewDetails: "Ver detalhes de",
      interface: "Interface do projeto",
      github: "GitHub de",
      explore: "Explorar projeto",
      fallbackTitle: "Detalhes do projeto",
      project: "Projeto",
      source: "Código fonte",
      open: "Abrir projeto",
      unavailable: "Imagem não disponível",
      about: "Sobre o projeto",
    },
    contact: {
      title: "Vamos conversar.",
      description: "Se você precisa de alguém que pense no produto e entregue o código, me conte o contexto. Respondo direto, sem formulário.",
      social: "Redes sociais",
    },
    footer: "Projetado e desenvolvido por Rafael.",
    close: "Fechar",
    backToTop: "Voltar ao início",
  },
  en: {
    navigation: {
      ariaLabel: "Main navigation",
      homeLabel: "Rafael Achtenberg, home",
      openMenu: "Open menu",
      menu: "Menu",
      links: [
        ["About", "#about"],
        ["Experience", "#experience"],
        ["Skills", "#skills"],
        ["Projects", "#projects"],
        ["Contact", "#contact"],
      ],
      switchLanguage: "Mudar o site para português",
      theme: "Toggle theme",
    },
    intro: {
      eyebrow: "Full Stack Developer",
      title: "End-to-end software.",
      accent: "From product to deployment.",
      description: "I build interfaces, APIs, and infrastructure for fast, reliable products that are easy to evolve.",
      projects: "View projects",
      contact: "Contact me",
      resumePt: "View Portuguese resume",
      resumeEn: "View resume",
      technologies: "Skills",
    },
    about: {
      title: "Code with a product mindset.",
      lead: "I do more than deliver screens or endpoints. I understand the context, make technical decisions, and follow the solution through to production.",
      description: "I work across interfaces, APIs, business rules, and integrations. My experience includes data-driven systems, asynchronous processing, AI, messaging, and cloud infrastructure, always balancing speed, quality, and maintainability.",
      principles: [
        ["01", "Product", "Understand the problem before defining the solution."],
        ["02", "Architecture", "Simple, robust solutions designed to evolve."],
        ["03", "Delivery", "Deployment, observability, and continuous improvement."],
      ],
    },
    experience: {
      title: "Professional experience.",
      intro: "Seven months at Trilhante, progressing from an internship to a junior role with end-to-end ownership.",
      linkedin: "View LinkedIn profile",
      companyLabel: "Visit Trilhante on LinkedIn",
      entries: [
        {
          company: "Trilhante",
          role: "Junior Software Developer",
          context: "Full-time · Remote",
          period: "Mar 2026 · Present · 6 months",
          highlights: [
            "Full stack development of scalable applications with TypeScript, Next.js, React, Node.js, PostgreSQL, and Prisma ORM.",
            "End-to-end feature delivery across interfaces, APIs, business rules, and production deployments.",
            "PostgreSQL optimizations that reduced the execution time of a critical routine by 32% to 48%.",
            "Integration with three AI providers and asynchronous workflows with queues, jobs, retries, and failure handling.",
            "Automated testing, PostHog, Amazon S3, Vercel, access controls, audit trails, and design system evolution.",
          ],
        },
        {
          company: "Trilhante",
          role: "Software Development Intern",
          context: "Internship · Remote",
          period: "Feb 2026 · Mar 2026 · 2 months",
          highlights: [
            "Development of interfaces, APIs, integrations, and business rules.",
            "OAuth authentication, Docker containerization, and AWS services.",
            "Contribution to architecture decisions and improvements in performance, security, stability, and code quality.",
          ],
        },
      ],
    },
    skills: {
      titleFirst: "The right tools.",
      titleSecond: "Better decisions.",
      description: "Modern technologies for building complete, performant, and observable products without losing simplicity.",
      dataCloud: "Data & Cloud",
    },
    projects: {
      title: "Projects.",
      allGithub: "View all on GitHub",
      viewDetails: "View details for",
      interface: "Project interface for",
      github: "GitHub repository for",
      explore: "Explore project",
      fallbackTitle: "Project details",
      project: "Project",
      source: "Source code",
      open: "Open project",
      unavailable: "Image unavailable",
      about: "About the project",
    },
    contact: {
      title: "Let's talk.",
      description: "If you need someone who can think through the product and deliver the code, tell me about the context. I reply directly, no forms.",
      social: "Social profiles",
    },
    footer: "Designed and developed by Rafael.",
    close: "Close",
    backToTop: "Back to top",
  },
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: (typeof copy)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    return savedLanguage === "en" ? "en" : "pt";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = language === "pt" ? "Rafael Achtenberg | Portfólio" : "Rafael Achtenberg | Portfolio";
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, content: copy[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// The hook lives beside its provider so locale types and copy remain a single source of truth.
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) throw new Error("useLanguage must be used within LanguageProvider");

  return context;
};
