import { useEffect, useState } from "react";
import type { SkillFetch } from "../entities/Skill";




export function useSkills() {
  const [data, setData] = useState<SkillFetch | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        const mock: SkillFetch = {
          skills: [
            {
              name: "React",
              description: "Biblioteca para construção de interfaces",
              url: "https://react.dev"
            },
            {
              name: "TypeScript",
              description: "Superset do JavaScript com tipagem estática",
              url: "https://www.typescriptlang.org"
            },
            {
              name: "Node.js",
              description: "Runtime JavaScript para backend",
              url: "https://nodejs.org"
            }
          ]
        };

        setData(mock);
      } catch {
        setError("Erro ao buscar skills");
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return { skills:data?.skills, isLoading:loading, error };
}
