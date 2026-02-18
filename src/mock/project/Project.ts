import type { ProjectFetch } from "../../app/hooks/useProjects";

export const projectData: ProjectFetch = {
  projects: [
    {
      id: "1",
      name: "Portfolio Dev",
      url: "https://meuportfolio.com",
      urlGithub: "https://github.com/user/portfolio",
      description: "Meu portfólio pessoal desenvolvido em React.",
      cardimage: "/images/portfolio-card.png",
      defaultimage: "/images/portfolio.png",
      technologies: [
        {
          name: "React",
          url: "https://react.dev",
        },
        {
          name: "TypeScript",
          url: "https://www.typescriptlang.org",
        },
      ],
    },
    {
      id: "2",
      name: "API Node",
      urlGithub: "https://github.com/user/api-node",
      description: "API REST construída com Node.js e Express.",
      cardimage: "/images/api-card.png",
      defaultimage: "/images/api.png",
      technologies: [
        {
          name: "Node.js",
          url: "https://nodejs.org",
        },
        {
          name: "Express",
          url: "https://expressjs.com",
        },
      ],
    },
  ],
};
