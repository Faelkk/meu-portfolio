import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import type { Project } from "../../../../app/hooks/useProjects";
import Modal from "../../../../Components/Modal/Modal";
import ImageDefaultModal from "../ImageDefaultModal/ImageDefaultModal";

interface ModalProjectsProps {
  projectModal: Project | null;
  onCloseModal: () => void;
  isVisibleModal: boolean;
}

const ModalProjects = ({ projectModal, onCloseModal, isVisibleModal }: ModalProjectsProps) => {
  if (!projectModal) return null;

  return (
    <Modal
      title={projectModal.name ?? "Detalhes do projeto"}
      onClose={onCloseModal}
      open={isVisibleModal}
      classNameOverlay="data-[state=open]:animate-overlayShow"
      classNameContent="project-dialog"
    >
      <div className="project-dialog-layout">
        <aside className="project-dialog-summary">
          <div className="project-dialog-logo">
            {projectModal.cardimage?.trim() ? (
              <img src={projectModal.cardimage} alt="" aria-hidden="true" />
            ) : (
              <span>Projeto</span>
            )}
          </div>

          <h2>{projectModal.name}</h2>

          <div className="project-dialog-tags">
            {projectModal.technologies?.map((technology) => (
              <span key={technology.name}>{technology.name}</span>
            ))}
          </div>

          <div className="project-dialog-actions">
            <a href={projectModal.urlGithub} target="_blank" rel="noreferrer">
              <GitHubLogoIcon /> Código fonte
            </a>
            <a href={projectModal.url} target="_blank" rel="noreferrer">
              Abrir projeto <ArrowTopRightIcon />
            </a>
          </div>
        </aside>

        <section className="project-dialog-details">
          {projectModal.defaultimage?.trim() ? (
            <a href={projectModal.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${projectModal.name}`}>
              <figure className="project-dialog-image">
                <ImageDefaultModal
                  className="h-full w-full object-cover object-top opacity-0 transition-opacity duration-200"
                  src={projectModal.defaultimage}
                  alt={`Interface do projeto ${projectModal.name}`}
                />
              </figure>
            </a>
          ) : (
            <div className="project-dialog-image project-dialog-empty">Imagem não disponível</div>
          )}

          <div className="project-dialog-copy">
            <h3>Sobre o projeto</h3>
            <p>{projectModal.description}</p>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default ModalProjects;
