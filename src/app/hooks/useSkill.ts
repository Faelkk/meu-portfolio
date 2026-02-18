import { useEffect, useState } from "react";
import type { SkillFetch } from "../entities/Skill";
import { skillData } from "../../mock/skills/Skill";




export function useSkills() {
  const [data, setData] = useState<SkillFetch | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
       

         setData(skillData);
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
