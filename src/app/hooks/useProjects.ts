import { useEffect, useState } from "react";

export interface ProjectFetch {
  projects: Project[];
}

export interface Project {
  id?: string;
  name?: string;
  url?: string;
  urlGithub?: string;
  description?: string;
  technologies?: Technology[];
  cardimage: string;
  defaultimage: string;
}
export interface Technology {
  name: string;
  url: string;
}


export function useProjects() {
  const [data, setData] = useState<ProjectFetch | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        const mock: ProjectFetch = {
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
                  url: "https://react.dev"
                },
                {
                  name: "TypeScript",
                  url: "https://www.typescriptlang.org"
                }
              ]
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
                  url: "https://nodejs.org"
                },
                {
                  name: "Express",
                  url: "https://expressjs.com"
                }
              ]
            }
            
          ]
        };

        setData(mock);
      } catch {
        setError("Erro ao buscar projetos");
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return { projects:data?.projects, isLoading:loading, error };
}
