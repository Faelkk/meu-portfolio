import { useEffect, useState } from "react";
import { projectData } from "../../mock/project/Project";

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
         setData(projectData);
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
