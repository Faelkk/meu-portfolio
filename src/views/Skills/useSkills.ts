import { useState } from "react";
import { useSkills } from "../../app/hooks/useSkill";


interface useSkilsProps {
  setStatus: (skillName: string) => void;
  status: {
    isHovered: boolean;
  };
}

export const useSkillsController = ({ setStatus, status }: useSkilsProps) => {
  const { skills, isLoading } = useSkills();

  const [animationReset, setAnimationReset] = useState(false);

  const handleIconClick = (skillName: string) => {
    setAnimationReset(true);

    setTimeout(() => {
      setAnimationReset(false);
    }, 10);

    setStatus(skillName);
  };

  const shouldAnimate = status.isHovered && !animationReset;

  return {
    skills,
    isLoading,
    shouldAnimate,
    handleIconClick,
  };
};
