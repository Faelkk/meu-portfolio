import { useState } from "react";
import { useProjects } from "../../app/hooks/useProjects";
import type { Project } from "../../app/entities/Project";


const useProject = (handleOpenModal: () => void) => {
  const { projects, isLoading } = useProjects();

  const [projectModal, setProjectModal] = useState<Project | null>(null);

  const handleClickProject = (project: Project | null) => {
    setProjectModal(project);
    handleOpenModal();
  };

  return {
    projectModal,
    projects,
    isLoading,
    handleClickProject,
  };
};

export default useProject;
