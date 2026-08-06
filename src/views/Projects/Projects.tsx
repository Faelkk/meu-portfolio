import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Container from "../../Components/Container/Container";
import Loading from "../../Components/Loading/Loading";
import useProject from "./useProject";
import ModalProjects from "./components/ModalProjects/ModalProjects";
import useModal from "../../Components/Modal/useModal";

const Projects = () => {
  const { isVisibleModal, handleOpenModal, handleCloseModal } = useModal();
  const { projectModal, projects, isLoading, handleClickProject } = useProject(handleOpenModal);

  if (isLoading) return <Loading isLoading={isLoading} />;

  const allProjects = projects ?? [];

  return (
    <Container className="section-shell" id="projects">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="section-title">Projetos.</h2>
          </div>
          <a className="text-link" href="https://github.com/Faelkk?tab=repositories" target="_blank" rel="noreferrer">
            Ver todos no GitHub <ArrowTopRightIcon />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {allProjects.map((project, index) => (
            <article className="project-card group" key={project.name}>
              <button className="project-preview" onClick={() => handleClickProject(project)} aria-label={`Ver detalhes de ${project.name}`}>
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                {project.defaultimage?.trim() ? (
                  <img src={project.defaultimage} alt={`Interface do projeto ${project.name}`} />
                ) : (
                  <img className="project-logo" src={project.cardimage} alt="" />
                )}
              </button>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">{project.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies?.slice(0, 4).map((technology) => (
                        <span className="project-tag" key={technology.name}>{technology.name}</span>
                      ))}
                    </div>
                  </div>
                  <a className="icon-link" href={project.urlGithub} target="_blank" rel="noreferrer" aria-label={`GitHub de ${project.name}`}>
                    <GitHubLogoIcon />
                  </a>
                </div>
                <p className="mt-5 line-clamp-2 leading-7 text-gray-600 dark:text-gray-400">{project.description}</p>
                <button className="mt-6 text-link" onClick={() => handleClickProject(project)}>
                  Explorar projeto <ArrowTopRightIcon />
                </button>
              </div>
            </article>
          ))}
        </div>

        <ModalProjects projectModal={projectModal} onCloseModal={handleCloseModal} isVisibleModal={isVisibleModal} />
      </section>
    </Container>
  );
};

export default Projects;
